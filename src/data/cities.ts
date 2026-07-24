// 首發 12 城定義。bbox 是內容驗證器的座標防線（抓 LLM 座標幻覺），
// 範圍取「該城觀光美食圈」而非行政區全境——店家理應落在這些框內。
import type { CityDef } from "./types";

export const CITIES: CityDef[] = [
  {
    id: "taipei",
    name: "台北",
    nameEn: "Taipei",
    emoji: "🏙️",
    region: "north",
    bbox: { minLat: 24.96, maxLat: 25.22, minLng: 121.42, maxLng: 121.67 },
  },
  {
    id: "newtaipei",
    name: "新北",
    nameEn: "New Taipei",
    emoji: "🌉",
    region: "north",
    // 環繞台北市：西至鶯歌樹林、北至淡水金山、東至九份金瓜石、南至烏來
    bbox: { minLat: 24.85, maxLat: 25.3, minLng: 121.28, maxLng: 121.95 },
  },
  {
    id: "keelung",
    name: "基隆",
    nameEn: "Keelung",
    emoji: "⚓",
    region: "north",
    bbox: { minLat: 25.08, maxLat: 25.17, minLng: 121.68, maxLng: 121.8 },
  },
  {
    id: "hsinchu",
    name: "新竹",
    nameEn: "Hsinchu",
    emoji: "🌬️",
    region: "north",
    bbox: { minLat: 24.75, maxLat: 24.85, minLng: 120.88, maxLng: 121.05 },
  },
  {
    id: "yilan",
    name: "宜蘭",
    nameEn: "Yilan",
    emoji: "🦆",
    region: "north",
    bbox: { minLat: 24.55, maxLat: 24.9, minLng: 121.65, maxLng: 121.9 },
  },
  {
    id: "taichung",
    name: "台中",
    nameEn: "Taichung",
    emoji: "☀️",
    region: "central",
    bbox: { minLat: 24.08, maxLat: 24.25, minLng: 120.55, maxLng: 120.78 },
  },
  {
    id: "changhua",
    name: "彰化",
    nameEn: "Changhua",
    emoji: "🏮",
    region: "central",
    bbox: { minLat: 23.98, maxLat: 24.14, minLng: 120.4, maxLng: 120.62 },
  },
  {
    id: "chiayi",
    name: "嘉義",
    nameEn: "Chiayi",
    emoji: "🦃",
    region: "south",
    bbox: { minLat: 23.44, maxLat: 23.53, minLng: 120.4, maxLng: 120.5 },
  },
  {
    id: "tainan",
    name: "台南",
    nameEn: "Tainan",
    emoji: "🍤",
    region: "south",
    bbox: { minLat: 22.95, maxLat: 23.08, minLng: 120.1, maxLng: 120.28 },
  },
  {
    id: "kaohsiung",
    name: "高雄",
    nameEn: "Kaohsiung",
    emoji: "🚢",
    region: "south",
    bbox: { minLat: 22.55, maxLat: 22.78, minLng: 120.25, maxLng: 120.42 },
  },
  {
    id: "donggang",
    name: "屏東",
    nameEn: "Pingtung",
    emoji: "🐟",
    region: "south",
    bbox: { minLat: 22.4, maxLat: 22.52, minLng: 120.4, maxLng: 120.52 },
  },
  {
    id: "hualien",
    name: "花蓮",
    nameEn: "Hualien",
    emoji: "⛰️",
    region: "east",
    bbox: { minLat: 23.93, maxLat: 24.06, minLng: 121.55, maxLng: 121.65 },
  },
  {
    id: "taitung",
    name: "台東",
    nameEn: "Taitung",
    emoji: "🎈",
    region: "east",
    bbox: { minLat: 22.72, maxLat: 22.82, minLng: 121.08, maxLng: 121.2 },
  },
];

export const cityById = new Map(CITIES.map((c) => [c.id, c]));

/** 全台座標防線（含離島緩衝）。任何店家座標必須先過這關再過城 bbox。 */
export const TAIWAN_BBOX = {
  minLat: 21.8,
  maxLat: 25.4,
  minLng: 118.1,
  maxLng: 122.1,
};
