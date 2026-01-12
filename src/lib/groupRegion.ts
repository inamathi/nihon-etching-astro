// src/lib/groupRegion.ts
import type { CompanyData } from "@/data/companyOverview";
import type { Lang } from "@/locales/multilingual";
import { pick } from "@/lib/companyView";

// region の見出しキーを t() 用に返す
export const regionHeadingTextKey = (
  group: "ne" | "nwn" | "sec",
  region: string
) => {
  if (group === "ne") {
    if (region === "japan") return "common.groupName.neJapan";
    if (region === "asia") return "common.groupName.neAsia";
    if (region === "east-asia") return "common.groupName.neEastAsia";
  }

  if (group === "nwn") {
    if (region === "japan") return "common.groupName.nwnJapan";
    if (region === "overseas") return "common.groupName.nwnOverseas";
    if (region === "east-asia") return "common.groupName.nwnEastAsia";
  }

  if (group === "sec") {
    if (region === "europe") return "common.groupName.secEurope";
    if (region === "north-america") return "common.groupName.secNorthAmerica";
    if (region === "south-america") return "common.groupName.secSouthAmerica";
  }

  // 想定外が来たときの保険（表示はkeyになる）
  return `common.groupName.${group}`;
};

// group + regionOrder を渡すと、表示用のまとまりを作る
export function buildRegionBlocks(
  companies: CompanyData[],
  group: "ne" | "nwn" | "sec",
  regionOrder: string[]
) {
  const list = companies.filter((c) => c.group === group);

  return regionOrder
    .map((region) => {
      const items = list.filter((c) => c.region === region);
      return { region, items };
    })
    .filter((b) => b.items.length > 0);
}
