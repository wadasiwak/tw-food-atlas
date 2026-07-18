# 英譯生產指南（給產英文包的 agent，逐條遵守）

交付物：`src/data/en/<basename>.ts`，與 `src/data/cities/<basename>.ts` **同名鏡像**、以 canonical id 為 key：

```ts
import type { EnRestaurantText } from "../types";

export const en: Record<string, EnRestaurantText> = {
  "<id>": { name, area, blurb, tips?, mustOrder },
};
```

交付前必自跑 `node scripts/check-content.mjs src/data/en/<basename>.ts` 到全綠（驗證器會對照中文檔逐 id 比對）。完成後在 `src/data/en/index.ts` 加一行 import（鏡像 `src/data/index.ts` 順序）。

範本：`src/data/en/donggang.ts`（pilot，已定稿——照它的口吻與密度寫）。

## nameEn

1. **有官方英文名用官方**（招牌/官網/米其林英文指南）：態芮→"Tairroir"、阜杭豆漿→"Fu Hang Soy Milk"、鼎泰豐→"Din Tai Fung"。動筆前快查有沒有官方英譯。
2. 否則：**專名部分漢語拼音**（無聲調、字首大寫）＋**品類意譯**：
   - 劉里長雞肉飯 → "Liu Lizhang Turkey Rice"（頭銜當品牌用時音譯）
   - 林東芳牛肉麵 → "Lin Dong Fang Beef Noodles"
   - 雙連圓仔湯 → "Shuanglian Tangyuan Sweet Soup"（台灣特有食物可音譯+短注）
3. ≤60 字元、不加 "Restaurant"/"Shop" 綴（除非店名本身有）、不全大寫。

## areaEn

固定模板，**同一個中文 area 全站必須映射到同一個英文**（動筆前先掃你的城市檔把 area 清單做成對照表）：
- X夜市 → "X Night Market"（寧夏→Ningxia Night Market）
- X老街 → "X Old Street"；X市場 → "X Market"；X商圈 → "X Area"
- 街區/地名用通行拼音或官方英譯：永康街→"Yongkang Street"、大稻埕→"Dadaocheng"、西門町→"Ximending"

## blurbEn

- **1–2 句、120–330 字元**（硬限 80–400）。旅遊指南體的自然英文，**重寫不直譯**——先讀懂中文在講什麼，再用英文把「它是什麼＋為什麼值得去」講給外國朋友聽。
- 事實必須與中文版一致（年代/獎項/做法/場景），禁加中文版沒有的資訊，禁腦補。
- 台灣特有食物：音譯＋一次性短說明（rou guo — steamed rice cakes in thickened broth）。
- 禁 "must-try"、"hidden gem"、"best-kept secret"、"mouth-watering" 這類廉價旅遊腔。

## tipsEn

- 中文有 tips 才翻（驗證器強制：中文沒有就不得有）；≤120 字元，實用資訊照實翻。

## mustOrderEn

- **與中文版等長、逐索引對應**（驗證器強制），每樣 ≤30 字元。
- 菜名意譯為主（滷肉飯→"Braised pork rice"、火雞肉飯→"Turkey rice"）；台灣特有可音譯（"Tangyuan"、"Rou guo (rice cake soup)"）。

## 通用

- id 一律沿用中文檔 canonical id，一字不改。
- 每家都要翻，不准挑著翻（驗證器全量模式會報覆蓋率）。
- area/blurb/tips 不得殘留中文字元（驗證器會警告）。
