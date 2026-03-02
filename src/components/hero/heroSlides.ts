// src/components/hero/heroSlides.ts
export type HeroSlide = {
  type: "text" | "lottie";
  variant: string;
  key: string; // multilingual.ts のキー
  className?: string;
};

export const heroBgImages = {
  desktop: [
    "/assets/hero/hero__slide-01-fhd.webp",
    "/assets/hero/hero__slide-02-fhd.webp",
    "/assets/hero/hero__slide-03-fhd.webp",
    "/assets/hero/hero__slide-04-fhd.webp",
    "/assets/hero/hero__slide-05-fhd.webp",
    "/assets/hero/hero__slide-06-fhd.webp",
    "/assets/hero/hero__slide-07-fhd.webp",
  ],
  mobile: [
    "/assets/hero/hero__slide-01-mobile.webp",
    "/assets/hero/hero__slide-02-mobile.webp",
    "/assets/hero/hero__slide-03-mobile.webp",
    "/assets/hero/hero__slide-04-mobile.webp",
    "/assets/hero/hero__slide-05-mobile.webp",
    "/assets/hero/hero__slide-06-mobile.webp",
    "/assets/hero/hero__slide-07-mobile.webp",
  ],
} as const;

export type HeroDevice = keyof typeof heroBgImages;
export type HeroBgImage = (typeof heroBgImages)[HeroDevice][number];
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
