// src/lib/companyFieldPresets.ts
import type { FieldKey } from "@/lib/companyCards";

export const FIELD_PRESET = {
  ne: [
    "location",
    "companyName",
    "address",
    "phone",
    "fax",
    "mobile",
    "established",
    "employees",
    "facilities",
    "url",
    "map",
    "contact",
  ] satisfies FieldKey[],

  nwn: [
    "location",
    "companyName",
    "address",
    "phone",
    "fax",
    "mobile",
    "established",
    "employees",
    "facilities",
    "url",
    "map",
    "contact",
  ] satisfies FieldKey[],

  sec: [
    "location",
    "companyName",
    "address",
    "phone",
    "fax",
    "mobile",
    "established",
    "employees",
    "facilities",
    "url",
    "map",
    "contact",
  ] satisfies FieldKey[],
} as const;
