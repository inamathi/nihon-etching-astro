// Group
export type GroupKey = "ne" | "nwn" | "sec";

// Region
export type NeRegionKey = "japan" | "asia" | "east-asia";
export type NwnRegionKey = "japan" | "overseas" | "east-asia";
export type SecRegionKey = "europe" | "north-america" | "south-america";

// group → region 対応
export type GroupRegionMap = {
  ne: NeRegionKey;
  nwn: NwnRegionKey;
  sec: SecRegionKey;
};
