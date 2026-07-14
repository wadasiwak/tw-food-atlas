# Canonical Restaurant ID Registry

id 治理規則：
- 每城由**單一 agent 批次**獨佔生產（台北拆兩批、分區互斥），天然不撞 id。
- id 格式：kebab-case、`<cityId>-` 前綴、英文語意化，驗證器強制。
- **本檔在內容定稿後由 `npm run check` 的輸出回填**，之後就是 canonical 清單：
  後續增修內容 MUST use these exact ids，改 id = breaking change（會弄壞使用者的
  localStorage 評分），除非店家本身消失，否則禁止改名或刪除 id。

## 批次分工（S4）

| 批次 | cityId | 範圍 |
|---|---|---|
| taipei-a | taipei | 萬華/大同/中正/中山（含寧夏夜市）＋城中老字號 |
| taipei-b | taipei | 大安/信義/松山/士林/北投（含士林、饒河夜市） |
| taichung | taichung | 全市 |
| tainan | tainan | 全市（中西區為主） |
| kaohsiung | kaohsiung | 全市 |
| chiayi | chiayi | 全市（品質基準城） |
| keelung | keelung | 全市 |
| hsinchu | hsinchu | 全市 |
| changhua | changhua | 彰化市＋鹿港 |
| yilan | yilan | 宜蘭市/羅東/礁溪 |
| hualien | hualien | 花蓮市 |
| donggang | donggang | 東港鎮 |
| taitung | taitung | 台東市 |

## Canonical IDs（內容定稿後回填）

（待 S4 完成）
