// 資料入口：內容漸進上線——完成一城就在這裡加一行 import。
// 未 import 的城市檔不會進 bundle，UI 與驗證器都只看得到已掛載的城市。
import type { Restaurant } from "./types";
import { CITIES, cityById } from "./cities";
import { restaurants as taipeiA } from "./cities/taipei-a";
import { restaurants as taipeiB } from "./cities/taipei-b";
import { restaurants as taipeiC } from "./cities/taipei-c";
import { restaurants as taipeiD } from "./cities/taipei-d";
import { restaurants as newtaipeiA } from "./cities/newtaipei-a";
import { restaurants as newtaipeiB } from "./cities/newtaipei-b";
import { restaurants as newtaipeiC } from "./cities/newtaipei-c";
import { restaurants as keelung } from "./cities/keelung";
import { restaurants as hsinchu } from "./cities/hsinchu";
import { restaurants as yilan } from "./cities/yilan";
import { restaurants as taichung } from "./cities/taichung";
import { restaurants as changhua } from "./cities/changhua";
import { restaurants as chiayi } from "./cities/chiayi";
import { restaurants as tainan } from "./cities/tainan";
import { restaurants as kaohsiung } from "./cities/kaohsiung";
import { restaurants as donggang } from "./cities/donggang";
import { restaurants as hualien } from "./cities/hualien";
import { restaurants as taitung } from "./cities/taitung";

export const ALL_RESTAURANTS: Restaurant[] = [
  ...taipeiA,
  ...taipeiB,
  ...taipeiC,
  ...taipeiD,
  ...newtaipeiA,
  ...newtaipeiB,
  ...newtaipeiC,
  ...keelung,
  ...hsinchu,
  ...yilan,
  ...taichung,
  ...changhua,
  ...chiayi,
  ...tainan,
  ...kaohsiung,
  ...donggang,
  ...hualien,
  ...taitung,
];

export { CITIES, cityById };

export const restaurantById = new Map(ALL_RESTAURANTS.map((r) => [r.id, r]));

export const byCity = new Map<string, Restaurant[]>();
for (const r of ALL_RESTAURANTS) {
  const list = byCity.get(r.city) ?? [];
  list.push(r);
  byCity.set(r.city, list);
}
