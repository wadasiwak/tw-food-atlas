// English pack for src/data/cities/taipei-c.ts — keyed by canonical id.
// Rules: see docs/EN_GUIDE.md. mustOrder must align index-by-index with zh.
import type { EnRestaurantText } from "../types";

export const en: Record<string, EnRestaurantText> = {
  // ---- Nanjichang Night Market ----
  "taipei-lailai-dumplings": {
    name: "Lai Lai Dumplings",
    area: "Nanjichang Night Market",
    blurb:
      "The most popular stall on Nanjichang's famous dumpling row, formerly written as Lai Lai with a different character — the sign changed, the lane address didn't. It sells one dumpling only: pork and napa cabbage in a thick hand-rolled wrapper, juicy enough that evening batches often sell out before closing.",
    tips: "Opens at 5 p.m. and runs late into the night; dine-in has a minimum charge.",
    mustOrder: ["Pork & cabbage dumplings", "Hot & sour soup"],
  },
  "taipei-xiaodi-rice-tube": {
    name: "Xiaodi Tube Rice Cake",
    area: "Nanjichang Night Market",
    blurb:
      "The first stall at the Nanjichang archway, built on two headliners: tube rice cake — sticky rice steamed in a canister — and braised pork rice hand-cut from whole slabs of pork, with shallots fried fresh every day. Regulars finish the order with a bowl of taro and crispy pork-rib soup.",
    tips: "Right at the night market's gateway entrance; closed Saturdays.",
    mustOrder: ["Hand-cut braised pork rice", "Tube rice cake", "Taro pork rib soup"],
  },
  "taipei-badong-tangyuan": {
    name: "Badong Tangyuan Sweet Soup",
    area: "Nanjichang Night Market",
    blurb:
      "A Nanjichang sweet-soup shop open since 1977, named for Building Eight of the old military-dependents' apartments. Raw peanuts simmer eight hours over a low flame, the fermented-rice tangyuan gets a swirl of egg and purple rice before serving, and midnight hours make it the standard finish to a night-market run.",
    mustOrder: ["Fermented-rice egg tangyuan", "Peanut soup", "Red bean tangyuan"],
  },
  "taipei-wuwang-runbing": {
    name: "Wu Wang Tsai Chi",
    area: "Nanjichang Night Market",
    blurb:
      "Nanjichang's popiah roll specialist, formerly named Song Qing, which kept its daily queues after moving into Lane 313 and has held Michelin Bib Gourmand status since 2019. Handmade wrappers are stuffed close to bursting with red-yeast pork, crispy vegetarian 'ribs' and curried cabbage.",
    tips: "Take a numbered ticket at busy hours; limited daily batches, closes when sold out.",
    mustOrder: ["Popiah roll"],
  },

  // ---- Wanhua: Huaxi / Longshan Temple / Guangzhou Street ----
  "taipei-achama-sweet-soup": {
    name: "A Chai Ma Sweet Soup",
    area: "Huaxi Street Night Market",
    blurb:
      "A third-generation sweet-soup house at the north end of Huaxi Street, ranked with Beigang Sweet Soup and San Liu Tangyuan as the three great dessert shops around Longshan Temple. Longan rice porridge comes soft but never mushy, and peanut soup with a soaked biscuit is the winter snack Wanhua locals grew up on.",
    tips: "Opens at 2 p.m. and often sells out by evening; check the shop's notices for days off.",
    mustOrder: ["Longan rice porridge", "Peanut soup with biscuit"],
  },
  "taipei-yuanzu-pepper-bun": {
    name: "Fuzhou Yuanzu Pepper Bun",
    area: "Longshan Temple",
    blurb:
      "Open since 1952 and tucked in a fire lane beside Longshan Temple station, this stall sells exactly one thing: charcoal-baked pepper buns. The filling of pork hind leg and Sanxing scallions bakes against the oven wall, queues form before each batch emerges, and Japanese TV crews have come to film it.",
    tips: "Pay first and take a numbered ticket; packs up at 5:30 p.m., so latecomers miss out.",
    mustOrder: ["Charcoal pepper bun"],
  },
  "taipei-dingji-tianbula": {
    name: "Dingji Tianbula",
    area: "Guangzhou Street Night Market",
    blurb:
      "A tianbula specialist at the corner of Guangzhou and Wuzhou streets: one bowl gathers fish-paste tempura, radish, pig's blood cake and crystal dumplings under a sweet sauce passed down three generations. Handing your bowl back for free radish broth is the house ritual; open to 11 p.m. and picked for Taiwan's '500 Bowls'.",
    tips: "Cash only; bring your bowl back to the stall for a free broth top-up.",
    mustOrder: ["Mixed tianbula"],
  },
  "taipei-xiaonan-zhengji-wagui": {
    name: "Xiaonan Zheng Ji Tainan Wagui",
    area: "Longshan Temple",
    blurb:
      "A wagui shop southwest of Longshan Temple that has spent half a century, and three generations, bringing Tainan-style steamed rice bowl cakes to Wanhua. The wagui steams up soft with fried-shallot fragrance; add a bowl of floating milkfish thick soup for a proper Tainan-style brunch.",
    mustOrder: ["Tainan wagui rice cake", "Milkfish thick soup"],
  },
  "taipei-longdu-ice": {
    name: "Longdu Ice Parlor",
    area: "Longshan Temple",
    blurb:
      "A hundred-year ice parlor founded in 1920 under Japanese rule, relocated a few years back from Guangzhou Street to its current Heping West Road address — the film 'Monga' shot scenes inside. Eight-treasure ice lets you pick from over twenty toppings, with cylindrical tangyuan and flat taro balls as its trademark shapes.",
    mustOrder: ["Eight-treasure ice", "Peanut soup"],
  },
  "taipei-huainian-aiyu-jelly": {
    name: "Huainian Aiyu Jelly",
    area: "Guangzhou Street Night Market",
    blurb:
      "A three-generation Guangzhou Street stall going since 1951 that sells one item only: aiyu jelly ice in a bag. The aiyu is hand-washed from seeds and set naturally, the heirloom syrup carries a caramel edge, and the visuals are iconic — straw in the bag to eat in, rubber band tied for takeaway.",
    tips: "Bags only, no bowls; sweetness is adjustable.",
    mustOrder: ["Bagged aiyu jelly ice"],
  },
  "taipei-jianhong-beef-noodle": {
    name: "Jianhong Beef Noodles",
    area: "Luoyang Street",
    blurb:
      "The big-portion, low-price standard-bearer of Luoyang Street's beef noodle row, serving from morning to the small hours as the supper canteen for Wanhua night owls and taxi drivers. Bowls are generous, soup and noodle refills are free, and the scarlet beef-tallow chili sauce is ladle-it-yourself.",
    tips: "Cash only; free refills on soup and noodles.",
    mustOrder: ["Beef noodles"],
  },

  // ---- Wanhua: Ximending ----
  "taipei-meiguanyuan": {
    name: "Mei Guan Yuan",
    area: "Ximending",
    blurb:
      "A Taiwanese-style Japanese restaurant open in Ximending since 1946, where sashimi, tempura and braised pork-chop rice share the same table. The menu runs past eighty dishes, the king prawn salad with house-made mayonnaise is the essential cold starter, and three generations of Taipei families have celebrated here.",
    mustOrder: ["King prawn salad", "Braised pork chop rice", "Assorted tempura"],
  },
  "taipei-lao-tian-lu-luwei": {
    name: "Lao Tian Lu Braised Snacks",
    area: "Ximending",
    blurb:
      "A dry braised-snack institution on Wuchang Street with a lineage back to 1949, its herbal-stock duck tongues and wings the house signature. Grabbing a bag to eat in the cinema was old Ximending's movie ritual, and Hong Kong stars flying in to stock up made it famous in Hong Kong and Taiwan alike.",
    mustOrder: ["Duck tongues", "Duck wings", "Dried tofu"],
  },
  "taipei-nanmei-coffee": {
    name: "Nanmei Coffee",
    area: "Ximending",
    blurb:
      "An old-school Ximending coffee house open since 1970, paired with neighboring Fong Da as the two Chengdu Road stalwarts. The signature Premium Nanmei blend mixes five beans to the house recipe; come early for ham-and-egg toast with hot coffee among regulars who have been drinking here for decades.",
    mustOrder: ["Premium Nanmei blend", "Ham & egg toast"],
  },

  // ---- Zhongzheng: Chengzhong / Nanmen / CKS Memorial Hall / Shandao Temple ----
  "taipei-laopai-beef-ramen": {
    name: "Laopai Beef Ramen King",
    area: "Chengzhong Market",
    blurb:
      "A hand-pulled noodle shop buried in the lanes of Chengzhong Market, famous for spicy zhajiang noodles — order them dry and a bowl of refillable beef broth comes free. Noodles are pulled and boiled to order daily, and the market's rough-edged atmosphere draws Japanese tourists on purpose-made visits.",
    mustOrder: ["Spicy zhajiang noodles", "Beef ramen", "Braised pork head skin"],
  },
  "taipei-hoshing-pastry": {
    name: "Hoshing Pastry",
    area: "Nanmen Market",
    blurb:
      "A Shanghai-style rice pastry shop founded in 1947 that moved with Nanmen Market into its new Roosevelt Road building, steamers running daily as ever. The songgao sponge cakes are handmade from milling the rice to knocking the molds, and the hand-rolled yuanxiao at Lantern Festival draws long queues every year.",
    mustOrder: ["Shanghai songgao rice cake", "Longevity peach buns", "Eight-treasure rice"],
  },
  "taipei-yichang-yufang": {
    name: "Yi Chang Yu Fang",
    area: "Nanmen Market",
    blurb:
      "A celebrated Jiangsu-Zhejiang deli stall in Nanmen Market, started by founder Zhu Yi-chang in 1969 and a repeat champion at Taipei's traditional market festival. Dongpo pork, rock-sugar lotus root and 'soft-heart' stuffed red dates are chef-level dishes ready to serve at home; crowds peak before the holidays.",
    mustOrder: ["Dongpo pork", "Rock-sugar lotus root", "Stuffed red dates"],
  },
  "taipei-jinfeng-braised-pork-rice": {
    name: "Jin Feng Braised Pork Rice",
    area: "Chiang Kai-shek Memorial Hall",
    blurb:
      "A braised pork rice landmark beside Chiang Kai-shek Memorial Hall station that grew from a 1980s local canteen into a tourist pilgrimage. Marbled braised pork over hot rice with a braised duck egg and blanched greens, menus in Japanese and English, and service running deep into the night.",
    tips: "Queues run long at meal peaks; off-hours or after 9 p.m. is easier.",
    mustOrder: ["Braised pork rice", "Braised duck egg", "Pork thick soup"],
  },
  "taipei-dingyuan-soy-milk": {
    name: "Ding Yuan Soy Milk",
    area: "Chiang Kai-shek Memorial Hall",
    blurb:
      "A traditional soy milk shop on Jinhua Street that opens at 5 a.m. and packs up before noon, making its shaobing, youtiao and steamed-to-order xiaolongbao in house. Coverage in Japanese guidebooks turned it into many visitors' first lesson in Taiwanese breakfast, so peak-hour queues are part of the routine.",
    tips: "Open 5–11:30 a.m.; busiest between 7:30 and 9:30.",
    mustOrder: ["Savory soy milk", "Shaobing with youtiao", "Xiaolongbao soup dumplings"],
  },
  "taipei-serenity-vegetarian": {
    name: "Serenity Vegetarian",
    area: "Shandao Temple",
    blurb:
      "A Sichuan-style vegetarian house on Zhenjiang Street, a Bib Gourmand pick for eight straight years since the Taipei guide's 2018 debut. It is famous for mock-meat craft — kung pao 'chicken' and three-cup lion's mane mushroom built entirely from plants, with chili heat that makes you forget the table is meatless.",
    tips: "Open for lunch and dinner sittings; book ahead for group meals.",
    mustOrder: ["Dry-pot cauliflower", "Basil crispy 'intestines'", "Three-cup lion's mane"],
  },

  // ---- Zhongzheng: Dongmen / Botanical Garden / Gongguan ----
  "taipei-huang-mama-rice-noodle": {
    name: "Huang Mama Rice Noodle Soup",
    area: "Dongmen Market",
    blurb:
      "A third-generation rice noodle soup stall in Dongmen Market's new hall, with broth simmered from black-pig bones and thin southern-style rice noodles. Braised intestines and the heibaiqie cut-to-order platter sell out every day; it once took second place among snack stalls at Taipei's market festival.",
    tips: "Market stall closes at 3 p.m., Mondays off; mornings have the fullest selection.",
    mustOrder: ["Thin rice noodle soup", "Braised intestines", "Heibaiqie platter"],
  },
  "taipei-jiangji-dongmen-tofu-pudding": {
    name: "Jiang Ji Dongmen Douhua",
    area: "Dongmen Market",
    blurb:
      "A douhua stall inside Dongmen Market open since 1976, selling silky tofu pudding and nothing else — the only topping on offer is peanuts. Syrup boiled from raw brown sugar poured over pillowy traditional douhua: simplicity taken to its limit, which is exactly why many call it Taipei's best.",
    tips: "Open mornings until 3 p.m.; closed Mondays and Thursdays.",
    mustOrder: ["Peanut douhua", "Ginger douhua"],
  },
  "taipei-linjia-ganmian": {
    name: "Lin Jia Dry Noodles",
    area: "Botanical Garden",
    blurb:
      "A Fuzhou dry noodle shop on Quanzhou Street since 1960: plain noodles tossed with lard and light soy sauce, scattered with scallions — so simple locals nicknamed it 'fool's noodles'. Paired with egg-wrapped fishball soup it has fed generations of Jianguo High students, and in 2025 it earned a Michelin Bib Gourmand.",
    tips: "Sells from dawn to 2 p.m., with a weekday evening shift; closed Mondays.",
    mustOrder: ["Fuzhou dry noodles", "Egg fishball soup"],
  },
  "taipei-lanjia-guabao": {
    name: "Lan Chia Guabao",
    area: "Gongguan",
    blurb:
      "Gongguan's guabao specialist, where the braised pork belly comes in five ratios from all-fat to all-lean, folded into a steamed bun with pickled mustard greens, peanut powder and cilantro in one practiced motion. Insiders add the loaded corn and pork-rib soup; a thousand-plus buns can go in a day.",
    tips: "Closed Mondays; first-timers should order the mixed (half fat, half lean).",
    mustOrder: ["Mixed guabao", "Corn pork rib soup"],
  },

  // ---- Wenshan: Jingmei / Muzha / Maokong / NCCU ----
  "taipei-jingmei-shengjianbao": {
    name: "Jingmei Shanghai Pan-Fried Buns",
    area: "Jingmei Night Market",
    blurb:
      "The veteran pan-fried bun stall at the mouth of Jingmei Night Market, selling just two fillings — fresh pork and cabbage — from four big pans working in rotation that still can't keep up. Bottoms crisp to a deep gold, the pork runs juicy, and the griddle smell reaches you one minute from MRT Jingmei station.",
    tips: "Runs morning and evening shifts; the noon-to-4 p.m. gap will leave you empty-handed.",
    mustOrder: ["Pork pan-fried bun", "Cabbage pan-fried bun"],
  },
  "taipei-achang-mianxian": {
    name: "A Chang Mian Xian & Stinky Tofu",
    area: "Jingmei Night Market",
    blurb:
      "An old Jingmei Night Market stall with a two-item menu: intestine mian xian — thin vermicelli in thickened broth — and deep-fried stinky tofu. Regulars order the vermicelli with braised quail eggs, and the stall runs to 11 p.m., filling up later and later with Shih Hsin University students on supper runs.",
    tips: "Opens in the evening; closed Mondays.",
    mustOrder: ["Quail egg intestine mian xian", "Fried stinky tofu"],
  },
  "taipei-wenshan-coffee": {
    name: "Wenshan Coffee",
    area: "Jingmei",
    blurb:
      "A house-roasting coffee shop that has served Jingmei for decades, its row of siphon pots lined along the bar the shop's defining image. The old-fashioned space sets no time limit — a siphon-brewed single origin and a slice of lemon-glazed pound cake anchor many a Wenshan district afternoon.",
    mustOrder: ["Siphon single origin", "Lemon glazed pound cake"],
  },
  "taipei-ruins-coffee": {
    name: "Ruins Coffee Roasters",
    area: "Muzha",
    blurb:
      "A roastery cafe on Muzha Road converted from a hardware-and-lumber warehouse idle for twenty years — the owner spent half a year rebuilding it by hand with reclaimed wood and won Taipei's Old House Regeneration award. Pour-over single origins with an ice cream brownie, no time limit in the industrial-ruin space.",
    tips: "Closed Mondays; minimum of one drink per person.",
    mustOrder: ["Pour-over single origin", "Ice cream brownie"],
  },
  "taipei-yaoyue-teahouse": {
    name: "Yaoyue Teahouse",
    area: "Maokong",
    blurb:
      "A veteran teahouse by a stream in the Maokong valley, open for over thirty years with tea seating that never closes. Order a pot of Wenshan baozhong with tea-oil chicken and handmade mini mantou, brew late into the night over the city lights — a shared rite of passage for NCCU students.",
    tips: "Tea seating runs 24 hours, meals have set hours; take the gondola then a bus up.",
    mustOrder: ["Wenshan baozhong tea", "Tea-oil chicken", "Handmade mini mantou"],
  },
  "taipei-cabin-waffle-nccu": {
    name: "Shinemood Waffles (NCCU)",
    area: "NCCU",
    blurb:
      "A made-to-order waffle stand by NCCU's front gate, with dozens of sweet and savory options pressed fresh on the spot. Prices from NT$45 made it the campus afternoon-tea landmark; the brand started in 2006 at NCTU in Hsinchu, and this branch is one of its most popular.",
    mustOrder: ["Fresh-baked waffle", "Fried chicken waffle"],
  },

  // ---- Dadaocheng: Yongle Market / Dihua Street ----
  "taipei-yongle-mitaimu": {
    name: "Yongle Mitaimu",
    area: "Yongle Market",
    blurb:
      "A mitaimu specialist beside Yongle Market for nearly sixty years, blanching its short indica-rice noodles to order — slippery with a gentle bite. The regulars' formula is a bowl of dry mitaimu tossed with minced pork sauce plus a plate of heibaiqie; the third generation still opens at dawn and closes at 3 p.m.",
    tips: "Sells from 7 a.m. to 3 p.m.; closes early once sold out.",
    mustOrder: ["Dry mitaimu", "Heibaiqie platter"],
  },
  "taipei-miaokou-sishen-soup": {
    name: "Miaokou Sishen Soup & Pork Buns",
    area: "Dihua Street",
    blurb:
      "A push-cart fixture under the bank arcade at Minsheng West Road and Dihua Street since 1973, with a two-item menu: steamed pork buns and sishen soup — a four-herb pork offal soup brewed to a deep, dark color, its small intestines prepped spotlessly clean. The buns often sell out by mid-afternoon.",
    tips: "Starts around noon and packs up when sold out; latecomers often miss it.",
    mustOrder: ["Steamed pork bun", "Sishen soup"],
  },
  "taipei-lee-ting-xiang-bakery": {
    name: "Lee Ting Xiang Bakery",
    area: "Dihua Street",
    blurb:
      "A Han pastry house founded in 1895 and now in its fifth generation, begun in Luzhou before settling on the north stretch of Dihua Street. The signature pingxi cake is hand-worked into thin flaky layers, peanut mochi cakes come shaped as auspicious money turtles, and the shop runs hands-on pastry workshops.",
    mustOrder: ["Pingxi cake", "Money turtle cake"],
  },
  "taipei-cofe-dihua": {
    name: "COFE",
    area: "Dihua Street",
    blurb:
      "A tea-and-coffee house hidden on the second floor of a century-old Dihua Street shophouse, founded by Ku Wei, a champion of Taiwan-grown ingredients. Oolong, tieguanyin and coffee are pressed into edible chocolate bars that took Asia-Pacific gold at the World Chocolate Awards; order tea and gaze over the old street's roof tiles.",
    tips: "Entrance at No. 248, Sec. 1, Dihua Street, upstairs from the inBlooom select shop.",
    mustOrder: ["Edible coffee bar", "Tea chocolate"],
  },

  // ---- Dadaocheng: Cisheng Temple / Guisui / Ganzhou / Taiping Market ----
  "taipei-yeh-family-pork-congee": {
    name: "Yeh Family Pork Congee",
    area: "Cisheng Temple",
    blurb:
      "A pork congee stall run by four generations on the plaza of Cisheng Temple, its broth clear and scented with scallion oil, every grain distinct. Order congee with fresh-fried hongshao pork and crispy squid and carry it to the tables under the old banyans — Dadaocheng's best-preserved old-Taipei brunch scene.",
    tips: "Sells from 9 a.m. until gone in the afternoon; seating is under the temple-plaza trees.",
    mustOrder: ["Pork congee", "Fried hongshao pork", "Fried squid"],
  },
  "taipei-a-gui-yi-pork-rib-soup": {
    name: "A Gui Yi Pork Rib Soup",
    area: "Cisheng Temple",
    blurb:
      "A pork rib soup stall serving the Cisheng Temple plaza for over half a century, and it makes just one thing: pork ribs and white radish simmered into a clean, naturally sweet broth, the meat slipping off the bone at a nudge. NT$90 a bowl with free soup refills; most carry theirs to the banyan shade.",
    tips: "Soup refills are free; closed Thursdays.",
    mustOrder: ["Pork rib soup"],
  },
  "taipei-yi-mian-wang": {
    name: "Yi Mian Wang",
    area: "Guisui Street",
    blurb:
      "A noodle house on Guisui Street running for more than eighty years, where springy yi mian egg noodles are tossed dry with the house sweet-chili sauce and paired with wonton soup — an old Dadaocheng meal in full. It doubles as an ice parlor with twenty-plus retro shaved ices, a combo picked for Taiwan's '500 Bowls'.",
    tips: "Closed Wednesdays; don't skip the shaved ice in summer.",
    mustOrder: ["Dry yi mian noodles", "Wonton soup", "Shaved ice"],
  },
  "taipei-jia-er-zui": {
    name: "Jia Er Zui",
    area: "Ganzhou Street",
    blurb:
      "A mitaimu specialist that began in 1954 as a stall under the banyan on Ganzhou Street and still keeps its seasonal rule: shaved ice only in summer, hot food once winter comes. The handmade rice noodles land soft and springy under a special slow-simmered syrup with fenguo and grass jelly — Dadaocheng's summer ritual.",
    tips: "Ice roughly April to October, hot food in winter; closed Mondays.",
    mustOrder: ["Mitaimu ice", "Tube rice cake"],
  },

  // ---- Chifeng Street ----
  "taipei-xiaoqi-shokudo": {
    name: "Xiaoqi Shokudo",
    area: "Chifeng Street",
    blurb:
      "A Japanese teishoku diner spun off from the tableware boutique Xiaoqi, at the Chifeng Street corner by Jiancheng Park. Kansai-style home cooking — grilled fish and hamburg steak set meals — arrives on the very Japanese ceramics sold in the shop, so if a plate catches your eye you can take the same one home.",
    tips: "No reservations; expect queues at peak hours.",
    mustOrder: ["Grilled fish set", "Hamburg steak set"],
  },
  "taipei-illumination-books": {
    name: "Illumination Books",
    area: "Chifeng Street",
    blurb:
      "An independent bookstore-cafe on the second floor of a seventy-year-old house in Chifeng Street's lanes, shelves leaning toward art, photography and humanist thought. Old windows light the wooden room, pour-overs come with no time limit, and with sister shop Chunqiu it anchors the street's literary side.",
    tips: "Entrance at 2F, No. 16, Lane 47, Chifeng Street — the facade is easy to miss.",
    mustOrder: ["Pour-over coffee"],
  },

  // ---- Shuanglian / Qingguang / Shuangcheng Street ----
  "taipei-a-chuan-oyster-noodle": {
    name: "A Chuan Oyster Vermicelli",
    area: "Shuanglian",
    blurb:
      "A vermicelli specialist beside the Shuanglian market that locals count among Taipei's big four mian xian shops. The oysters arrive plump from Dongshi in Chiayi, the broth is kept deliberately light — garlic paste, black vinegar and chili oil on the table complete it — and it only sells from morning to 5 p.m.",
    tips: "Open 7 a.m. to 5 p.m.; closed Sundays.",
    mustOrder: ["Mixed vermicelli", "Oyster vermicelli"],
  },
  "taipei-qingguang-red-bean-cake": {
    name: "Qingguang Red Bean Cake",
    area: "Qingguang Market",
    blurb:
      "A veteran wheel cake stall born in Qingguang Market that makes only three flavors: red bean, cream custard and shredded radish. The fresh-baked shells are thin and crisp, stuffed until the filling threatens the seams; the savory radish usually sells out first, and many Taipei natives had their first red bean cake here.",
    tips: "Radish is first to sell out; fresh batches mean a short wait.",
    mustOrder: ["Red bean cake", "Cream custard cake", "Shredded radish cake"],
  },
  "taipei-huang-ji-braised-pork-rice": {
    name: "Huang Chi Lu Rou Fan",
    area: "Qingguang Area",
    blurb:
      "A braised pork rice specialist in the Qingguang area for over thirty years and a Michelin Bib Gourmand pick year after year. The lu rou fan is sweet-savory and rich with gelatin, a slice of pickled cucumber cutting the fat; insiders add glossy braised pork knuckle, and locals share the room with Japanese and Korean visitors.",
    tips: "Closed Mondays and Thursdays; pick your own sides for a packed bento.",
    mustOrder: ["Braised pork rice", "Pork knuckle", "Braised napa cabbage"],
  },
  "taipei-a-tu-sesame-oil-chicken": {
    name: "A Tu Sesame Oil Chicken",
    area: "Qingguang Area",
    blurb:
      "A sesame oil chicken institution that started as a Qingguang roadside stall in 1974 — on winter nights the queue at the Linsen North Road flagship fills the arcade. The broth goes heavy on sesame oil and rice wine, aroma arriving before the bowl, and the crisp, cleanly prepped kidneys are a Taipei cold-season fixture.",
    tips: "Order and pay on the first floor, then head upstairs to sit; winter brings the biggest crowds.",
    mustOrder: ["Sesame oil chicken soup", "Dry pork kidney", "Sesame oil vermicelli"],
  },
  "taipei-a-fu-seafood-congee": {
    name: "A Fu Seafood Congee",
    area: "Shuangcheng Street Night Market",
    blurb:
      "A seafood congee stall at the mouth of Shuangcheng Street Night Market since 1983, selling from evening until 2 a.m. The congee is soupy-rice style with every grain distinct, loaded with baby squid, shrimp, oysters and pork liver — it once took first prize for snacks at Taipei's traditional market festival.",
    tips: "Open 5:30 p.m. to 2 a.m.; closed Sundays and Mondays.",
    mustOrder: ["Seafood congee", "Fried three delicacies", "Crispy oysters"],
  },

  // ---- Tiaotong / Zhongshan Station / Huayin Street ----
  "taipei-feiqianwu-unagi": {
    name: "Fei Qian Wu",
    area: "Tiaotong Area",
    blurb:
      "An unagi rice institution founded in 1970 by its Japanese founder; it went briefly dark when the owner retired the year before last, then reopened this March at the original 7th Alley address. The kabayaki eel comes lacquered and deeply seasoned with thick tamagoyaki alongside — a hundred tickets per session still isn't enough.",
    tips: "No reservations; one hundred numbered tickets each for lunch and dinner.",
    mustOrder: ["Kabayaki eel rice", "Tamagoyaki"],
  },
  "taipei-hamamatsuya-unagi": {
    name: "Hamamatsuya",
    area: "Tiaotong Area",
    blurb:
      "A live-eel specialist open since 1995, butchering and grilling each eel only after the order is placed, using Taiwanese eel of export-to-Japan grade. A onetime Bib Gourmand pick, it closed two years ago over the owner's health, and the original team has since reopened at the same 7th Alley address.",
    tips: "Eel is butchered to order, so meals take time — don't come rushed.",
    mustOrder: ["Kabayaki eel rice", "Shirayaki eel"],
  },
  "taipei-fuda-steamed-dumplings": {
    name: "Fu Da Steamed Dumplings",
    area: "Zhongshan Station",
    blurb:
      "A Shandong-style dumpling house at a lane corner off Zhongshan North Road, wrapping and steaming to order — the thin skins flood with juice at first bite, and hot and sour soup is the standard partner. The tiny shopfront is famous in Japanese travel circles, Japanese chatter fills meal times, and it made the 2025 '500 Bowls'.",
    tips: "Closed Mondays; queues at peak hours but tables turn quickly.",
    mustOrder: ["Steamed dumplings", "Hot & sour soup", "Chili oil wontons"],
  },
  "taipei-melange-cafe": {
    name: "Melange Cafe",
    area: "Zhongshan Station",
    blurb:
      "The Zhongshan station waffle house that opened in 1997 and set off a whole generation of Taipei's waffle afternoon-tea craze. The signature strawberry cream waffle arrives buried in fresh strawberries and whipped cream, and nearly thirty years on, the flagship's doorway queue is still a fixture.",
    tips: "Flagship in Lane 16, Sec. 2, Zhongshan N. Rd; weekend queues form before opening.",
    mustOrder: ["Strawberry cream waffle"],
  },
  "taipei-sanduo-house-sashimi": {
    name: "San Duo Wu Baba Zui",
    area: "Huayin Street",
    blurb:
      "A budget sashimi canteen at the Taiyuan Road corner behind Taipei Main Station, run by an owner whose day job is wholesaling Nanfang'ao catch — he has won the port's first-tuna auction more than once. Port-direct supply keeps the sashimi bowls lavish at diner prices, and the grilled fish and seafood ramen have their own fans.",
    tips: "Monthly days off are posted on the shop's Facebook page.",
    mustOrder: ["Sashimi rice bowl", "Salmon roe bowl", "Seafood ramen"],
  },

  // ---- Changchun Road ----
  "taipei-ji-jia-zhuang": {
    name: "Chi Chia Chuang",
    area: "Changchun Road",
    blurb:
      "A chicken-focused Taiwanese restaurant open since 1974 and a Michelin Bib Gourmand regular. The signature three-flavor chicken puts three preparations of the bird on one platter, the chicken rice is cooked in chicken broth with free refills, and Japanese travelers and Taipei families both count it as a banquet standby.",
    tips: "Book ahead for group dinners; the chicken rice is refillable.",
    mustOrder: ["Three-flavor chicken", "Chi Chia tofu", "Chicken roll"],
  },
  "taipei-jin-din-rou": {
    name: "Jin Din Rou",
    area: "Changchun Road",
    blurb:
      "A xiaolongbao restaurant founded by chef brothers who trained at Din Tai Fung, opening this Changchun Road flagship in 2002. The trademark oolong tea xiaolongbao folds tea fragrance into the filling under thin, soup-laden skins; success expanding into Japan made it a pilgrimage stop for Japanese visitors to Taipei.",
    tips: "Closed Mondays; the first-floor glass kitchen shows the masters wrapping.",
    mustOrder: ["Oolong tea xiaolongbao", "Crab roe xiaolongbao"],
  },

  // ---- Songjiang Nanjing / Yitong Park / Xingtian Temple ----
  "taipei-liang-ji-chicken-rice": {
    name: "Liang Ji Chiayi Chicken Rice",
    area: "Songjiang Nanjing",
    blurb:
      "The shop that carried Chiayi-style chicken rice to Taipei in 1975, queuing daily in its Songjiang-Nanjing lane for nearly fifty years. Chicken rice gets a pour of chicken fat and fried shallots — puncture the runny fried egg and stir it through, that's the house method; near five thousand reviews, yet it opens weekdays only.",
    tips: "Weekdays only, lunch and dinner sessions; dine-in requires ordering a set.",
    mustOrder: ["Chicken rice", "Runny fried egg"],
  },
  "taipei-fu-ba-wang-pork-knuckle": {
    name: "Fu Ba Wang Pork Knuckle",
    area: "Songjiang Nanjing",
    blurb:
      "A pork knuckle specialist in the Songjiang-Nanjing lanes where three cuts — knuckle, hock and trotter — are ordered separately, braised dark and glossy with springy skin and thick gelatin. Pair it with rice and braised cabbage; the signature knuckle sells out almost daily, and even NVIDIA's Jensen Huang has dropped by.",
    tips: "The knuckle cut sells out early, so come ahead of time; closed Sundays and Mondays.",
    mustOrder: ["Knuckle cut", "Hock joint", "Pork knuckle rice"],
  },
  "taipei-fika-fika-cafe": {
    name: "Fika Fika Cafe",
    area: "Yitong Park",
    blurb:
      "A house-roasting cafe facing Yitong Park, opened after founder James Chen won the 2013 Nordic Roaster competition. In the white, Nordic-minimal room, the flat white and light-roast pour-overs show the roastery's touch best, and the shop has been named among Asia's fifty best coffee houses.",
    mustOrder: ["Flat white", "Pour-over single origin"],
  },
  "taipei-xiao-liu-shokudo": {
    name: "Xiao Liu Shokudo",
    area: "Xingtian Temple",
    blurb:
      "A Japanese seafood diner near Xingtian Temple whose owner buys day-boat fish every morning, stacking kaisendon with seasonal sashimi, sea urchin and sweet shrimp. Dinner is omakase only with bookings taken over LINE; at lunch the a-la-carte session draws a line before the door even opens.",
    tips: "Dinner is no-menu omakase, LINE bookings only; queue in person for lunch. Closed Sundays.",
    mustOrder: ["Kaisendon", "Grilled fish", "Chawanmushi"],
  },

  // ---- Jinxi Street / Dalongdong / Taiping Market ----
  "taipei-a-guo-qie-zai-mian": {
    name: "A Kuo Noodles",
    area: "Jinxi Street",
    blurb:
      "A qiezai noodle shop going since 1992: blanched noodles in a clear pork-bone broth crowned with house-fried shallots, a Michelin Bib Gourmand for several straight years. Leases moved it several times before it settled at the Jinxi-Tianxiang corner — the regulars followed, wontons and fish balls still their standard add-ons.",
    tips: "Closed Tuesdays.",
    mustOrder: ["Qiezai noodles", "Wonton soup", "Fish ball soup"],
  },
  "taipei-xia-gang-ye-mutton": {
    name: "Xia Gang Ye Mutton",
    area: "Jinxi Street",
    blurb:
      "A mutton specialist of thirty-plus years at Minquan West and Tianxiang roads, its winter signature the mutton hotpot in a choice of red-braised or danggui herbal broth. Wok-seared mutton fried noodles and rice keep both floors full even at weekday lunch, and free refills of the danggui clear broth are an old house rule.",
    tips: "Hard to get a seat in peak winter; danggui clear broth refills are free.",
    mustOrder: ["Red-braised mutton pot", "Mutton fried noodles", "Mutton rice in gravy"],
  },
  "taipei-chongqing-soy-milk": {
    name: "Chongqing Soy Milk",
    area: "Dalongdong",
    blurb:
      "A traditional soy milk shop of more than fifty years beside the Dalongdong market. The signature deep-fried egg crepe is rolled from fresh dough and dropped into hot oil, crisp outside with a soft half-set egg within; locals add a cup of thick rice milk or an egg-stuffed rice roll, and by late morning it is all gone.",
    tips: "Opens 5:30 a.m., closes around 11:30; the egg crepe can add pickled radish or extra pepper.",
    mustOrder: ["Deep-fried egg crepe", "Rice roll with egg", "Rice milk"],
  },
  "taipei-a-jiao-hong-shao-rou": {
    name: "A Jiao Hongshao Pork",
    area: "Taiping Market",
    blurb:
      "A takeout-only stall in Taiping Market that locals call the strongest hongshao pork in Taipei — the sign also reads Liu Mei-li. The red-marinated, deep-fried pork comes in five or six cuts, fried and sliced to order; the rare 'xiao bu dian' cut vanishes early, and the whole operation wraps up around midday.",
    tips: "Takeout only; sells from 8 a.m. until gone — ad-hoc closures posted on Facebook.",
    mustOrder: ["Hongshao pork", "Xiao bu dian rare cut"],
  },
};
