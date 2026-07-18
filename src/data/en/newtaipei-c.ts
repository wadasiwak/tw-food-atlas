// English pack for src/data/cities/newtaipei-c.ts — keyed by canonical id.
// Rules: see docs/EN_GUIDE.md. mustOrder must align index-by-index with zh.
// Area map: 蘆洲廟口=Luzhou Temple Area, 五股成泰路=Wugu Chengtai Road,
// 觀音山旗竿湖=Guanyinshan Qigan Lake, 泰山明志路=Taishan Mingzhi Road,
// 土城頂埔=Tucheng Dingpu, 土城清水=Tucheng Qingshui, 樹林後站=Shulin Rear Station,
// 樹林夜市=Shulin Night Market, 八里渡船頭老街=Bali Ferry Pier Old Street,
// 汐止老街=Xizhi Old Street, 林口老街=Linkou Old Street, 瑞芳美食街=Ruifang Food Street,
// 瑞芳老街=Ruifang Old Street, 金山老街=Jinshan Old Street, 萬里加投=Wanli Jiatou
import type { EnRestaurantText } from "../types";

export const en: Record<string, EnRestaurantText> = {
  "newtaipei-tian-ding-noodle": {
    name: "Tian Ding Qiezai Noodles",
    area: "Luzhou Temple Area",
    blurb:
      "A thirty-plus-year shop near Luzhou's Yonglian Temple for qiezai noodles — blanched oil noodles in clear pork broth. Refills are free and come with an extra spoon of fried shallots; over thirty heibaiqie cuts fill the case, pork cheek with garlic soy paste is the regulars' pick — top three in New Taipei's heibaiqie contest.",
    tips: "Closed Sundays; heibaiqie choices are vast, but popular cuts sell out if you come late.",
    mustOrder: ["Qiezai noodles", "Pork cheek", "Heibaiqie side dishes"],
  },
  "newtaipei-da-miao-kou-noodle": {
    name: "Da Miao Kou Qiezai Noodles",
    area: "Luzhou Temple Area",
    blurb:
      "One of the founding names of Luzhou qiezai noodles, begun as a stall before Yonglian Temple in 1931 and now in its fourth generation. Noodles are blanched in a bamboo strainer and flipped into a neat pudding-shaped mound in milky pork bone broth with house-fried shallots; the home-brewed chili bean paste lifts the fried tofu.",
    tips: "Sells from 6 a.m. to 3:30 p.m.; come early for the full heibaiqie spread.",
    mustOrder: ["Qiezai noodles", "Shengchang (pork offal)", "Fried tofu"],
  },
  "newtaipei-zong-zan-scallion-pancake": {
    name: "Zong Zan Handmade Scallion Pancake",
    area: "Luzhou Temple Area",
    blurb:
      "A made-to-order scallion pancake stand beside Yonglian Temple: dough is rolled to order, brushed with lard, packed with a fistful of scallions, then shallow-fried golden and crisp — recommended by the 2025 '500 Bowls' street food survey. The queue forms the moment it opens at 4:30 p.m., original and spicy camps equally loyal.",
    tips: "Opens 16:30; queues often run past half an hour, with a three-per-person cap.",
    mustOrder: ["Loaded scallion pancake"],
  },
  "newtaipei-long-feng-tang-bakery": {
    name: "Long Feng Tang Bakery",
    area: "Luzhou Temple Area",
    blurb:
      "A Luzhou Chinese-pastry house open since 1957, founded by a baker who trained in Tamsui; engagement cakes, temple offerings, and New Year malao puffs are still handmade. Its black bean paste egg yolk pastry took the classic-category crown at the 2025 New Taipei Egg Yolk Pastry Festival — a perennial gift-box favorite.",
    mustOrder: ["Black bean egg yolk pastry", "Handmade malao puffs"],
  },
  "newtaipei-wugu-salty-congee": {
    name: "Wu Gu Savory Congee",
    area: "Wugu Chengtai Road",
    blurb:
      "A savory congee specialist in Wugu since 1971: a cabbage-based broth carries oysters, shredded pork, bamboo shoots, and shiitake, with the rice cooked soft but never mushy. All six fried items — chicken rolls, pork loin, and more — are fried to order, and 6 a.m.–10:30 p.m. hours cover local breakfasts and midnight snacks alike.",
    mustOrder: ["Savory congee", "Fried pork loin", "Fried tofu"],
  },
  "newtaipei-qigan-lake-farm": {
    name: "Qigan Lake Farm",
    area: "Guanyinshan Qigan Lake",
    blurb:
      "A family-style restaurant under Guanyinshan run jointly by local bamboo-shoot farmers. During the May–September green bamboo season, shoots are dug and cooked the same day — chilled shoot salad, bamboo chicken soup, and poached free-range chicken make the signature spread. Shoot-digging and eco trails suit family outings.",
    tips: "Closed Mondays in season, Mondays and Tuesdays off-season; lunch hours get crowded.",
    mustOrder: ["Chilled bamboo shoot salad", "Poached free-range chicken", "Bamboo shoot chicken soup"],
  },
  "newtaipei-quan-xing-mee-sua": {
    name: "Quan Xing Oyster Vermicelli",
    area: "Taishan Mingzhi Road",
    blurb:
      "A crowd-pulling vermicelli shop on Taishan's Mingzhi Road where the braised intestine, fresh oysters, and pork all sink to the bottom of the bowl — only a dig with the spoon shows how loaded it is. The thickening is light, the broth faintly sweet, garlic, vinegar, and chili are self-serve, and locals fill the seats at 3 p.m.",
    tips: "Takeout peaks require a numbered ticket; closed Mondays and odd-numbered Sundays.",
    mustOrder: ["Mixed vermicelli", "Pork thick soup"],
  },
  "newtaipei-taishan-stone-corn": {
    name: "Taishan Charcoal Stone Corn",
    area: "Taishan Mingzhi Road",
    blurb:
      "A Taishan roadside stand that grew into a shopfront: waxy corn is first smothered tender over hot stones, brushed with sauce, then returned to the charcoal for a smoky char, chew and sauce building layer upon layer. Voted the district's number-one snack by local netizens, it grills from 1 p.m. to 10:30 p.m.",
    mustOrder: ["Charcoal waxy corn"],
  },
  "newtaipei-qingqing-restaurant": {
    name: "Qing Qing Restaurant",
    area: "Tucheng Dingpu",
    blurb:
      "A Tucheng banquet institution since 1977 whose head chef, 'A-Fa Shih', was the culinary consultant on the film 'Eat Drink Man Woman'; state-banquet classics have passed to the third generation. The vast garden grounds can seat over a hundred tables — Tucheng weddings, feasts, and New Year spreads all seem to run through here.",
    tips: "About five minutes' walk from MRT Yongning Station; book banquet tables in advance.",
    mustOrder: ["Buddha Jumps Over the Wall", "Sakura shrimp sticky rice"],
  },
  "newtaipei-qingshui-bridge-noodle": {
    name: "Qingshui Qiaotou Noodles",
    area: "Tucheng Qingshui",
    blurb:
      "A fifty-plus-year noodle shop beside Qingshui Market that once didn't even hang a sign, filling up almost as soon as it opens past 7 a.m. Regulars order the 'full set' dry noodles — pork thick soup, braised egg, and pork ball all added — the wagui comes blanketed in preserved radish, and southern and northern zongzi both sold.",
    tips: "Closed Tuesdays; mornings have the fullest selection.",
    mustOrder: ["'Full set' dry noodles", "Clear pork thick soup", "Wagui (bowl rice cake)"],
  },
  "newtaipei-a-cheng-goose": {
    name: "A-Cheng Goose (Tucheng Original)",
    area: "Tucheng Qingshui",
    blurb:
      "The 1990 founding flagship of the A-Cheng goose empire: six-kilogram Yunlin geese are served two ways, poached or smoked, and the Taipei branches have made the Michelin Bib Gourmand year after year. The two-story shop runs on numbered tickets and an electronic call board — an old standby for Tucheng group dinners.",
    mustOrder: ["Poached goose", "Smoked goose"],
  },
  "newtaipei-shulin-black-meatball": {
    name: "Shulin Black Bawan",
    area: "Shulin Rear Station",
    blurb:
      "A steamed bawan shop by Shulin Station's rear exit, named for the house-made black soy paste poured over each one; the pork filling is cut with diced bamboo shoots and shredded carrot for sweetness and crunch. The menu is three items — bawan, pork ball soup, pork blood soup — at a flat NT$35, an easy grab for commuters.",
    mustOrder: ["Steamed black bawan", "Pork blood soup"],
  },
  "newtaipei-shulin-red-mee-sua": {
    name: "Shulin Red Vermicelli",
    area: "Shulin Night Market",
    blurb:
      "An old-guard stall on Shulin Night Market's Bao'an Street: handmade red vermicelli in pork bone stock, the intestine cleaned properly and braised soft yet chewy. The daikon in the tianbula fish cakes stews out remarkably sweet, hours run 3 p.m. to 11 p.m., and celebrities keep returning to this pocket-list shop.",
    mustOrder: ["Intestine red vermicelli", "Tianbula (fish cakes)"],
  },
  "newtaipei-she-jia-mussel-king": {
    name: "She Family Mussel King",
    area: "Bali Ferry Pier Old Street",
    blurb:
      "The 1981 stir-fry house that made green mussels synonymous with Bali: wok-blasted over high heat with basil in a savory, faintly spicy sauce, it is the first name people think of stepping off the ferry. Beyond the signature mussels it also does set menus and homestyle stir-fries, built for a group to share.",
    mustOrder: ["Basil stir-fried mussels", "Fried golden fish"],
  },
  "newtaipei-sisters-twin-donut": {
    name: "Sisters Twin Donuts",
    area: "Bali Ferry Pier Old Street",
    blurb:
      "A fried-snack stand founded by sisters and now run by three second-generation sisters, its weekend queue often wrapping to the temple plaza next door. The signature taro biscuit sandwiches silky taro paste between two soda crackers before deep-frying — still good cooled, and the most carried-home flavor on Bali's old street.",
    mustOrder: ["Twin donut (shuangbaotai)", "Fried taro biscuit"],
  },
  "newtaipei-jinfeng-glass-noodle": {
    name: "Jin Feng Eight-Treasure Glass Noodles",
    area: "Xizhi Old Street",
    blurb:
      "An old stand in the market arcade on Xizhi's Zhongzheng Road since 1976: eight-treasure glass noodles pack shrimp, squid, pork geng, lily buds, wood ear, and more into one bowl of clean, sweet pork bone broth. You mark your own slip and grab a seat, tables turn fast, and it sells morning to late night — Xizhi's most famous bowl.",
    tips: "Closed Tuesdays; seats in the market arcade are few — off-peak visits are easier.",
    mustOrder: ["Eight-treasure glass noodles", "Mushroom pork thick soup"],
  },
  "newtaipei-liao-red-turtle-cake": {
    name: "Liao Family Red Tortoise Kueh",
    area: "Xizhi Old Street",
    blurb:
      "A century-old kueh stand facing Jide Temple, Xizhi's Mazu temple: red tortoise kueh, steamed prosperity cakes, and mochi in red bean, peanut, and sesame are all handmade fresh, with extra batches before festivals. Summer adds shaved ice, grass jelly, and mitaimu noodles; it sells from 8 a.m. and packs up soon after noon.",
    tips: "Sells until about 1 p.m., closed Mondays; large orders can be reserved.",
    mustOrder: ["Handmade mochi", "Red tortoise kueh"],
  },
  "newtaipei-xizhi-alley-rice-noodle": {
    name: "Alleyway Rice Noodle Soup",
    area: "Xizhi Old Street",
    blurb:
      "A signless old stand in an alley by Xizhi's Zhongzheng Market: a NT$30 bowl of rice noodle soup with heibaiqie sides that haven't raised prices in years. The golden, crackling red-marinated fried pork is the reason for the queue, and it works the morning market only, 7 a.m. to 1 p.m. — come late and it is simply gone.",
    tips: "Closed Mondays and Tuesdays; the fried pork often sells out before noon.",
    mustOrder: ["Rice noodle soup", "Red-marinated fried pork"],
  },
  "newtaipei-qingguang-eatery": {
    name: "Qingguang Eatery",
    area: "Linkou Old Street",
    blurb:
      "A Linkou Old Street eatery open since 1984: strips of lean pork in a bonito-forward thick soup, best alongside a bowl of braised pork rice — the everyday Linkou lunch. The decor and weathered signboard are straight out of the seventies and eighties, it runs from noon to night without a break, and dishes land fast.",
    mustOrder: ["Pork thick soup", "Braised pork rice"],
  },
  "newtaipei-long-wonton-cold-noodle": {
    name: "Long Chaoshou Cold Noodles",
    area: "Linkou Old Street",
    blurb:
      "A cold noodle specialist on Linkou Old Street with seven flavors to choose from; the local standard is mala cold noodles plus a miso soup with pork balls and egg. Handmade dumplings and chili oil chaoshou wontons carry equal weight, and though mealtime lines reach the door, the tables turn quickly.",
    tips: "Closed Wednesdays; the noon rush queues, so takeout is faster.",
    mustOrder: ["Mala cold noodles", "Chili oil wontons", "Miso pork ball soup"],
  },
  "newtaipei-lao-zhan-yuan-ramen": {
    name: "Lao Zhan Yuan Noodle King",
    area: "Linkou Old Street",
    blurb:
      "A clear-broth noodle house beside Zhulin Shan Guanyin Temple: the soup simmers heaps of daikon and vegetables into something limpid yet full-bodied, ladled over thick chunks of beef shank. There is almost always a line but it moves fast — a bowl after paying respects at the temple is the fixed Linkou circuit.",
    tips: "Breaks 3:00–3:30 p.m., closed Sundays; skip high noon for a shorter line.",
    mustOrder: ["Beef la mian (clear broth)", "Lamb la mian"],
  },
  "newtaipei-a-xia-longfengtui": {
    name: "A-Xia Longfengtui",
    area: "Ruifang Food Street",
    blurb:
      "A stand in front of Ruifang's food court for over sixty years selling longfengtui — a Ruifang-particular snack of fish paste, pork, and cabbage wrapped in caul fat and fried to order. At NT$13 a piece locals buy them by the dozen, and it packs up around 2:30 p.m. once the day's batch sells out.",
    tips: "Morning until about 2:30 p.m., closed Mondays; afternoon visits often miss out.",
    mustOrder: ["Longfengtui (fried roll)", "Sticky rice sausage"],
  },
  "newtaipei-bao-yun-taro-ball": {
    name: "Bao Yun Taro Balls",
    area: "Ruifang Old Street",
    blurb:
      "Founded in 1946 and regarded as the wellspring of Taiwanese taro balls — the Jiufen taro ball story actually begins at this little wooden shop behind Ruifang Station. The taro balls keep real chunks of taro in the bite, winter brings hot grass jelly and peanut soup, and braised daikon is a savory sidekick rarely seen elsewhere.",
    tips: "Right at Ruifang Station's rear exit — pair the stop with Ruifang Old Street.",
    mustOrder: ["Taro ball grass jelly ice", "Braised daikon"],
  },
  "newtaipei-jinbaoli-duck": {
    name: "Jinbaoli Duck",
    area: "Jinshan Old Street",
    blurb:
      "A Jinshan institution that grew from a temple-front noodle stall in 1958: free-range duck is poached and chopped to order, juicy even without sauce. The spectacle is the self-service ritual — pick dishes at the kitchen by Guang'an Temple, carry your plates through the old street back to your seat, and pay by the plate count.",
    tips: "Queues from opening on weekends; grab seats first, then fetch dishes from the temple-front kitchen.",
    mustOrder: ["Poached duck", "Temple fried noodles", "Stir-fried squid"],
  },
  "newtaipei-zhi-wei-xiang-corn": {
    name: "Zhi Wei Xiang Grilled Corn",
    area: "Wanli Jiatou",
    blurb:
      "A tin-shack corn stand on Provincial Highway 2, one of the north coast's most famous queues: waxy corn is smothered on scorching black stones for two hours to lock in sweetness, then charcoal-grilled by hand and brushed with bird's-eye chili sauce. Sold by weight, often over NT$100 an ear, people still wait half an hour.",
    tips: "Expect queues on weekdays and weekends alike; insiders phone in an order and just pick up.",
    mustOrder: ["Charcoal waxy corn"],
  },
};
