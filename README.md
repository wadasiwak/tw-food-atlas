# 台灣美食圖鑑 tw-food-atlas 🍜

全台 13 城 784 家精選名店老店的**中英雙語**靜態圖鑑：地圖找店、菜系/價位/標籤篩選、口味評分與個人化推薦，每家店附 Wikimedia Commons 配圖（實拍或菜色示意圖），還能把你的美食 Top 10 做成連結分享、和朋友比對口味相合度。

**線上版**：https://wadasiwak.github.io/tw-food-atlas/ ｜ 英文版直達：https://wadasiwak.github.io/tw-food-atlas/?lang=en

## 功能

- **探索**：13 城 × 16 菜系 × 4 價位帶篩選，列表/地圖（MapLibre）雙模式，搜尋支援中英文
- **雙語**：右上 EN/中 一鍵切換（或 `?lang=en` 直達）——784 家店名/商圈/介紹/招牌菜全英譯（lazy-load 英文包，缺譯自動回退中文），給國外朋友直接用
- **配圖**：每家店一張圖——名店實拍優先，其餘用該店招牌菜的菜色示意圖（右上角標「示意圖/Illustrative」），全部來自 Wikimedia Commons 可再利用授權（CC0/PD/CC BY/CC BY-SA），詳情頁附作者署名
- **評分**：一次一張卡快速評分（鍵盤 1–9、0、→），略過與口袋名單
- **為你推薦**：內容式推薦（菜系/招牌菜/標籤/價位向量 + cosine + MMR 多樣性），可鎖定城市、換一批，附「因為你喜歡…」理由
- **分享**：Top 10 壓進網址（無後端），朋友打開能看榜單＋口味相合度；英文模式分享連結自動帶 `?lang=en`
- 店家詳情附 Google Maps 連結查營業時間與評論——站內只存穩定欄位，不會給你過時的營業資訊

## 收錄規模（2026-07 R4）

台北 204｜新北 110｜台南 84｜高雄 79｜台中 79｜嘉義 52｜宜蘭 30｜新竹 28｜彰化鹿港 28｜基隆 26｜花蓮 26｜台東 20｜屏東東港 18。
每家皆兩個獨立來源交叉查證＋2025 年後營業佐證；近兩年歇業/搬遷不收。

## 開發

```
npm install
npm run dev      # port 5280
npm run check    # 內容驗證器（座標/枚舉/字數/重複/英譯對齊/圖片授權）
npm run build
npm run e2e      # port 5281，16 組斷言
```

- 內容管線：`docs/CONTENT_GUIDE.md`＋`docs/REGISTRY.md`（canonical id，凍結 append-only）；英譯規則 `docs/EN_GUIDE.md`；schema 真相檔 `src/data/types.ts`
- 英譯單檔驗證：`node scripts/check-content.mjs src/data/en/<city>.ts`（對照中文檔逐 id 比對）
- 圖片管線：`fetch-store-images.mjs`（逐店搜 Commons 實拍）→ `fetch-dish-images.mjs`（菜色圖池，`scripts/dish-pool.json`）→ 人工縮圖覆核 → `map-dish-images.mjs`（對映 dry-run）→ `build-image-data.mjs`（產 `src/data/extras/images.ts`；`--verify` 可 HEAD 檢查 hotlink 存活）
- bundle 紀律：英文包與圖片資料都是 dynamic import 獨立 chunk，不進主 chunk；MapLibre 恆 React.lazy

## 資料與版權

- **程式碼**：© 2026 wadasiwak. All rights reserved.
- **內容文字**（店家介紹/提示，中英文）：原創撰寫，© 2026 wadasiwak，未經授權禁止轉載。
- **店家資訊**（名稱/位置/招牌菜）：屬公共事實，人工自多來源交叉整理的靜態快照；營業時間與即時狀態請以各店家與 Google Maps 為準。本站與所有店家無任何關係。
- **配圖**：來自 Wikimedia Commons，僅收可再利用授權（CC0/Public domain/Attribution/CC BY/CC BY-SA，不收 NC/ND）；每張在店家詳情頁標示作者、授權與來源連結。菜色圖為示意，非該店實拍者一律標「示意圖」。
- 地圖底圖：[OpenFreeMap](https://openfreemap.org/)／© OpenStreetMap contributors。
