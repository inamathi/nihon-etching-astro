import * as pdfjs from "pdfjs-dist/build/pdf.mjs";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

(pdfjs as any).GlobalWorkerOptions.workerSrc = workerUrl;

let viewScale = 1; // ← 表示専用（初期=100%）

type Opts = {
  initialPage?: number;

  /**
   * 初期スケールを明示したい場合に指定。
   * 未指定の場合は「表示領域（.c-pdf__stage）の幅にフィット」するスケールを自動計算します。
   */
  initialScale?: number;

  minScale?: number;
  maxScale?: number;

  /**
   * 1回のズーム増減（加算）
   * 例: 0.1 → 10%刻み
   */
  scaleStep?: number;

  /**
   * 初期表示を幅フィットにしたくない場合のみ false
   * （initialScale 未指定時のみ効きます）
   */
  fitOnInit?: boolean;
};

export function mountPdfViewer(root: HTMLElement, opts: Opts = {}) {
  if (root.dataset.pdfMounted === "1") return;
  root.dataset.pdfMounted = "1";

  const pdfSrc = root.getAttribute("data-src");
  if (!pdfSrc) return;

  const canvas = root.querySelector<HTMLCanvasElement>("[data-canvas]");
  if (!canvas) return;

  const btnPrev = root.querySelector<HTMLButtonElement>("[data-prev]");
  const btnNext = root.querySelector<HTMLButtonElement>("[data-next]");
  const pageNowEl = root.querySelector<HTMLElement>("[data-page-now]");
  const pageTotalEl = root.querySelector<HTMLElement>("[data-page-total]");
  const pageInput = root.querySelector<HTMLInputElement>("[data-page-input]");
  const btnGo = root.querySelector<HTMLButtonElement>("[data-go]");
  const btnZoomIn = root.querySelector<HTMLButtonElement>("[data-zoom-in]");
  const btnZoomOut = root.querySelector<HTMLButtonElement>("[data-zoom-out]");
  const btnZoomReset =
    root.querySelector<HTMLButtonElement>("[data-zoom-reset]");

  const isSP = () => window.matchMedia("(max-width: 767.98px)").matches;

  const INITIAL_PAGE = Math.max(1, opts.initialPage ?? 1);
  const MIN_SCALE = opts.minScale ?? 0.6;
  const MAX_SCALE = opts.maxScale ?? (isSP() ? 1.6 : 3.0);
  const STEP = opts.scaleStep ?? (isSP() ? 0.05 : 0.1);

  const FIT_ON_INIT = opts.fitOnInit ?? true;

  let pdfDoc: any = null;
  let pageNum = INITIAL_PAGE;
  let totalPages = 1;

  // 現在スケール
  let scale = opts.initialScale ?? 1.0;
  // Reset の戻り先（初期表示の基準）
  let baseScale = scale;

  let rendering = false;
  let pendingRender = false;

  const clamp = (n: number, min: number, max: number) =>
    Math.min(max, Math.max(min, n));

  const getStage = () => root.querySelector<HTMLElement>(".c-pdf__stage");

  const updateUi = () => {
    if (pageNowEl) pageNowEl.textContent = String(pageNum);
    if (pageTotalEl) pageTotalEl.textContent = String(totalPages);
    if (pageInput) pageInput.value = String(pageNum);

    if (btnPrev) btnPrev.disabled = pageNum <= 1;
    if (btnNext) btnNext.disabled = pageNum >= totalPages;

    if (btnZoomReset) {
      const percent = Math.round((scale / baseScale) * 100);
      btnZoomReset.textContent = `${percent}%`;
    }
  };

  const calcInitWidth = () => {
    const stage = getStage();
    if (!stage) return 800;

    const cs = getComputedStyle(stage);
    const padX =
      (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);

    const innerW = Math.max(1, stage.clientWidth - padX);
    return Math.min(1100, Math.min(800, innerW));
  };

  //   const calcFitScale = async (): Promise<number> => {
  //     const stage = getStage();
  //     if (!stage || !pdfDoc) return clamp(scale, MIN_SCALE, MAX_SCALE);

  //     // scale=1 でのページ論理サイズ
  //     const page = await pdfDoc.getPage(pageNum);
  //     const base = page.getViewport({ scale: 1 });

  //     // stage の内側幅（paddingを差し引き）
  //     const cs = getComputedStyle(stage);
  //     const padX =
  //       (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
  //     const innerW = Math.max(1, stage.clientWidth - padX);

  //     return clamp(innerW / base.width, MIN_SCALE, MAX_SCALE);
  //   };

  const renderCurrent = async () => {
    if (!pdfDoc) return;

    if (rendering) {
      pendingRender = true;
      return;
    }
    rendering = true;

    try {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale });

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);

      const isZoomed = scale !== baseScale;

      if (isZoomed) {
        canvas.style.width = `${Math.ceil(viewport.width)}px`;
        canvas.style.height = `${Math.ceil(viewport.height)}px`;
      } else {
        canvas.style.width = "100%";
        canvas.style.height = "auto";
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      await page.render({ canvasContext: ctx, viewport }).promise;
      canvas.style.transform = `scale(${scale})`;

      updateUi();
    } finally {
      rendering = false;

      if (pendingRender) {
        pendingRender = false;
        renderCurrent();
      }
    }

    if (!canvas.dataset.baseW || !canvas.dataset.baseH) {
      const r = canvas.getBoundingClientRect();
      canvas.dataset.baseW = String(Math.ceil(r.width));
      canvas.dataset.baseH = String(Math.ceil(r.height));

      canvas.style.width = `${Math.ceil(r.width)}px`;
      canvas.style.height = `${Math.ceil(r.height)}px`;
    }
  };

  const goTo = (n: number) => {
    if (!pdfDoc) return;
    pageNum = clamp(n, 1, totalPages);
    renderCurrent();
  };

  const zoomTo = (s: number) => {
    scale = clamp(s, MIN_SCALE, MAX_SCALE);

    canvas.style.transform = `scale(${scale})`;

    if (scale !== 1) root.classList.add("is-zoomed");
    else root.classList.remove("is-zoomed");

    updateUi();
  };

  const init = async () => {
    pdfDoc = await (pdfjs as any).getDocument(pdfSrc).promise;
    totalPages = pdfDoc.numPages;
    pageNum = clamp(pageNum, 1, totalPages);

    // 初期スケール
    if (typeof opts.initialScale === "number") {
      scale = clamp(opts.initialScale, MIN_SCALE, MAX_SCALE);
      baseScale = scale;
    } else if (FIT_ON_INIT) {
      //   scale = await calcFitScale();
      //   baseScale = scale;
      scale = 1;
      baseScale = 1;
    } else {
      scale = clamp(scale, MIN_SCALE, MAX_SCALE);
      baseScale = scale;
    }

    root.classList.remove("is-zoomed");
    updateUi();
    await renderCurrent();
    const w0 = calcInitWidth();
    canvas.style.width = `${Math.round(w0)}px`;
    canvas.style.height = "auto";

    const r0 = canvas.getBoundingClientRect();
    canvas.dataset.baseW = String(Math.ceil(r0.width));
    canvas.dataset.baseH = String(Math.ceil(r0.height));

    scale = 1;
    canvas.style.transform = `scale(${scale})`;
    updateUi();
  };

  // events
  btnPrev?.addEventListener("click", () => goTo(pageNum - 1));
  btnNext?.addEventListener("click", () => goTo(pageNum + 1));

  btnGo?.addEventListener("click", () => {
    if (!pageInput) return;
    goTo(Number(pageInput.value) || 1);
  });
  pageInput?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    goTo(Number(pageInput.value) || 1);
  });

  root.addEventListener("click", (e) => {
    const t = e.target as Element | null;
    if (!t) return;

    if (t.closest("[data-zoom-in]")) zoomTo(scale + STEP);
    if (t.closest("[data-zoom-out]")) zoomTo(scale - STEP);
    if (t.closest("[data-zoom-reset]")) zoomTo(1);
  });

  // リサイズで「初期表示が幅フィット」だった場合は、Reset基準も更新したいなら有効化
  //（ズーム中は勝手に変えない）
  window.addEventListener("resize", () => {
    if (!pdfDoc) return;
    if (scale !== baseScale) return; // ズーム中は触らない
    if (typeof opts.initialScale === "number") return; // 固定初期倍率の人は触らない
    if (!FIT_ON_INIT) return;

    // 連打防止：描画はキューに乗せる
    (async () => {
      const nextBase = await calcFitScale();
      baseScale = nextBase;
      scale = nextBase;
      root.classList.remove("is-zoomed");
      renderCurrent();
    })();
  });

  init().catch((e) => console.error("PDF init failed:", e));
}
