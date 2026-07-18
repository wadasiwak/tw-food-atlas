// 英文包彙整入口：只能被 dynamic import（src/lib/localize.ts 的 loadEnPack），
// 任何靜態 import 都會把整包拖進主 chunk——build 後要 audit dist/assets 確認獨立。
// 完成一城的英譯就在這裡加一行 import（鏡像 src/data/index.ts 的城市清單）。
import type { EnRestaurantText } from "../types";
import { en as taipeiA } from "./taipei-a";
import { en as taipeiB } from "./taipei-b";
import { en as newtaipeiA } from "./newtaipei-a";
import { en as newtaipeiB } from "./newtaipei-b";
import { en as newtaipeiC } from "./newtaipei-c";
import { en as keelung } from "./keelung";
import { en as hsinchu } from "./hsinchu";
import { en as yilan } from "./yilan";
import { en as changhua } from "./changhua";
import { en as chiayi } from "./chiayi";
import { en as tainan } from "./tainan";
import { en as kaohsiung } from "./kaohsiung";
import { en as donggang } from "./donggang";
import { en as hualien } from "./hualien";
import { en as taitung } from "./taitung";

export const EN_ALL: Record<string, EnRestaurantText> = {
  ...taipeiA,
  ...taipeiB,
  ...newtaipeiA,
  ...newtaipeiB,
  ...newtaipeiC,
  ...keelung,
  ...hsinchu,
  ...yilan,
  ...changhua,
  ...chiayi,
  ...tainan,
  ...kaohsiung,
  ...donggang,
  ...hualien,
  ...taitung,
};
