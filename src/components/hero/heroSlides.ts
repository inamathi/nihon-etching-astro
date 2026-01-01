// src/components/hero/heroSlides.ts
export type HeroSlide = {
  type: "text" | "lottie";
  variant: string;
  key: string; // multilingual.ts のキー
  className?: string;
};

export const heroSlides: readonly HeroSlide[] = [
  {
    type: "text",
    variant: "en-serif",
    key: "hero.s1",
    className: "hero__line--en",
  },
  { type: "text", variant: "jp-strong", key: "hero.s2" },
  { type: "text", variant: "jp-strong", key: "hero.s3" },
  { type: "text", variant: "jp-strong-ml", key: "hero.s4" },
  { type: "text", variant: "jp-strong-ml", key: "hero.s5" },
  { type: "text", variant: "jp-strong-ml", key: "hero.s6" },
  { type: "lottie", variant: "jp-logo", key: "hero.s7" },
] as const;
