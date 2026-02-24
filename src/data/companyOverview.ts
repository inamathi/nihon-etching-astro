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
      ja: "主要巻上げ装置：5 t",
      en: "Main Hoist: 5 t",
    },
    url: "https://www.nihon-etching.co.jp",
    map: "https://maps.app.goo.gl/Mn83DVSUejaRutcN8",
    photoSrc: "img_group_ne_ne1st.webp",
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
    photoSrc: "img_group_ne_ne2nd.webp",
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
      ja: "主要巻上げ装置：5t × 5t",
      en: "Main Hoist: 5t × 5t",
    },
    map: "https://maps.app.goo.gl/Mn83DVSUejaRutcN8",
    photoSrc: "img_group_ne_ne3rd.webp",
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
    photoSrc: "img_group_ne_batangas.webp",
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
      ja: "蔡先生",
      en: "CHAI SIAW YANG",
    },
    established: "1988",
    employees: "10",
    facilities: {
      ja: "主要巻上げ装置：３t×３t",
      en: "Main Hoist: ３t×３t",
    },
    map: "https://goo.gl/maps/GNUbMMBiTnVz5Qzh6",
    photoSrc: "img_group_ne_ubiRoad.webp",
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
      ja: "主要巻上げ装置：５t×10t",
      en: "Main Hoist: ５t×10t",
    },
    map: "https://goo.gl/maps/MM5VQKV5rZCZ2FAK9",
    photoSrc: "img_group_ne_hanoi.webp",
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
      ja: "蔡先生",
      en: "CHAI SIAW YANG",
    },
    established: "2008",
    employees: "10",
    facilities: {
      ja: "巻上げ装置耐荷重：3 t × 3 t",
      en: "Main Hoist: 3 t * 3 t",
    },
    map: "https://goo.gl/maps/MM5VQKV5rZCZ2FAK9",
    photoSrc: "img_group_ne_johorBahru.webp",
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
      ja: "田中 君雄",
      en: "Kimio Tanaka",
    },
    established: "1995",
    employees: "20",
    facilities: {
      ja: "巻上げ装置耐荷重：8 t × 8 t",
      en: "Main Hoist: 8 t * 8 t",
    },
    map: "https://goo.gl/maps/e4dU2Zd46j6EDrQ78",
    photoSrc: "img_group_ne_sharAlamSelangor.webp",
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
      ja: "巻上げ装置耐荷重：5 t × 10 t",
      en: "Main Hoist: 5 t * 10 t",
    },
    map: "https://goo.gl/maps/GauFZ1zUyxdsd65H7",
    photoSrc: "img_group_ne_cikaranBekasi.webp",
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
    photoSrc: "img_group_ne_kunshan.webp",
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
      ja: "巻上げ装置耐荷重：10 t × 10 t",
      en: "Main Hoist: 10 t * 10 t",
    },
    map: "https://maps.app.goo.gl/PxKSLbtDZpRwWPNw7",
    photoSrc: "img_group_ne_dongGuan.webp",
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
    photoSrc: "img_group_ne_taipei.webp",
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
      ja: "株式会社ワールドエッチング（愛知）",
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
    photoSrc: "img_group_nwn_we-aichi.webp",
  },
  /* 八尾 */
  {
    id: "nwn-jp-yao",
    group: "nwn",
    region: "japan",
    country: "Japan",
    location: { ja: "日本", en: "Japan" },
    companyName: {
      ja: "New Tex Co., Ltd.",
      en: "New Tex Co., Ltd.",
    },
    companyNameSecondary: {
      ja: "株式会社ニューテックス（大阪）",
      en: "Osaka",
    },
    address: {
      ja: "大阪府八尾市中田1-46",
      en: "1-46 Nakata, Yao-Shi, Osaka 581-0014 Japan",
    },
    phone: {
      ja: "+81(0)-729-95-2545",
      en: "+81-729-95-2545",
    },
    fax: {
      ja: "+81(0)-729-95-5752",
      en: "+81-729-95-5752",
    },
    contact: {
      ja: "",
      en: "",
    },
    established: "1993",
    employees: "40",
    facilities: {
      ja: "巻上げ装置耐荷重：10 t × 5 t",
      en: "Main Hoist: 10 t * 5 t",
    },
    map: "https://goo.gl/maps/jxUQRALGb73VTMDz7",
    photoSrc: "img_group_nwn_newtex-osaka.webp",
  },
  /* India */
  {
    id: "nwn-oversea-india",
    group: "nwn",
    region: "overseas",
    country: "India Dharuhera",
    location: { ja: "インド", en: "India" },
    companyName: {
      ja: "World Etching Overseas Premium Mouldings & Pressings Pvt. Ltd.",
      en: "World Etching Overseas Premium Mouldings & Pressings Pvt. Ltd.",
    },
    companyNameSecondary: {
      ja: "Haryana",
      en: "Haryana",
    },
    address: {
      ja: "185-Udyog vihar, Phase-1, Gurgaon, Haryana, India",
      en: "185-Udyog vihar, Phase-1, Gurgaon, Haryana, India",
    },
    phone: {
      ja: "+91(0)-127-426-7151 ~3",
      en: "+91-127-426-7151 ~3",
    },
    fax: {
      ja: "+91(0)-127-426-7150",
      en: "+91-127-426-7150",
    },
    contact: {
      ja: "",
      en: "",
    },
    established: "2010",
    employees: "10",
    facilities: {
      ja: "巻上げ装置耐荷重：10 t × 10 t",
      en: "Main Hoist: 10 t * 10 t",
    },
    map: "https://goo.gl/maps/uEXfAoyTCALsenz46",
    photoSrc: "img_group_nwn_haryana.webp",
  },
  /* Thai */
  {
    id: "nwn-oversea-india",
    group: "nwn",
    region: "overseas",
    country: "India Dharuhera",
    location: { ja: "タイ", en: "Thailand" },
    companyName: {
      ja: "World Sibo-Tech Co., Ltd.",
      en: "World Sibo-Tech Co., Ltd.",
    },
    companyNameSecondary: {
      ja: "A.PhanThong Chonburi",
      en: "A.PhanThong Chonburi",
    },
    address: {
      ja: "700/185, Moo 1 Amata Nakorn Industrial Estate, T.Bankao, A.PhanThong Chonburi, 20160, Thailand",
      en: "700/185, Moo 1 Amata Nakorn Industrial Estate, T.Bankao, A.PhanThong Chonburi, 20160, Thailand",
    },
    phone: {
      ja: "+66(0)-38-457-051",
      en: "+66-38-457-051",
    },
    fax: {
      ja: "+66(0)-38-457-051",
      en: "+66-38-457-051",
    },
    contact: {
      ja: "Mr. Wataru Ito (Sales Department)",
      en: "Mr. Wataru Ito (Sales Department)",
    },
    established: "1996",
    employees: "20",
    facilities: {
      ja: "巻上げ装置耐荷重：15 t × 10 t",
      en: "Main Hoist: 15 t * 10 t",
    },
    map: "https://goo.gl/maps/MUHdNKGaFJvWXQUY8",
    photoSrc: "img_group_nwn_chonburi.webp",
  },
  /* North America */
  {
    id: "nwn-oversea-namerica",
    group: "nwn",
    region: "overseas",
    country: "North America (VE)",
    location: { ja: "北アメリカ", en: "North America" },
    companyName: {
      ja: "New World Etching",
      en: "New World Etching",
    },
    companyNameSecondary: {
      ja: "Riviera Drive Fraser",
      en: "Riviera Drive Fraser",
    },
    address: {
      ja: "33870 Riviera Drive Fraser, MI 48026, U.S.A",
      en: "33870 Riviera Drive Fraser, MI 48026, U.S.A",
    },
    phone: {
      ja: "+1(0)-586-296-8082(ext.17)",
      en: "+1-586-296-8082",
    },
    fax: {
      ja: "+1(0)-586-296-8014",
      en: "+1-586-296-8014",
    },
    contact: {
      ja: "Mr. Vic Barbu",
      en: "Mr. Vic Barbu",
    },
    established: "1996",
    employees: "20",
    facilities: {
      ja: "巻上げ装置耐荷重：20 t × 10 t",
      en: "Main Hoist: 20 t * 10 t",
    },
    map: "https://goo.gl/maps/kHZXYatS6LVjjJF56",
    photoSrc: "img_group_nwn_riviera.webp",
  },
  /* China・Korea */
  {
    id: "nwn-eastasia-zhejiang",
    group: "nwn",
    region: "east-asia",
    country: "China",
    location: { ja: "中国", en: "China" },
    companyName: {
      ja: "NINGBO JINGCHAO MOULD ETCHING CO.,LTD",
      en: "NINGBO JINGCHAO MOULD ETCHING CO.,LTD",
    },
    companyNameSecondary: {
      ja: "Zhejiang Province",
      en: "Zhejiang Province",
    },
    address: {
      ja: "370 North Beidou Road, Xinxing Industrial Park, Ninghai, Ningbo, Zhejiang Province, China",
      en: "370 North Beidou Road, Xinxing Industrial Park, Ninghai, Ningbo, Zhejiang Province, China",
    },
    phone: {
      ja: "+86(0)-574-6553-0857",
      en: "+86-574-6553-0857",
    },
    fax: {
      ja: "+86(0)-574-6553-0866",
      en: "+86-574-6553-0866",
    },
    contact: {
      ja: "Mr.Cheng",
      en: "Mr.Cheng",
    },
    established: "1986",
    employees: "",
    facilities: {
      ja: "",
      en: "",
    },
    map: "https://maps.app.goo.gl/H3pjCy6ziUPbYQds7",
    photoSrc: "img_group_nwn_zhejiang.webp",
  },
  /* Korea */
  {
    id: "nwn-eastasia-seong",
    group: "nwn",
    region: "east-asia",
    country: "Korea",
    location: { ja: "韓国", en: "Korea" },
    companyName: {
      ja: "TEXONE",
      en: "TEXONE",
    },
    companyNameSecondary: {
      ja: "HWA SEONG",
      en: "HWA SEONG",
    },
    address: {
      ja: "98-11, Barangongdan-ro 4-gil, Hyangnam-eup, Hwaseong-si, Gyeonggi-do, 18623, Korea",
      en: "98-11, Barangongdan-ro 4-gil, Hyangnam-eup, Hwaseong-si, Gyeonggi-do, 18623, Korea",
    },
    phone: {
      ja: "+82(0)-31-8047-0222",
      en: "+82-31-8047-0222",
    },
    fax: {
      ja: "+82(0)-31-8047-4957",
      en: "+82-31-8047-4957",
    },
    contact: {
      ja: "Mr. Han (President)",
      en: "Mr. Han (President)",
    },
    established: "1986",
    employees: "",
    facilities: {
      ja: "巻上げ装置耐荷重：8 t × 8 t",
      en: "Main Hoist: 8 t * 8 t",
    },
    map: "https://goo.gl/maps/s2So5EkHJe3w18UbA",
    photoSrc: "img_group_nwn_hwa.webp",
  },
  /* ====================== SEC ==============================*/
  /** Europe */
  /* germany */
  {
    id: "sec-europe-germany",
    group: "sec",
    region: "europe",
    country: "Germany",
    location: { ja: "ドイツ", en: "Germany" },
    companyName: {
      ja: "J & F KRUTH GMBH",
      en: "J & F KRUTH GMBH",
    },
    companyNameSecondary: {
      ja: "GERMANY",
      en: "GERMANY",
    },
    address: {
      ja: "Stubbenerstr 96-100 42719, Solingen(Wald) Germany",
      en: "Stubbenerstr 96-100 42719, Solingen(Wald) Germany",
    },
    phone: {
      ja: "+49(0)-212-311061",
      en: "+49-212-311061",
    },
    fax: {
      ja: "+49(0)-212-313741",
      en: "+49-212-313741",
    },
    contact: {
      ja: "Mr. Stefan Kruth (President)",
      en: "Mr. Stefan Kruth (President)",
    },
    established: "1996",
    employees: "20",
    facilities: {
      ja: "巻上げ装置耐荷重：20 t × 10 t",
      en: "Main Hoist: 20 t * 10 t",
    },
    map: "https://goo.gl/maps/nNZgTKPzEmCSHuRg6",
    photoSrc: "img_group_sec_germany.webp",
  },
  /* portugal */
  {
    id: "sec-europe-portugal",
    group: "sec",
    region: "europe",
    country: "Portugal",
    location: { ja: "ポルトガル", en: "Portgual" },
    companyName: {
      ja: "J & F KRUTH PORTUGAL, LDA",
      en: "J & F KRUTH PORTUGAL, LDA",
    },
    companyNameSecondary: {
      ja: "Portugal",
      en: "Portugal",
    },
    address: {
      ja: "ZI de Adães, Lote 4, 3720-581 UL OAZ, Portugal",
      en: "ZI de Adães, Lote 4, 3720-581 UL OAZ, Portugal",
    },
    phone: {
      ja: "+351(0)-2566-09243",
      en: "+351-2566-09243",
    },
    fax: {
      ja: "+351(0)-2566-09244",
      en: "+351-2566-09244",
    },
    contact: {
      ja: "",
      en: "",
    },
    established: "1996",
    employees: "20",
    facilities: {
      ja: "巻上げ装置耐荷重：20 t × 10 t",
      en: "Main Hoist: 20 t * 10 t",
    },
    map: "https://maps.app.goo.gl/SWLyWF1YsKu5uNTP7",
    photoSrc: "img_group_sec_portgual.webp",
  },
  /* Austria */
  {
    id: "sec-europe-austria",
    group: "sec",
    region: "europe",
    country: "Austria",
    location: { ja: "オーストリア", en: "Austria" },
    companyName: {
      ja: "SET FORM-ATZ TECHNIK GMBH",
      en: "SET FORM-ATZ TECHNIK GMBH",
    },
    companyNameSecondary: {
      ja: "AUSTRIA",
      en: "AUSTRIA",
    },
    address: {
      ja: "Eumigstrase 6, 8753 Fohnsdorf, Judenburg, Steiermark, Austria",
      en: "Eumigstrase 6, 8753 Fohnsdorf, Judenburg, Steiermark, Austria",
    },
    phone: {
      ja: "+43(0)-3573-27543-12",
      en: "+43-3573-27543-12",
    },
    fax: {
      ja: "+43(0)-3573-27543-43",
      en: "+43-3573-27543-43",
    },
    contact: {
      ja: "Mr. Gert Bedenk (President)",
      en: "Mr. Gert Bedenk (President)",
    },
    established: "2005",
    employees: "",
    facilities: {
      ja: "巻上げ装置耐荷重：3 t × 3 t",
      en: "Main Hoist: 3 t * 3 t",
    },
    map: "https://goo.gl/maps/8Zz2PwGCVDUZaybw5",
    photoSrc: "img_group_sec_austria.webp",
  },
  /* Itary */
  {
    id: "sec-europe-italy",
    group: "sec",
    region: "europe",
    country: "Itary",
    location: { ja: "イタリア", en: "Itary" },
    companyName: {
      ja: "ML ENGRAVING srl",
      en: "ML ENGRAVING srl",
    },
    companyNameSecondary: {
      ja: "Itary",
      en: "Itary",
    },
    address: {
      ja: "Via Presolana 114, 24020 Onore (BG)",
      en: "Via Presolana 114, 24020 Onore (BG)",
    },
    phone: {
      ja: "+39(0)-346-72410",
      en: "+39-346-72410",
    },
    fax: {
      ja: "+39(0)-346-7441",
      en: "+39-346-7441",
    },
    contact: {
      ja: "+39(0)-346-72410",
      en: "+39-346-72410",
    },
    established: "2005",
    employees: "",
    facilities: {
      ja: "巻上げ装置耐荷重：3 t × 3 t",
      en: "Main Hoist: 3 t * 3 t",
    },
    map: "https://maps.app.goo.gl/LDTe2oNsSahnE9df8",
    photoSrc: "img_group_sec_italy.webp",
  },
  /* Turkey */
  {
    id: "sec-europe-dket",
    group: "sec",
    region: "europe",
    country: "Turky",
    location: { ja: "トルコ", en: "Turkey" },
    companyName: {
      ja: "DKET – Global Mold Texturing",
      en: "DKET – Global Mold Texturing",
    },
    companyNameSecondary: {
      ja: "Turkey",
      en: "Turkey",
    },
    address: {
      ja: "Akçaburgaz Mah. 1585 Sk. Tem34 Sanayi Sitesi B3/No:22, Esenyurt, İstanbul, Turkey",
      en: "Akçaburgaz Mah. 1585 Sk. Tem34 Sanayi Sitesi B3/No:22, Esenyurt, İstanbul, Turkey",
    },
    phone: {
      ja: "+90(0)-212-858-0387",
      en: "+39-346-72410",
    },
    fax: {
      ja: "",
      en: "",
    },
    contact: {
      ja: "",
      en: "",
    },
    established: "",
    employees: "",
    facilities: {
      ja: "",
      en: "",
    },
    map: "https://maps.app.goo.gl/kWX1a2GcCnzhP4b87",
    photoSrc: "img_group_sec_dket.webp",
  },
  /* North America */
  /* North America */
  {
    id: "sec-north-america-wisconsin",
    group: "sec",
    region: "north-america",
    country: "United States",
    location: { ja: "アメリカ", en: "United States" },
    companyName: {
      ja: "WISCONSIN ENGRAVING",
      en: "WISCONSIN ENGRAVING",
    },
    companyNameSecondary: {
      ja: "United States",
      en: "United States",
    },
    address: {
      ja: "2435 South 170th Street Berlin, WI 53151 United States",
      en: "2435 South 170th Street Berlin, WI 53151 United States",
    },
    phone: {
      ja: "+1(0)-262-786-4521",
      en: "+1-262-786-4521",
    },
    fax: {
      ja: "+1(0)-262-786-8110",
      en: "+1-262-786-8110",
    },
    contact: {
      ja: "Mr. Pete Kambouris (Sales Manager)",
      en: "Mr. Pete Kambouris (Sales Manager)",
    },
    established: "2005",
    employees: "",
    facilities: {
      ja: "巻上げ装置耐荷重：5 t × 5 t",
      en: "Main Hoist: 5 t * 5 t",
    },
    map: "https://goo.gl/maps/uwNsuvFL6dH9S3ZY6",
    photoSrc: "img_group_sec_wisconsin.webp",
  },
  {
    id: "sec-north-america-custometch",
    group: "sec",
    region: "north-america",
    country: "United States",
    location: { ja: "アメリカ", en: "United States" },
    companyName: {
      ja: "CUSTOM ETCH",
      en: "CUSTOM ETCH",
    },
    companyNameSecondary: {
      ja: "United States",
      en: "United States",
    },
    address: {
      ja: "1813 W State St, New Castle, PA 16101 United States",
      en: "1813 W State St, New Castle, PA 16101 United States",
    },
    phone: {
      ja: "+1(0)-724-652-7117",
      en: "+1-724-652-7117",
    },
    fax: {
      ja: "+1(0)-724-260-6804",
      en: "+1-724-260-6804",
    },
    contact: {
      ja: "",
      en: "",
    },
    established: "",
    employees: "",
    facilities: {
      ja: "",
      en: "",
    },
    map: "https://maps.app.goo.gl/6tsM3LXbRGGveCpy5",
    photoSrc: "img_group_sec_custometch.webp",
  },
  {
    id: "sec-north-america-melco",
    group: "sec",
    region: "north-america",
    country: "United States",
    location: { ja: "アメリカ", en: "United States" },
    companyName: {
      ja: "MELCO ENGRAVING",
      en: "MELCO ENGRAVING",
    },
    companyNameSecondary: {
      ja: "United States",
      en: "United States",
    },
    address: {
      ja: "1809 Rochester Industrial Dr, Rochester Hills, MI 48309, United States",
      en: "1809 Rochester Industrial Dr, Rochester Hills, MI 48309, United States",
    },
    phone: {
      ja: "+1(0)-248-656-9000",
      en: "+1-248-656-9000",
    },
    fax: {
      ja: "+1(0)-248-656-9005",
      en: "+1-248-656-9005",
    },
    contact: {
      ja: "",
      en: "",
    },
    established: "",
    employees: "",
    facilities: {
      ja: "",
      en: "",
    },
    map: "https://maps.app.goo.gl/J1WxczjBTiRRcsFeA",
    photoSrc: "img_group_sec_melco.webp",
  },
  /* South America */
  /* Brazil */
  {
    id: "sec-south-america",
    group: "sec",
    region: "south-america",
    country: "Brazil",
    location: { ja: "ブラジル", en: "Brazil" },
    companyName: {
      ja: "KRUTH DO BRAZIL LTDA",
      en: "KRUTH DO BRAZIL LTDA",
    },
    companyNameSecondary: {
      ja: "Brazil",
      en: "Brazil",
    },
    address: {
      ja: "RUA Eugenia S Vitale, 1129, CEP 09965-000 Sao Bernando do, Campo-SP",
      en: "RUA Eugenia S Vitale, 1129, CEP 09965-000 Sao Bernando do, Campo-SP",
    },
    phone: {
      ja: "+55(0)-11-4361-2000",
      en: "+55-11-4361-2000",
    },
    fax: {
      ja: "+55(0)-11-4361-2000",
      en: "+55-11-4361-2000",
    },
    contact: {
      ja: "Mr. Jairo Dias (General Manager)",
      en: "Mr. Jairo Dias (General Manager)",
    },
    established: "1998",
    employees: "",
    facilities: {
      ja: "巻上げ装置耐荷重：15 t × 10 t",
      en: "Main Hoist: 15 t * 10 t",
    },
    map: "https://goo.gl/maps/bgS7zTVVa7jDB5yv7",
    photoSrc: "img_group_sec_brazil.webp",
  },
];
