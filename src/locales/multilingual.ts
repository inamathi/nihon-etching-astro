// src/locales/multilingual.ts

export const languages = ["ja", "en", "zh"] as const;
export type Lang = (typeof languages)[number];

/**
 * 翻訳辞書
 * 同じキーに ja / en を並べて管理する
 */
const messages = {
  nav: {
    top: {
      ja: "トップ",
      en: "Top",
      zh: "Top",
    },
    company: {
      ja: "会社情報",
      en: "Company",
      zh: "Company",
    },
    company_overview_access: {
      ja: "会社概要／アクセス",
      en: "Overview / Access",
      zh: "Overview / Access",
    },
    company_philosophy_environment: {
      ja: "経営理念／環境理念",
      en: "Philosophy / Environmental Policy",
      zh: "Philosophy / Environmental Policy",
    },
    company_history: {
      ja: "沿革",
      en: "History",
      zh: "History",
    },
    technology: {
      ja: "技術情報",
      en: "Technology",
      zh: "Technology",
    },
    tech_5axis: {
      ja: "5軸レーザー彫刻",
      en: "5-Axis Laser Engraving",
      zh: "5-Axis Laser Engraving",
    },
    tech_shibo: {
      ja: "シボ加工",
      en: "Texture (Shibo)",
      zh: "Texture (Shibo)",
    },
    tech_peening: {
      ja: "ピーニング加工",
      en: "Peening",
      zh: "Peening",
    },
    group: {
      ja: "グループ",
      en: "Group",
      zh: "Group",
    },
    group_ne: {
      ja: "NEグループ（直営）",
      en: "NE Group (Direct)",
      zh: "NE Group (Direct)",
    },
    group_nwn: {
      ja: "NWNグループ",
      en: "NWN Group",
      zh: "NWN Group",
    },
    group_sec: {
      ja: "SECグループ",
      en: "SEC Group",
      zh: "SEC Group",
    },
    recruit: {
      ja: "採用情報",
      en: "Careers",
      zh: "Careers",
    },
    contact: {
      ja: "お問い合わせ",
      en: "Contact",
      zh: "Contact",
    },
    download: {
      ja: "ダウンロード",
      en: "Download",
      zh: "Download",
    },
  },
  /* top about */
  topAbout: {
    title: { ja: "COMPANY", en: "COMPANY" },
    subtitle: {
      ja: "株式会社日本エッチングについて",
      en: "About Nihon Etching Co., Ltd.",
    },

    p1: {
      ja: "株式会社日本エッチングは昭和46年の創業以来、プラスティックや金属をはじめとするあらゆる素材に「シボ加工」を施す専門企業として、国内外で高い評価を得続けています。",
      en: "Since 1971, Nihon Etching has specialized in surface texturing for a wide range of materials—including plastics and metals—earning trust and recognition in Japan and abroad.",
    },
    p2: {
      ja: "素材の表面にさまざまな模様を刻み込むシボ加工により、プラスティック、金属、ガラス、石といった素材が持っている表情を引き出し、その付加価値を高めます。",
      en: "Through precision texturing, we reveal the inherent character of materials—plastics, metals, glass, and stone—and enhance their perceived value.",
    },
    p3: {
      ja: "多くのメーカーにとって、シボ加工は金型製作の最終工程に過ぎず、単なる「表面処理」と見なされがちです。日本エッチングはこれに異議を唱え、シボ加工が製品の「顔」を決定づける重要なデザイン要素であるという価値観を提案します。",
      en: "Texturing is often treated as a final step—just a surface finish. We believe it is a core design element that defines a product’s identity, and we advocate that value to our partners.",
    },

    sectionTitle: {
      ja: "デザイン性と機能性の融合を提案",
      en: "Design + Function, Together",
    },

    cards: {
      c1: {
        ja: "デザイナーの意図を汲み取った最適なシボパターンを提案いたします。",
        en: "We propose optimal textures aligned with the designer’s intent.",
      },
      c2: {
        ja: "滑り止め、反射防止、拡散、汚れの目立ちにくさ、ウェルドや引けを隠すなど、機能的側面を深く理解し最適なシボを提案します。",
        en: "We design textures for function—grip, anti-glare, diffusion, stain resistance, and hiding weld lines or sink marks.",
      },
      c3: {
        ja: "日本エッチングはデータとテクノロジーを駆使し、未来を創造するイノベーターへと進化します。",
        en: "We evolve as innovators—leveraging data and technology to shape the future.",
      },
      c4: {
        ja: "自社の技術力や価値観を積極的に発信し、業界全体をリードしていきます。",
        en: "We proactively share our capabilities and values to lead the industry forward.",
      },
      c5: {
        ja: "シボを通じて製品に新たな価値を与える存在として、お客様に訴えます。",
        en: "We deliver new value through texture—so your products stand out.",
      },
    },

    tagline: { ja: "『限界突破』", en: "BEYOND LIMITS" },
  },

  /* top Gallery */
  topGallery: {
    technology: {
      title: { ja: "TECHNOLOGY", en: "TECHNOLOGY" },
      subtitle: { ja: "日本エッチングの技術", en: "Nihon Etching TECHNOLOGY" },
      items: {
        t01: {
          alt: { ja: "ホーニング no.12", en: "Honing no.12" },
          title: {
            ja: "ホーニング no.12",
            en: "Honing no.12",
          },
          desc: {
            ja: "シボ加工はあなたの身の回りの様々なプラスチック製品に施されています",
            en: "Textured finishes are found on countless plastic products all around us.",
          },
        },
        t02: {
          alt: { ja: "生活表現", en: "Expressions of Everyday Living" },
          title: { ja: "生活表現", en: "Expressions of Everyday Living" },
          desc: {
            ja: "あらゆる表面形状を再現するために、日本エッチングの表面処理技術が世界中で生かされています",
            en: "Nihon Etching’s surface treatment technologies are used worldwide to reproduce diverse surface textures.",
          },
        },
      },
    },
    products: {
      title: { ja: "PRODUCTS", en: "PRODUCTS" },
      subtitle: {
        ja: "こんなところで活躍しています",
        en: "At Work in Living Spaces",
      },
      items: {
        p01: {
          alt: { ja: "Product 01", en: "Product 01" },
          caption: { ja: "製品の説明01", en: "Product caption 01" },
        },
        p02: {
          alt: { ja: "Product 02", en: "Product 02" },
          caption: { ja: "製品の説明02", en: "Product caption 02" },
        },
      },
    },
  },
} as const;

/**
 * 翻訳取得関数
 */
/**
 * 翻訳取得関数（末端が { ja, en } 形式の messages を前提）
 */
export function t(lang: Lang, key: string): string {
  if (typeof key !== "string" || key.length === 0) return "";

  const parts = key.split(".");
  let cur: any = messages; // ここが重要：messages[lang] ではない

  for (const p of parts) {
    cur = cur?.[p];
    if (cur == null) return key;
  }

  // 末端が string のケースも許容（必要なら）
  if (typeof cur === "string") return cur;

  // 末端が { ja, en } のケース
  if (typeof cur === "object") {
    return cur[lang] ?? cur.en ?? cur.ja ?? key;
  }

  return key;
}

export function toLang(value: string | undefined): Lang {
  return (languages as readonly string[]).includes(value ?? "")
    ? (value as Lang)
    : "ja";
}
