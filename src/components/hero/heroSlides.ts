// src/components/hero/heroSlides.ts
export type HeroSlide = {
  type: "text" | "lottie";
  variant: string;
  key: string; // multilingual.ts のキー
  className?: string;
};

export const heroBgImages: string[] = [
  "/assets/hero/hero__slide-01.webp",
  "/assets/hero/hero__slide-02.webp",
  "/assets/hero/hero__slide-03.webp",
  "/assets/hero/hero__slide-04.webp",
  "/assets/hero/hero__slide-05.webp",
  "/assets/hero/hero__slide-06.webp",
  "/assets/hero/hero__slide-07.webp",
];

// src/components/hero/heroSlides.ts

export const heroSlides: HeroSlide[] = [
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

// export const heroSlides: HeroSlide[] = [

//   {
//     type: "text",
//     variant: "en-serif",
//     key: "hero.s1",
//     className: "hero__line--en",
//   },
//   { type: "text", variant: "jp-strong", key: "hero.s2" },
//   { type: "text", variant: "jp-strong", key: "hero.s3" },
//   { type: "text", variant: "jp-strong-ml", key: "hero.s4" },
//   { type: "text", variant: "jp-strong-ml", key: "hero.s5" },
//   { type: "text", variant: "jp-strong-ml", key: "hero.s6" },
//   { type: "lottie", variant: "jp-logo", key: "hero.s7" },
// ] as const;
