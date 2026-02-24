export type GalleryGroupKey = "technology" | "products";

export type GalleryItem = {
  src: string; // public 配下のURL
  altKey: string; // multilingual.ts のキー
  titleKey: string;
  descKey: string;
};

export type GalleryGroup = {
  titleKey: string;
  subTitleKey: string;
  items: GalleryItem[];
};

export const topGalleries: Record<GalleryGroupKey, GalleryGroup> = {
  technology: {
    titleKey: "topGallery.technology.title",
    subTitleKey: "topGallery.technology.subtitle",
    items: [
      {
        src: "/images/gallery/tech/tech-gallery_01.webp",
        altKey: "topGallery.technology.items.t01.alt",
        titleKey: "topGallery.technology.items.t01.title",
        descKey: "topGallery.technology.items.t01.desc",
      },
      {
        src: "/images/gallery/tech/tech-gallery_02.webp",
        altKey: "topGallery.technology.items.t02.alt",
        titleKey: "topGallery.technology.items.t02.title",
        descKey: "topGallery.technology.items.t02.desc",
      },
      {
        src: "/images/gallery/tech/tech-gallery_03.webp",
        altKey: "topGallery.technology.items.t03.alt",
        titleKey: "topGallery.technology.items.t03.title",
        descKey: "topGallery.technology.items.t03.desc",
      },
      {
        src: "/images/gallery/tech/tech-gallery_04.webp",
        altKey: "topGallery.technology.items.t04.alt",
        titleKey: "topGallery.technology.items.t04.title",
        descKey: "topGallery.technology.items.t04.desc",
      },
      {
        src: "/images/gallery/tech/tech-gallery_05.webp",
        altKey: "topGallery.technology.items.t05.alt",
        titleKey: "topGallery.technology.items.t05.title",
        descKey: "topGallery.technology.items.t05.desc",
      },
      {
        src: "/images/gallery/tech/tech-gallery_06.webp",
        altKey: "topGallery.technology.items.t06.alt",
        titleKey: "topGallery.technology.items.t06.title",
        descKey: "topGallery.technology.items.t06.desc",
      },
    ],
  },

  products: {
    titleKey: "topGallery.products.title",
    subTitleKey: "topGallery.products.subtitle",
    items: [
      {
        src: "/images/gallery/products/prd-gallery_01.webp",
        altKey: "topGallery.products.items.t01.alt",
        titleKey: "topGallery.products.items.t01.title",
        descKey: "topGallery.products.items.t01.desc",
      },
      {
        src: "/images/gallery/products/prd-gallery_02.webp",
        altKey: "topGallery.products.items.t02.alt",
        titleKey: "topGallery.products.items.t02.title",
        descKey: "topGallery.products.items.t02.desc",
      },
      {
        src: "/images/gallery/products/prd-gallery_03.webp",
        altKey: "topGallery.products.items.t03.alt",
        titleKey: "topGallery.products.items.t03.title",
        descKey: "topGallery.products.items.t03.desc",
      },
      {
        src: "/images/gallery/products/prd-gallery_04.webp",
        altKey: "topGallery.products.items.t04.alt",
        titleKey: "topGallery.products.items.t04.title",
        descKey: "topGallery.products.items.t04.desc",
      },
      {
        src: "/images/gallery/products/prd-gallery_05.webp",
        altKey: "topGallery.products.items.t05.alt",
        titleKey: "topGallery.products.items.t05.title",
        descKey: "topGallery.products.items.t05.desc",
      },
      {
        src: "/images/gallery/products/prd-gallery_06.webp",
        altKey: "topGallery.products.items.t06.alt",
        titleKey: "topGallery.products.items.t06.title",
        descKey: "topGallery.products.items.t06.desc",
      },
      {
        src: "/images/gallery/products/prd-gallery_07.webp",
        altKey: "topGallery.products.items.t07.alt",
        titleKey: "topGallery.products.items.t07.title",
        descKey: "topGallery.products.items.t07.desc",
      },
      {
        src: "/images/gallery/products/prd-gallery_08.webp",
        altKey: "topGallery.products.items.t08.alt",
        titleKey: "topGallery.products.items.t08.title",
        descKey: "topGallery.products.items.t08.desc",
      },
    ],
  },
};
