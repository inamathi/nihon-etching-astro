import type { Lang } from "@/locales/multilingual";
import type {
  GroupKey,
  GroupRegionMap,
  NeRegionKey,
  NwnRegionKey,
  SecRegionKey,
} from "@/types/group";

export type I18nText = {
  ja: string;
  en: string;
} & Partial<Record<Exclude<Lang, "ja" | "en">, string>>;

export type CompanyOverviewItemKey =
  | "companyName"
  | "address"
  | "phone"
  | "fax"
  | "mobile"
  | "established"
  | "employees"
  | "map"
  | "contact"
  | "url"
  | "facilities";

export type CompanyData<G extends GroupKey = GroupKey> = {
  id: string;
  group: G;
  region?: GroupRegionMap[G];
  country: string;
  location: I18nText;
  companyName: I18nText;
  companyNameSecondary?: I18nText;
  address?: I18nText;
  phone?: I18nText;
  fax?: I18nText;
  mobile?: I18nText;
  established?: string;
  employees?: string;
  map?: string;
  contact?: I18nText;
  url?: string;
  facilities?: I18nText;
  photoSrc?: string;
  photoAlt?: I18nText;
};

// 表示順もここで管理（＝ページを軽くする）
export const companies: CompanyData[] = [
  /* Japan */
  {
    id: "ne-head-office",
    group: "ne",
    region: "japan",
    country: "Japan",
    location: { ja: "日本（東京）", en: "Tokyo, Japan" },
    companyName: {
      ja: "株式会社 日本エッチング（本社・第１工場）",
      en: "Nihon Etching Co., Ltd. (Head Office & 1st Factory)",
    },
    address: {
      ja: "〒144-0044 東京都大田区本羽田2-8-19",
      en: "2-8-19 Honhaneda, Ota-ku, Tokyo 144-0044, Japan",
    },
    phone: {
      ja: "03-3744-5502",
      en: "+81-3-3744-5502",
    },
    fax: {
      ja: "03-3745-1898",
      en: "+81-3-3745-1898",
    },
    contact: {
      ja: "大山 義明 (副社長)",
      en: "Yoshiaki Oyama (vice president)",
    },
    established: "1971",
    employees: "70",
    facilities: {
      ja: "主要巻上げ装置：7.5 t",
      en: "Main Hoist: 7.5 t",
    },
    url: "https://www.nihon-etching.co.jp",
    map: "https://maps.app.goo.gl/Mn83DVSUejaRutcN8",
    photoSrc: "/images/group/ne/img_group_ne_ne1st.webp",
  },

  {
    id: "ne-2nd-factory",
    group: "ne",
    region: "japan",
    country: "Japan",
    location: { ja: "日本（東京）", en: "Tokyo, Japan" },
    companyName: {
      ja: "株式会社 日本エッチング（第２工場）",
      en: "Nihon Etching Co., Ltd. (2nd Factory)",
    },
    address: {
      ja: "〒144-0044 東京都大田区本羽田2-11-11",
      en: "2-11-11 Honhaneda, Ota-ku, Tokyo 144-0044, Japan",
    },
    established: "1971",
    employees: "70",
    map: "https://maps.app.goo.gl/Mn83DVSUejaRutcN8",
    photoSrc: "/images/group/ne/img_group_ne_ne2nd.webp",
  },

  {
    id: "ne-3rd-factory",
    group: "ne",
    country: "Japan",
    region: "japan",
    location: { ja: "日本（東京）", en: "Tokyo, Japan" },
    companyName: {
      ja: "株式会社 日本エッチング（第３工場）",
      en: "Nihon Etching Co., Ltd. (3rd Factory)",
    },
    address: {
      ja: "〒144-0044 東京都大田区本羽田2-2-10",
      en: "2-2-10 Honhaneda, Ota-ku, Tokyo 144-0044, Japan",
    },
    established: "1971",
    employees: "70",
    facilities: {
      ja: "主要巻上げ装置：1t × 2.2t",
      en: "Main Hoist: 1t × 2.2t",
    },
    map: "https://maps.app.goo.gl/Mn83DVSUejaRutcN8",
    photoSrc: "/images/group/ne/img_group_ne_ne3rd.webp",
  },
  /** NE Asia */
  /* philippine */
  {
    id: "ph-manila",
    group: "ne",
    region: "asia",
    country: "Philippine",
    location: { ja: "フィリピン", en: "Philippine" },
    companyName: {
      ja: "New World Nihon Etching Inc.",
      en: "New World Nihon Etching Inc.",
    },
    companyNameSecondary: {
      ja: "Batangas",
      en: "Batangas",
    },
    address: {
      ja: "Bldg. U-4 Lot 22B, Phase 1B, FPIP Tanauan City, Batangas 4232 Philippines",
      en: "Bldg. U-4 Lot 22B, Phase 1B, FPIP Tanauan City, Batangas 4232 Philippines",
    },
    phone: {
      ja: "+63(0)-43-277-9006",
      en: "+63-43-277-9006",
    },
    fax: {
      ja: "+63(0)-43-455-9912",
      en: "+63-43-455-9912",
    },
    mobile: { ja: "+63(0)-917-593-7298", en: "+63-917-593-7298" },
    contact: {
      ja: "Yasumasa Nakagawa (Managing Director)",
      en: "Yasumasa Nakagawa (Managing Director)",
    },
    established: "2016",
    employees: "10",
    facilities: {
      ja: "主要巻上げ装置：１t",
      en: "Main Hoist: １t",
    },
    map: "https://goo.gl/maps/2SmheeiQprSsMbKR7",
    photoSrc: "/images/group/ne/img_group_ne_batangas.webp",
  },
  /* singapore */
  {
    id: "sg-singapore",
    group: "ne",
    region: "asia",
    country: "Singapore",
    location: { ja: "シンガポール", en: "Singapore" },
    companyName: {
      ja: "NIHON ETCHING (Singapore) PTE LTD.",
      en: "NIHON ETCHING (Singapore) PTE LTD.",
    },
    companyNameSecondary: {
      ja: "Ubi Road",
      en: "Ubi Road",
    },
    address: {
      ja: "Blk 3029A Ubi Road 3 #01-100, 408661, Singapore",
      en: "Blk 3029A Ubi Road 3 #01-100, 408661, Singapore",
    },
    phone: {
      ja: "+65(0)-6748-9833",
      en: "+65-6748-9833",
    },
    fax: {
      ja: "+65(0)-6743-7357",
      en: "+65-6743-7357",
    },
    mobile: { ja: "", en: "" },
    contact: {
      ja: "Mr. Kathrine Tan (Managing Director)",
      en: "Mr. Kathrine Tan (Managing Director)",
    },
    established: "1988",
    employees: "10",
    facilities: {
      ja: "主要巻上げ装置：３t×３t",
      en: "Main Hoist: ３t×３t",
    },
    map: "https://goo.gl/maps/GNUbMMBiTnVz5Qzh6",
    photoSrc: "/images/group/ne/img_group_ne_ubiRoad.webp",
  },
  /* vietnam */
  {
    id: "vn-hanoi",
    group: "ne",
    region: "asia",
    country: "Vietnam",
    location: { ja: "ベトナム", en: "Vietnam" },
    companyName: {
      ja: "NWN Etching Co., Ltd.",
      en: "NWN Etching Co., Ltd.",
    },
    companyNameSecondary: {
      ja: "Hanoi",
      en: "Hanoi",
    },
    address: {
      ja: "Lot.37, Quang Minh Industrial Area, Me Linh District, Province Vinch Phuc, Hanoi, Vietnam",
      en: "Lot.37, Quang Minh Industrial Area, Me Linh District, Province Vinch Phuc, Hanoi, Vietnam",
    },
    phone: {
      ja: "+84(0)-4-3525-0346",
      en: "+84-4-3525-0346",
    },
    fax: {
      ja: "+84(0)-4-3525-0345",
      en: "+84-4-3525-0345",
    },
    contact: {
      ja: "Mr. Jason Lim (Managing Director)",
      en: "Mr. Jason Lim (Managing Director)",
    },
    established: "2008",
    employees: "10",
    facilities: {
      ja: "主要巻上げ装置：３t×３t",
      en: "Main Hoist: ３t×３t",
    },
    map: "https://goo.gl/maps/MM5VQKV5rZCZ2FAK9",
    photoSrc: "/images/group/ne/img_group_ne_hanoi.webp",
  },
  /* Malaysia JB */
  {
    id: "malaysia-jb",
    group: "ne",
    region: "asia",
    country: "Malaysia",
    location: { ja: "マレーシア", en: "Malaysia" },
    companyName: {
      ja: "Nihon Mould Texturing Sdn. Bhd.",
      en: "Nihon Mould Texturing Sdn. Bhd.",
    },
    companyNameSecondary: {
      ja: "Johor Bahru",
      en: "Johor Bahru",
    },
    address: {
      ja: "No.15 Jalan Mutiara Emas 7/7, Taman Mount Austin, Johor Bahru Johor, 81100, Malaysia",
      en: "No.15 Jalan Mutiara Emas 7/7, Taman Mount Austin, Johor Bahru Johor, 81100, Malaysia",
    },
    phone: {
      ja: "+60(0)-7351-3615",
      en: "+60-7351-3615",
    },
    fax: {
      ja: "+60(0)-7351-7357",
      en: "+60-7351-7357",
    },
    contact: {
      ja: "Mr. Kathrine Tan (Managing Director)",
      en: "Mr. Kathrine Tan (Managing Director)",
    },
    established: "2008",
    employees: "10",
    facilities: {
      ja: "巻上げ装置耐荷重：3 t × 3 t",
      en: "Main Hoist: 3 t * 3 t",
    },
    map: "https://goo.gl/maps/MM5VQKV5rZCZ2FAK9",
    photoSrc: "/images/group/ne/img_group_ne_johorBahru.webp",
  },
  /* Malaysia KL */
  {
    id: "malaysia-kl",
    group: "ne",
    region: "asia",
    country: "Malaysia",
    location: { ja: "マレーシア", en: "Malaysia" },
    companyName: {
      ja: "Nihon Mould Texturing Sdn. Bhd.",
      en: "Nihon Mould Texturing Sdn. Bhd.",
    },
    companyNameSecondary: {
      ja: "Shar Alam Selangor",
      en: "Shar Alam Selangor",
    },
    address: {
      ja: "No.32 Jalan Pemberita U1/49, Temasya Industrial Park Seksyen U1, Shar Alam Selangor, 40150, Malaysia",
      en: "No.32 Jalan Pemberita U1/49, Temasya Industrial Park Seksyen U1, Shar Alam Selangor, 40150, Malaysia",
    },
    phone: {
      ja: "+60(0)-3-5569-1008",
      en: "+60-3-5569-1008",
    },
    fax: {
      ja: "+60(0)-3-5569-1009",
      en: "+60-3-5569-1009",
    },
    contact: {
      ja: "Mr. Koju Maie (Managing Director)",
      en: "Mr. Koju Maie (Managing Director)",
    },
    established: "1995",
    employees: "20",
    facilities: {
      ja: "巻上げ装置耐荷重：8 t × 8 t",
      en: "Main Hoist: 8 t * 8 t",
    },
    map: "https://goo.gl/maps/e4dU2Zd46j6EDrQ78",
    photoSrc: "/images/group/ne/img_group_ne_sharAlamSelangor.webp",
  },
  /* Indonesia */
  {
    id: "indnesia-cb",
    group: "ne",
    region: "asia",
    country: "Indonesia",
    location: { ja: "インドネシア", en: "Indonesia" },
    companyName: {
      ja: "PT. Nihon Etching",
      en: "PT. Nihon Etching",
    },
    companyNameSecondary: {
      ja: "Cikaran Bekasi",
      en: "Cikaran Bekasi",
    },
    address: {
      ja: "Kawasan Industri Jababeka Block GG-20, Cikaran Bekasi, 17550, Indonesia",
      en: "Kawasan Industri Jababeka Block GG-20, Cikaran Bekasi, 17550, Indonesia",
    },
    phone: {
      ja: "+62(0)-21-898-35264",
      en: "+62-21-898-35264",
    },
    fax: {
      ja: "+62(0)-21-898-35265",
      en: "+62-21-898-35265",
    },
    contact: {
      ja: "Mr. Takahisa Hayashi (Managing Director)",
      en: "Mr. Takahisa Hayashi (Managing Director)",
    },
    established: "2004",
    employees: "30",
    facilities: {
      ja: "巻上げ装置耐荷重：5 t × 3 t",
      en: "Main Hoist: 5 t * 3 t",
    },
    map: "https://goo.gl/maps/GauFZ1zUyxdsd65H7",
    photoSrc: "/images/group/ne/img_group_ne_cikaranBekasi.webp",
  },
  /** east-asia */
  /* kunshan */
  {
    id: "china-kunshan",
    group: "ne",
    region: "east-asia",
    country: "China",
    location: { ja: "中国", en: "China" },
    companyName: {
      ja: "New World Nihon Etching Co., Ltd.",
      en: "New World Nihon Etching Co., Ltd.",
    },
    companyNameSecondary: {
      ja: "Kunshan",
      en: "Kunshan",
    },
    address: {
      ja: "No.6 Mingda Rd., Zhoushi Zhen, Kunshan, Jiangsu, 215300, China",
      en: "No.6 Mingda Rd., Zhoushi Zhen, Kunshan, Jiangsu, 215300, China",
    },
    phone: {
      ja: "+86(0)-512-5761-8975～76",
      en: "+86-512-5761-8975～76",
    },
    fax: {
      ja: "+86(0)-512-5761-8977",
      en: "+86-512-5761-8977",
    },
    contact: {
      ja: "Mr. Kazuhei Tanaka (Sales Manager)",
      en: "Mr. Kazuhei Tanaka (Sales Manager)",
    },
    established: "2000",
    employees: "50",
    facilities: {
      ja: "巻上げ装置耐荷重：10 t × 5 t",
      en: "Main Hoist: 10 t * 5 t",
    },
    map: "https://maps.app.goo.gl/wfVMkqahwARsE2hBA",
    photoSrc: "/images/group/ne/img_group_ne_kunshan.webp",
  },
  /* Dong Guan */
  {
    id: "china-dongguan",
    group: "ne",
    region: "east-asia",
    country: "China",
    location: { ja: "中国", en: "China" },
    companyName: {
      ja: "New World Nihon Etching Co., Ltd.",
      en: "New World Nihon Etching Co., Ltd.",
    },
    companyNameSecondary: {
      ja: "Dong Guan",
      en: "Dong Guan",
    },
    address: {
      ja: "Building A No.1, Dapinp Gao Qiao, Long Road Tangxiatown, Dong Guan Gu, 323000, China",
      en: "Building A No.1, Dapinp Gao Qiao, Long Road Tangxiatown, Dong Guan Gu, 323000, China",
    },
    phone: {
      ja: "+86(0)-769-8216-9992 ~6",
      en: "+86-769-8216-9992 ~6",
    },
    fax: {
      ja: "+86(0)-769-8216-9991",
      en: "+86-769-8216-9991",
    },
    contact: {
      ja: "Mr. Tetsuhou Terao",
      en: "Mr. Tetsuhou Terao",
    },
    established: "2017",
    employees: "60",
    facilities: {
      ja: "巻上げ装置耐荷重：3 t × 3 t",
      en: "Main Hoist: 3 t * 3 t",
    },
    map: "https://maps.app.goo.gl/PxKSLbtDZpRwWPNw7",
    photoSrc: "/images/group/ne/img_group_ne_dongGuan.webp",
  },
  /* Taipei */
  {
    id: "taiwan-taipei",
    group: "ne",
    region: "east-asia",
    country: "China",
    location: { ja: "台湾", en: "Taiwan" },
    companyName: {
      ja: "Nihon Etching Co., Ltd.",
      en: "Nihon Etching Co., Ltd.",
    },
    companyNameSecondary: {
      ja: "Taipei",
      en: "Taipei",
    },
    address: {
      ja: "No. 102, Shoushan Rd., Taishan Dist., New Taipei City 243089, Taiwan (R.O.C.)",
      en: "No. 102, Shoushan Rd., Taishan Dist., New Taipei City 243089, Taiwan (R.O.C.)",
    },
    phone: {
      ja: "+886(0)-22-297-3865",
      en: "+886-22-297-3865",
    },
    fax: {
      ja: "+886(0)-22-297-3734",
      en: "+886-22-297-3734",
    },
    contact: {
      ja: "Mr. Karashima / Mr. Su Liang Yu",
      en: "Mr. Karashima / Mr. Su Liang Yu",
    },
    established: "1991",
    employees: "15",
    facilities: {
      ja: "巻上げ装置耐荷重：5 t × 10 t",
      en: "Main Hoist: 5 t * 10 t",
    },
    map: "https://maps.app.goo.gl/YWCEQ3F8QTZyTQ4QA",
    photoSrc: "/images/group/ne/img_group_ne_taipei.webp",
  },
  /* ====================== NWN ==============================*/
  /** Japan */
  /* aichi */
  {
    id: "nwn-jp-aichi",
    group: "nwn",
    region: "japan",
    country: "Japan",
    location: { ja: "日本", en: "Japan" },
    companyName: {
      ja: "World Etching Co., Ltd.",
      en: "World Etching Co., Ltd.",
    },
    companyNameSecondary: {
      ja: "ワールドエッチング株式会社（愛知）",
      en: "Aichi",
    },
    address: {
      ja: "愛知県一宮市三ツ井8-9-6",
      en: "8-9-6 Mistui, Ichinomiya-Shi, Aichi 491-0827 Japan",
    },
    phone: {
      ja: "+81(0)-586-76-7108",
      en: "+81-586-76-7108",
    },
    fax: {
      ja: "+81(0)-586-76-5551",
      en: "+81-586-76-5551",
    },
    contact: {
      ja: "",
      en: "",
    },
    established: "1977",
    employees: "100",
    facilities: {
      ja: "巻上げ装置耐荷重：15 t × 7.5 t",
      en: "Main Hoist: 15 t * 7.5 t",
    },
    map: "https://goo.gl/maps/jxUQRALGb73VTMDz7",
    photoSrc: "/images/group/nwn/img_group_nwn_aichi.webp",
  },
];
