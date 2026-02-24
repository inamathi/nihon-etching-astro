// src/lib/companyCards.ts
import type { CompanyData } from "@/data/companyOverview";
import type { Lang } from "@/locales/multilingual";
import { pick } from "@/lib/companyView";

export type FieldKey =
  | "location"
  | "companyName"
  | "address"
  | "phone"
  | "fax"
  | "mobile"
  | "established"
  | "employees"
  | "facilities"
  | "url"
  | "map"
  | "contact";

export type FieldDef = {
  key: FieldKey;
  kind: "text" | "link";
  getValue: (c: CompanyData, lang: Lang) => string;
  getHref?: (c: CompanyData, lang: Lang) => string;
};

const fieldDict: Record<FieldKey, FieldDef> = {
  location: {
    key: "location",
    kind: "text",
    getValue: (c, lang) => pick(c.location as any, lang).trim(),
  },
  companyName: {
    key: "companyName",
    kind: "text",
    getValue: (c, lang) => pick(c.companyName as any, lang).trim(),
  },
  address: {
    key: "address",
    kind: "text",
    getValue: (c, lang) => pick(c.address as any, lang).trim(),
  },
  phone: {
    key: "phone",
    kind: "text",
    getValue: (c, lang) => pick(c.phone as any, lang).trim(),
  },
  fax: {
    key: "fax",
    kind: "text",
    getValue: (c, lang) => pick(c.fax as any, lang).trim(),
  },
  mobile: {
    key: "mobile",
    kind: "text",
    getValue: (c, lang) => pick(c.mobile as any, lang).trim(),
  },

  // 文字列（I18nTextではない）
  established: {
    key: "established",
    kind: "text",
    getValue: (c) => (c.established ?? "").trim(),
  },
  employees: {
    key: "employees",
    kind: "text",
    getValue: (c) => (c.employees ?? "").trim(),
  },

  facilities: {
    key: "facilities",
    kind: "text",
    getValue: (c, lang) => pick(c.facilities as any, lang).trim(),
  },

  url: {
    key: "url",
    kind: "link",
    getValue: (c) => (c.url ?? "").trim(),
    getHref: (c) => (c.url ?? "").trim(),
  },

  map: {
    key: "map",
    kind: "link",
    getValue: (_c, lang) => (lang === "ja" ? "Google Map" : "Google Map"),
    getHref: (c, lang) => pick(c.map as any, lang).trim(),
  },

  contact: {
    key: "contact",
    kind: "text", // ※リンクではなく人名表示
    getValue: (c, lang) => pick(c.contact as any, lang).trim(),
  },
};

// ここが「ページ側で差し替える」入口
export const makeFields = (keys: FieldKey[]): FieldDef[] => {
  return keys.map((k) => fieldDict[k]);
};
