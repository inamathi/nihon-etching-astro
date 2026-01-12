// src/lib/companyView.ts
import type { Lang } from "@/locales/multilingual";
import type { CompanyData, I18nText } from "@/data/companyOverview";

export const pick = (x: I18nText | undefined, lang: Lang) =>
  x?.[lang] ?? x?.ja ?? "";

export type FieldKind = "text" | "link";

export type FieldDef = {
  key: string; // common.labels.xxx
  kind: FieldKind;
  getValue: (c: CompanyData, lang: Lang) => string;
  getHref?: (c: CompanyData, lang: Lang) => string;
};

export const defaultFields = (): FieldDef[] => [
  {
    key: "location",
    kind: "text",
    getValue: (c, lang) => pick(c.location, lang),
  },
  {
    key: "companyName",
    kind: "text",
    getValue: (c, lang) => pick(c.companyName, lang),
  },
  {
    key: "address",
    kind: "text",
    getValue: (c, lang) => pick(c.address, lang),
  },
  { key: "phone", kind: "text", getValue: (c, lang) => pick(c.phone, lang) },
  { key: "fax", kind: "text", getValue: (c, lang) => pick(c.fax, lang) },
  { key: "mobile", kind: "text", getValue: (c, lang) => pick(c.mobile, lang) },

  // ここは「文字列」扱い（I18nText ではない前提）
  { key: "established", kind: "text", getValue: (c) => c.established ?? "" },
  { key: "employees", kind: "text", getValue: (c) => c.employees ?? "" },

  {
    key: "facilities",
    kind: "text",
    getValue: (c, lang) => pick(c.facilities, lang),
  },

  // url/map はリンク
  {
    key: "url",
    kind: "link",
    getValue: (c) => c.url ?? "",
    getHref: (c) => c.url ?? "",
  },
  {
    key: "map",
    kind: "link",
    getValue: (c) => c.map ?? "",
    getHref: (c) => c.map ?? "",
  },

  // contact は「人名表示」なので text
  {
    key: "contact",
    kind: "text",
    getValue: (c, lang) => pick(c.contact, lang),
  },
];
