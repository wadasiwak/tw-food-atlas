---
name: verify
description: 驗證 tw-food-atlas 的改動——啟動指令、test hook、已知眉角
---

# tw-food-atlas 驗證手冊

## 指令
- `npm run dev` → http://localhost:5280（dev/preview 同 port）
- `npm run check` → 內容驗證器（全量，含英譯覆蓋/圖片授權；`--require-full-en` 缺譯變 error）；單檔：`node scripts/check-content.mjs src/data/cities/<id>.ts`；英譯單檔：`node scripts/check-content.mjs src/data/en/<id>.ts`（對照中文檔）
- `npm run build` → tsc + vite build（CI 也是這兩步 gate）
- `npm run e2e` → 自起 preview 5281 跑 playwright，16 組斷言（含語言切換/?lang=en/英文分享/圖片 onError 降級）
- 圖片管線：`fetch-store-images.mjs`（實拍）/`fetch-dish-images.mjs`（菜色池）→ scratch 縮圖人工覆核 → `map-dish-images.mjs`（對映 dry-run）→ `build-image-data.mjs`（產 images.ts；`--verify` HEAD 檢查 hotlink）
- `node scripts/gen-og-assets.mjs` → 重產 og-image.png / apple-touch-icon.png

## Test hook
`window.__twfood`：`count` / `rate(id, score)` / `ratings()` / `openDetail(id)` / `setTab(tab)` / `setLang(lang)` / `restaurants()`。

## 眉角
- **視覺改動部署後必須截圖用 Read 親眼看**——e2e 全綠不代表版面沒塌（家族鐵則）。
- 地圖（maplibre）是 React.lazy 延遲載入：首屏 bundle 不應含 maplibre，改 BrowseTab 時注意別把 `FoodMap` 改成靜態 import。
- `hasWebGL()` 降級分支是 e2e 釘的對象：headless 無 GPU 時地圖模式必須顯示降級列表，不可白屏。
- GoatCounter `path` 只回報 pathname（#share=/#r/ 帶用戶資料，絕不能進 analytics）——e2e 有釘。
- localStorage key：評分 `twfood-ratings-v1`（綁 canonical id，改 id = breaking change）；語言 `recs-lang-v1` 與 recommender 家族共用。
- 內容增修：id 必須沿用 `docs/REGISTRY.md`；新店跑單檔 check；座標雙層驗證（全台 box + 城 bbox）。
- 分享物料一整套：og-image + favicon + apple-touch-icon + manifest，改一個就整套檢查。
