import type { Restaurant } from "../types";

// 種子資料（驗證器煙霧測試＋UI 開發用；S4 批次會補齊到 28 家）
export const restaurants: Restaurant[] = [
  {
    id: "chiayi-liu-lizhang-turkey-rice",
    name: "劉里長雞肉飯",
    city: "chiayi",
    area: "東區公明路",
    center: { lat: 23.4837, lng: 120.4565 },
    cuisine: "street-food",
    priceBand: 1,
    tags: ["老店", "在地人愛"],
    mustOrder: ["火雞肉飯", "涼菜"],
    blurb:
      "嘉義在地人早餐名單常客，火雞肉片手撕成絲鋪在熱飯上，淋雞油與醬汁，配一盤自選涼菜。開店超過半世紀，凌晨就開賣，是許多嘉義人心中的雞肉飯原點。",
    tips: "早上七點前人少，雞片飯比雞絲飯更能吃出火雞原味。",
    since: 1965,
    gmapsQuery: "劉里長雞肉飯 嘉義",
  },
  {
    id: "chiayi-smart-fish-head",
    name: "林聰明沙鍋魚頭",
    city: "chiayi",
    area: "文化路夜市",
    center: { lat: 23.4787, lng: 120.4529 },
    cuisine: "taiwanese",
    priceBand: 2,
    tags: ["老店", "排隊名店", "觀光客必訪", "夜市"],
    mustOrder: ["沙鍋魚頭", "冬菜蝦仁蛋湯"],
    blurb:
      "文化路上的嘉義代表店，大骨湯底加沙茶與蔬菜燉煮，放入炸過的大頭鰱魚頭，湯濃味厚。從路邊攤做到觀光客指名，排隊人潮是文化路夜市的固定風景。",
    tips: "下午四點多開賣前就開始排，可先領號碼牌再逛夜市。",
    since: 1953,
    gmapsQuery: "林聰明沙鍋魚頭 嘉義",
  },
];
