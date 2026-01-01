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
        src: "/images/gallery/tech/sample01.webp",
        altKey: "topGallery.technology.items.t01.alt",
        titleKey: "topGallery.technology.items.t01.title",
        descKey: "topGallery.technology.items.t01.desc",
      },
      {
        src: "/images/gallery/tech/sample02.webp",
        altKey: "topGallery.technology.items.t02.alt",
        titleKey: "topGallery.technology.items.t02.title",
        descKey: "topGallery.technology.items.t02.desc",
      },
      {
        src: "/images/gallery/tech/sample04.webp",
        altKey: "topGallery.technology.items.t04.alt",
        titleKey: "topGallery.technology.items.t04.title",
        descKey: "topGallery.technology.items.t04.desc",
      },
      {
        src: "/images/gallery/tech/sample03.webp",
        altKey: "topGallery.technology.items.t03.alt",
        titleKey: "topGallery.technology.items.t03.title",
        descKey: "topGallery.technology.items.t03.desc",
      },
      {
        src: "/images/gallery/tech/sample05.webp",
        altKey: "topGallery.technology.items.t05.alt",
        titleKey: "topGallery.technology.items.t05.title",
        descKey: "topGallery.technology.items.t05.desc",
      },
    ],
  },

  products: {
    titleKey: "topGallery.products.title",
    subTitleKey: "topGallery.products.subtitle",
    items: [
      {
        src: "/images/gallery/products/sample01.webp",
        altKey: "topGallery.products.items.p01.alt",
        titleKey: "topGallery.products.items.t01.title",
        descKey: "topGallery.products.items.t01.desc",
      },
      {
        src: "/images/gallery/products/sample02.webp",
        altKey: "topGallery.products.items.p02.alt",
        titleKey: "topGallery.products.items.t02.title",
        descKey: "topGallery.products.items.t02.desc",
      },
    ],
  },
};
