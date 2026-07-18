// Taiwan food atlas content data. Plain literals designed to be
// LLM-generatable: to add restaurants for a city, append objects of this
// shape to that city's file under src/data/cities/ — the browser, map,
// and recommender all pick them up automatically.
//
// 鐵則（產內容的 agent 必讀）:
// - id 必須來自 docs/REGISTRY.md 的 canonical 清單，禁止自創。
// - 店名/位置/招牌菜至少兩個獨立來源一致才收；查不到就換一家，禁腦補。
// - 近兩年有歇業/搬遷報導的店不收；不確定是否營業中就換一家。
// - 只存穩定欄位。營業時間/電話/評分一律不收，交給 Google Maps 外連。
// - blurb/tips 必須自撰繁中台灣用語，禁抄任何媒體或評論網文字。

/** 主菜系（單選）。夜市不是菜系——夜市是場所，用 area + tag「夜市」表達。 */
export type Cuisine =
  | "taiwanese" // 台菜/熱炒/辦桌菜/客家菜
  | "street-food" // 小吃（肉圓/蚵仔煎/滷肉飯/麵線/碗粿/火雞肉飯…）
  | "noodles" // 麵食專門（牛肉麵/意麵/米粉/餛飩麵）
  | "breakfast" // 早餐（豆漿燒餅/飯糰/碳烤吐司/早午餐老店）
  | "seafood" // 海產店/海鮮餐廳/生魚片攤
  | "hotpot" // 火鍋/薑母鴨/羊肉爐/麻辣鍋
  | "bbq-fried" // 燒烤/鹽酥雞/炸物/烤鴨
  | "japanese" // 日式（壽司/拉麵/丼/居酒屋）
  | "chinese" // 外省與中式菜系（川湘粵/眷村菜/餃子館/牛肉餡餅）
  | "western" // 西式/義法/牛排/漢堡
  | "asian" // 東南亞/韓式/印度等其他亞洲
  | "dessert" // 甜點/冰品/豆花/甜湯
  | "drinks" // 茶飲（手搖創始店、老茶行）
  | "cafe" // 咖啡店（自家烘焙/老宅咖啡/喫茶老店，含輕食）
  | "bakery" // 餅舖/糕點/麵包/伴手禮老店
  | "vegetarian"; // 素食專門

/** 一人一餐預期花費（NT$）。粗粒度才不會過時。 */
export type PriceBand = 1 | 2 | 3 | 4;
// 1 = ~150 銅板小吃 / 2 = 150–400 平價餐館 / 3 = 400–1000 聚餐級 / 4 = 1000+ 大餐犒賞

/** tag 白名單。內容只能從這裡選 2–6 個，驗證器會擋自創 tag。 */
export const TAGS = [
  "夜市",
  "老店",
  "創始店",
  "米其林必比登",
  "米其林星級",
  "排隊名店",
  "在地人愛",
  "觀光客必訪",
  "宵夜",
  "市場美食",
  "伴手禮",
  "路邊攤",
  "冷氣內用",
  "適合聚餐",
  "素食友善",
] as const;
export type Tag = (typeof TAGS)[number];

export interface LatLng {
  lat: number;
  lng: number;
}

export type Region = "north" | "central" | "south" | "east";

export interface CityDef {
  /** kebab-case 通行拼音, e.g. "chiayi". */
  id: string;
  name: string; // "嘉義"
  nameEn: string; // "Chiayi"
  emoji: string;
  region: Region;
  /** Bounding box used by the content validator and map fitting. */
  bbox: { minLat: number; maxLat: number; minLng: number; maxLng: number };
}

export interface Restaurant {
  /** kebab-case，強制城市前綴，必須存在於 docs/REGISTRY.md，e.g. "chiayi-liu-turkey-rice". */
  id: string;
  /** 招牌上的正式店名（繁中），e.g. "劉里長雞肉飯"。 */
  name: string;
  /** Must match a CityDef.id. */
  city: string;
  /** 商圈/夜市/行政區名，同 area 的店地圖上自然群聚，e.g. "文化路夜市"、"永康街"。 */
  area: string;
  /** 店面座標，小數 4 位以上，必須落在該城 bbox 內。 */
  center: LatLng;
  cuisine: Cuisine;
  priceBand: PriceBand;
  /** 2–6 個，只能取自 TAGS 白名單。 */
  tags: Tag[];
  /** 招牌必點 1–3 樣，每樣 ≤10 字，e.g. ["火雞肉飯", "涼菜"]。 */
  mustOrder: string[];
  /** 60–120 字兩句：它是什麼＋為什麼值得去。自撰，禁模板句（必吃/CP值高/銅板美食）。 */
  blurb: string;
  /** 一句實用提示（排隊時段/怎麼點/附近順遊），≤60 字，可省略。 */
  tips?: string;
  /** 創業年份（約略十年即可，如 1949）。證明老店資格；查不到省略。 */
  since?: number;
  /**
   * Google Maps 搜尋 query（非 URL），格式「店名 城市」，e.g. "劉里長雞肉飯 嘉義"。
   * UI 組成 https://www.google.com/maps/search/?api=1&query=… 供查營業時間與評論。
   */
  gmapsQuery: string;
}

/**
 * 店家配圖（Wikimedia Commons 熱連結）。不放在 Restaurant 上——
 * 由 scripts/build-image-data.mjs 產出 src/data/extras/images.ts，以 id join，
 * 且走 dynamic import（784 筆不進主 chunk）。
 * 授權白名單：CC0 / Public domain / CC BY / CC BY-SA（NC/ND 一律不收），
 * CC BY 系列依法必須署名——UI 詳情頁的 credit 塊不可拿掉。
 */
export interface StoreImage {
  /** upload.wikimedia.org 的縮圖 URL（960px 級） */
  src: string;
  author: string;
  license: string;
  licenseUrl: string;
  /** Commons File: 頁 */
  sourceUrl: string;
  /** photo = 該店實拍；dish = 菜色示意圖（UI 必須標「示意圖」） */
  kind: "photo" | "dish";
}

/**
 * 店家內容英譯（src/data/en/ 鏡像檔，以 id 對齊，lazy-load）。
 * 缺哪欄就回退中文；mustOrder 必須與中文版等長、逐索引對應。
 * gmapsQuery 恆用中文——Google Maps 在台灣用中文查更準，不翻。
 */
export interface EnRestaurantText {
  name: string;
  area: string;
  blurb: string;
  /** 中文版有 tips 才能有；中文版沒有就省略。 */
  tips?: string;
  mustOrder: string[];
}
