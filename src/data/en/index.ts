// 英文包彙整入口：只能被 dynamic import（src/lib/localize.ts 的 loadEnPack），
// 任何靜態 import 都會把整包拖進主 chunk——build 後要 audit dist/assets 確認獨立。
// 完成一城的英譯就在這裡加一行 import（鏡像 src/data/index.ts 的城市清單）。
import type { EnRestaurantText } from "../types";
import { en as donggang } from "./donggang";

export const EN_ALL: Record<string, EnRestaurantText> = {
  ...donggang,
};
