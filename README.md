# 台灣美食圖鑑 tw-food-atlas 🍜

全台 12 城精選名店老店的靜態圖鑑：地圖找店、菜系/價位/標籤篩選、口味評分與個人化推薦，還能把你的美食 Top 10 做成連結分享、和朋友比對口味相合度。

**線上版**：https://wadasiwak.github.io/tw-food-atlas/

## 功能

- **探索**：12 城 × 15 菜系 × 4 價位帶篩選，列表/地圖（MapLibre）雙模式
- **評分**：一次一張卡快速評分（鍵盤 1–9、0、→），略過與口袋名單
- **為你推薦**：內容式推薦（菜系/招牌菜/標籤/價位向量 + cosine + MMR 多樣性），可鎖定城市、換一批，附「因為你喜歡…」理由
- **分享**：Top 10 壓進網址（無後端），朋友打開能看榜單＋口味相合度
- 店家詳情附 Google Maps 連結查營業時間與評論——站內只存穩定欄位，不會給你過時的營業資訊

## 開發

```
npm install
npm run dev      # port 5280
npm run check    # 內容驗證器（座標/枚舉/字數/重複偵測）
npm run build
npm run e2e      # port 5281
```

內容管線見 `docs/CONTENT_GUIDE.md` 與 `docs/REGISTRY.md`；schema 真相檔 `src/data/types.ts`。

## 資料與版權

- **程式碼**：© 2026 wadasiwak. All rights reserved.
- **內容文字**（店家介紹/提示）：原創撰寫，© 2026 wadasiwak，未經授權禁止轉載。
- **店家資訊**（名稱/位置/招牌菜）：屬公共事實，人工自多來源交叉整理的靜態快照；營業時間與即時狀態請以各店家與 Google Maps 為準。本站與所有店家無任何關係。
- 地圖底圖：[OpenFreeMap](https://openfreemap.org/)／© OpenStreetMap contributors。
