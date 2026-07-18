// English pack for src/data/cities/newtaipei-a.ts — keyed by canonical id.
// Rules: see docs/EN_GUIDE.md. mustOrder must align index-by-index with zh.
// Area map: 板橋=Banqiao, 湳雅夜市=Nanya Night Market, 三重=Sanchong,
// 三和夜市=Sanhe Night Market, 新莊=Xinzhuang, 永和=Yonghe,
// 樂華夜市=Lehua Night Market, 中和=Zhonghe, 新店=Xindian, 府中=Fuzhong,
// 黃石市場=Huangshi Market, 江子翠=Jiangzicui, 三重國小商圈=Sanchong Elementary School Area,
// 菜寮=Cailiao, 重陽路=Chongyang Road, 新莊廟街=Xinzhuang Temple Street,
// 竹林路=Zhulin Road, 民治市場=Minzhi Market, 華新街=Huaxin Street,
// 興南夜市=Xingnan Night Market, 七張=Qizhang, 碧潭=Bitan
import type { EnRestaurantText } from "../types";

export const en: Record<string, EnRestaurantText> = {
  "newtaipei-ukuko-oyster-noodle": {
    name: "Youkukou Oyster Vermicelli",
    area: "Banqiao",
    blurb:
      "A vermicelli specialist that opened in 1986 by the gate of the CPC oil depot — hence the name. Handmade mian xian comes loaded with same-day oysters and braised pork intestine, finished with house-fried shallots, and locals always add a charcoal-grilled sausage: the noodles-plus-sausage combo was popularized right here.",
    tips: "Open 9:30–19:00; queues at lunch and afternoon peaks — add a charcoal-grilled sausage to your bowl.",
    mustOrder: ["Oyster intestine vermicelli", "Charcoal-grilled sausage"],
  },
  "newtaipei-gao-ji-fried-squid": {
    name: "Gao Ji Stir-fried Squid",
    area: "Banqiao",
    blurb:
      "A two-generation stall inside Huangshi Market: thick-cut squid is blanched until springy, then bathed in a sweet-and-sour thickened soup with cabbage. Add fried radish cake and taro cake for the three-in-one combo — a satisfying market lunch for under NT$100 and a long-running Banqiao habit.",
    tips: "Open 8:00–17:30, closed Mondays; the insider order is the three-in-one of squid plus fried snacks.",
    mustOrder: ["Stir-fried squid", "Fried radish cake", "Taro cake (yu guo qiao)"],
  },
  "newtaipei-wang-ji-sesame-oil-chicken": {
    name: "Wang Ji Sesame Oil Chicken",
    area: "Nanya Night Market",
    blurb:
      "The most famous sesame oil chicken stall in Nanya Night Market, heavy on sesame oil and old ginger, with a big drumstick simmered until the meat slides off the bone. Soup refills are free — pour some over a bowl of dry vermicelli, the standard winter-night and late-night routine for Banqiao locals.",
    tips: "Opens 17:30; drumsticks usually appear after 6 p.m., so come early for legs. Soup refills are free.",
    mustOrder: ["Sesame oil chicken leg", "Dry vermicelli"],
  },
  "newtaipei-merci-vielle": {
    name: "Merci Vielle",
    area: "Banqiao",
    blurb:
      "An old-house cafe hidden up a dark alley beside Huangshi Market, its wooden doors, iron window grilles, and frosted glass all decades-old originals, the beans roasted in-house. The signature red bean Danish toast layers Tokachi red beans with mochi, and with only about five tables it stays strangely quiet for a market-side spot.",
    tips: "Opens at 1 p.m.; about five tables, no reservations. Entrance is in the alley by Cihui Temple — head upstairs.",
    mustOrder: ["Red bean Danish toast", "Pour-over coffee"],
  },
  "newtaipei-xiao-pan-cake": {
    name: "Xiao Pan Bakery",
    area: "Banqiao",
    blurb:
      "Synonymous with Banqiao souvenirs: the signature phoenix pastry tucks salted egg yolk into pineapple filling under a soft, cake-like crust, selling upwards of ten thousand pieces a day. Queues form even on weekdays and stretch to the alley mouth before Mid-Autumn; regulars ask for the unboxed loose pastries.",
    tips: "The shop sits in a narrow lane with tricky parking; queues explode around Mid-Autumn — call before you go.",
    mustOrder: ["Phoenix pastry (egg yolk)", "Pineapple cake"],
  },
  "newtaipei-jin-da-braised-pork-rice": {
    name: "Jin Da Braised Pork Rice",
    area: "Sanchong",
    blurb:
      "A benchmark of Sanchong's braised-pork-rice battleground: fatty-leaning pork melts over hot rice, and the soups are built on old-hen and pork bone stock. The founder once cooked at the famed Qingye restaurant and brought that technique to a bowl costing pocket change — earning the shop a Michelin guide listing.",
    tips: "Opens 6:30 a.m., closed Thursdays, cash only; queues run most of the day, so go off-peak.",
    mustOrder: ["Braised pork rice", "Braised cabbage", "Mushroom chicken soup"],
  },
  "newtaipei-wan-li-meatball": {
    name: "Wan Li Bawan",
    area: "Sanhe Night Market",
    blurb:
      "A fifty-year bawan stall at the mouth of Sanhe Night Market with two items: bawan — Taiwanese meatballs — and pork ball soup. The low-temperature oil-poached skin comes out soft with a chewy bite, wrapping chunky pork and crisp bamboo shoots; soup refills are free. A recent renovation brightened it; the flavor is unchanged.",
    tips: "Opens at 11 a.m., earlier than the night market; regulars just say 'one set' — bawan plus pork ball soup.",
    mustOrder: ["Bawan (Taiwanese meatball)", "Pork ball soup"],
  },
  "newtaipei-a-rui-guan-kueh": {
    name: "A Rui Guan Kueh",
    area: "Xinzhuang",
    blurb:
      "A handmade kueh shop on Xinzhuang's temple street since 1869, now in its fifth generation and named after the founding matriarch known as A-Rui-Guan. The signature taro kueh is packed dense with shredded taro, while mugwort kueh and red tortoise kueh are made fresh daily at this century-old rice-cake institution.",
    tips: "Open 8:00–17:00, closed Mondays; the taro kueh often sells out by afternoon.",
    mustOrder: ["Taro kueh (yu guo qiao)", "Mugwort kueh", "Red tortoise kueh"],
  },
  "newtaipei-lao-shun-xiang-bakery": {
    name: "Lao Shun Xiang Bakery",
    area: "Xinzhuang",
    blurb:
      "A temple-street bakery founded in 1870 whose gold-medal pineapple cake has a crust so thin it is nearly all filling — often called one of Taiwan's most senior pineapple cakes. Most of the salty guang bing biscuits for Xinzhuang's annual Dazhongye festival come from here, tens of thousands rushed out in a single run.",
    tips: "Pineapple cakes sold by the piece; orders explode around the Dazhongye festival — call ahead.",
    mustOrder: ["Gold medal pineapple cake", "Guang bing (salty biscuit)"],
  },
  "newtaipei-world-soy-milk-king": {
    name: "World Soy Milk King",
    area: "Yonghe",
    blurb:
      "A soy milk institution that began as a cart by Zhongzheng Bridge in 1955 and helped carry the 'Yonghe soy milk' name across Taiwan. Hot soy milk with a smoky charcoal edge pairs with shaobing and youtiao rolled to order, and the doors never close — people cross the bridge for it at dawn and deep in the night.",
    tips: "Open 24 hours; separate lines for dine-in and takeout, seats are few, and even late hours draw a crowd.",
    mustOrder: ["Charcoal soy milk", "Shaobing with youtiao", "Xiaolongbao"],
  },
  "newtaipei-a-guo-shrimp-thick-soup": {
    name: "A Guo Shrimp Thick Soup",
    area: "Lehua Night Market",
    blurb:
      "A thick-soup stall that has stood in Lehua Night Market since 1965: handmade shrimp geng on a bonito broth, lightly thickened, with big bouncy shrimp. Pork and mackerel versions all cost pocket change, and after dinner the queue often spills toward the road — a shared night-market memory for Yonghe locals.",
    tips: "Opens 16:30, closed Mondays; order the mixed thick soup to try all three toppings at once.",
    mustOrder: ["Shrimp thick soup", "Mixed thick soup", "Fried rice noodles"],
  },
  "newtaipei-kengai-coffea": {
    name: "Kengai Coffea",
    area: "Zhonghe",
    blurb:
      "A roastery-cafe by Zhonghe's No. 4 Park, named after Kyoichi Tsuzuki's book on editing outside the mainstream. In the two-story old house, second-floor seats on raw-concrete steps face a wall of windows; beans are roasted and sold in-house, and pour-overs with a house cinnamon roll are a specialist setup rare in the area.",
    tips: "No time limit on weekdays, 100 minutes on weekends; power outlets and Wi-Fi available.",
    mustOrder: ["Pour-over single origin", "Mochi cinnamon roll"],
  },
  "newtaipei-dian-cheng-yunnan": {
    name: "Dian Cheng Yunnan Cuisine",
    area: "Zhonghe",
    blurb:
      "A Yunnanese eatery of thirty-plus years on Huaxin Street — Zhonghe's 'Burmese Street' — run by a Yunnanese-Chinese owner from Lashio, Myanmar. Baba si rice noodles, pea tofu, and pea porridge cover the Yunnan home-cooking repertoire, and the cold noodles tossed in house sauce are tangy and appetizing, all for pocket change.",
    tips: "Closed Thursdays; most Huaxin Street shops pack up by afternoon, so come in the morning or at lunch.",
    mustOrder: ["Yunnan cold noodles", "Baba si rice noodles", "Pea tofu (wandou fen)"],
  },
  "newtaipei-bei-ya-duck-soup": {
    name: "Bei Ya Duck Thick Soup",
    area: "Xindian",
    blurb:
      "A duck thick-soup specialist on Xindian's Guangming Street for over twenty years: thin-sliced mule duck is stir-fried with onion and bamboo shoots, then simmered into a clean, sweet soup. The duck rice with duck fat and shallots sells just as fast; a 2026 Bib Gourmand pick and a favorite of badminton gold medalist Wang Chi-lin.",
    tips: "Open 11:00–20:30, closed Wednesdays; add noodles or rice to the soup — locals get a duck rice too.",
    mustOrder: ["Duck thick soup", "Duck rice"],
  },
  "newtaipei-qiao-tou-oyster-noodle": {
    name: "Sanchong Qiaotou Oyster Vermicelli",
    area: "Xindian",
    blurb:
      "A thirty-year vermicelli stand on Xindian's Guangming Street carrying the old Sanchong Qiaotou name, selling only plain vermicelli with oyster, intestine, or mixed toppings. It opens at 5 a.m., laces the bowl with wood ear and bamboo shoots under a lightly sweet, gently thickened broth, and often sells out by mid-afternoon.",
    tips: "Opens 5 a.m., closed Sundays; it often sells out early, so mornings are safest — table basil is free.",
    mustOrder: ["Mixed vermicelli", "Intestine vermicelli"],
  },
  "newtaipei-oyster-house": {
    name: "Oyster House",
    area: "Nanya Night Market",
    blurb:
      "A rare oyster-only stall in Nanya Night Market, covering oyster omelets, oyster dumplings, fritters, and oyster dry noodles in one stop, famed for plump oysters. Unusually for a night-market stand it has two floors of seating and runs until 1 a.m. — Banqiao's late-night stop, as popular as the sesame oil chicken stall.",
    tips: "Open until 1 a.m.; two floors of seating — go off-peak to skip the line.",
    mustOrder: ["Oyster omelet", "Oyster dumplings", "Oyster dry noodles"],
  },
  "newtaipei-banqiao-xiaolongbao": {
    name: "Banqiao Xiaolongbao",
    area: "Nanya Night Market",
    blurb:
      "A queue magnet at the mouth of Nanya Night Market claiming five thousand xiaolongbao sold a day — thick-skinned, soup-gushing, eight to a steamer, eaten hot with ginger shreds. The other half of the signboard is stinky tofu fried cracker-crisp; the dumpling-and-tofu pairing is its own genre here, and it runs to midnight.",
    tips: "Open from about 4 p.m. until midnight; the buns gush soup — bite a small hole first to let it cool.",
    mustOrder: ["Soup-filled xiaolongbao", "Golden stinky tofu"],
  },
  "newtaipei-huai-nian-pork-rib-soup": {
    name: "Huai Nian Pork Rib Soup",
    area: "Nanya Night Market",
    blurb:
      "A Nanya Night Market stalwart going since 1974 with a two-item menu: crispy pork rib soup and sticky rice. Fresh pork ribs are marinated, fried, then simmered until they collapse, in a broth sweet with winter melon and warm with pepper and herbs. The local order is one of each as a set, from evening until the small hours.",
    tips: "Open 5 p.m.–1 a.m.; 'a set' means rib soup plus sticky rice, and dry fried ribs travel well as takeout.",
    mustOrder: ["Crispy pork rib soup", "Sticky rice (you fan)"],
  },
  "newtaipei-lin-yuan-big-meatball": {
    name: "Lin Yuan Big Bawan",
    area: "Fuzhong",
    blurb:
      "A Fuzhong bawan specialist since 1981 with no menu at all — just big bawan and milkfish ball soup. Each steamed-then-fried bawan wraps a whole piece of marinated pork with bamboo shoots, shiitake, and a quail egg, a filling almost unseen elsewhere in Taiwan, and it makes an easy stop after touring the Lin Family Garden.",
    tips: "Near MRT Fuzhong Station — chain it with the Lin Family Garden and Cihui Temple.",
    mustOrder: ["Big bawan meatball", "Milkfish ball soup"],
  },
  "newtaipei-lao-cao-wonton": {
    name: "Lao Cao Wonton",
    area: "Huangshi Market",
    blurb:
      "A wonton institution beside Huangshi Market for over sixty years: fillings use Kavalan black pork from Yilan, the broth is simmered from black-pork leg bones and spine, and wontons are wrapped fresh daily with thin, springy skins. Doors open at 6 a.m., serving from market breakfast straight through the lunch and dinner shifts.",
    tips: "Opens 6 a.m.; the insider order is wonton soup plus sesame paste noodles, and market hours get busy.",
    mustOrder: ["Wonton soup", "Sesame paste noodles"],
  },
  "newtaipei-xie-jia-pork-geng": {
    name: "Xie Family Pork Thick Soup",
    area: "Huangshi Market",
    blurb:
      "A pork geng and sticky rice stand under the Huangshi Market arcade for over fifty years: hand-cut pork is dusted in sweet potato starch for the light, clear-style thick soup particular to Banqiao, and the amber sticky rice stays distinct grain by grain. It also supplies baby-celebration sticky rice for local families.",
    tips: "Open 8:00–14:00 or until sold out; the lunch peak means queues — go early.",
    mustOrder: ["Pork thick soup", "Old-style sticky rice"],
  },
  "newtaipei-tai-he-soy-milk": {
    name: "Tai He Soy Milk",
    area: "Jiangzicui",
    blurb:
      "A forty-year soy milk shop on Jiangzicui's Minzhi Street whose 'invincible ocean view' mantou egg piles scallion omelet, cheese, pork chop, and fresh-fried youtiao into a brown sugar twist bun almost too tall to bite. Demand forced a purchase cap — five per person on weekdays — from the 5 a.m. open until noon.",
    tips: "Open 5:00–12:00; the mantou egg is capped at five on weekdays, three on weekends — latecomers miss out.",
    mustOrder: ["Ocean-view mantou egg", "Savory rice ball"],
  },
  "newtaipei-tian-tian-douhua": {
    name: "Tian Tian Douhua",
    area: "Jiangzicui",
    blurb:
      "A Jiangzicui tofu pudding shop since 1960, its handmade douhua silky and deeply soy-fragrant, with four bases: syrup, syrup slush, soy milk, or mung bean soup. Most of the dozen-plus toppings are homemade — hand-washed aiyu and fenguo in summer, hot grass jelly and peanut soup in winter — and regulars haul home family-size tubs.",
    tips: "Aiyu and fenguo in summer, hot grass jelly and peanut soup in winter; tubs of douhua available to go.",
    mustOrder: ["Douhua with slush syrup", "Hand-washed aiyu jelly"],
  },
  "newtaipei-yang-jia-wheel-cake": {
    name: "Yang Family Wheel Cakes",
    area: "Jiangzicui",
    blurb:
      "A signless wheel-cake cart of roughly fifty years tucked in a lane off Wenhua Road by the New Taipei Arts Center, making exactly two flavors: red bean and custard. The red bean filling uses Wandan beans from Pingtung, kept low-sweet with whole grains intact, on a traditional soft crust; regulars buy ten or twenty at a time.",
    tips: "Red bean and custard only; a second griddle window opens when the line gets long.",
    mustOrder: ["Red bean wheel cake", "Custard wheel cake"],
  },
  "newtaipei-a-wen-wonton-tangyuan": {
    name: "A Wen Wonton & Tangyuan",
    area: "Sanhe Night Market",
    blurb:
      "A stall perfuming Sanhe Night Market for sixty years, famous for wontons and savory tangyuan — glutinous rice balls — sharing one bowl over clear pork-bone broth. Wontons are wrapped fresh daily, thin-skinned and well filled; the pork tangyuan bite chewy, not mochi-soft, warming Sanchong stomachs from evening to late night.",
    tips: "About 17:30–23:00, closed Tuesdays; fresh pork tangyuan can be taken home frozen or shipped.",
    mustOrder: ["Wonton & tangyuan soup", "Pork tangyuan"],
  },
  "newtaipei-ming-hong-oyster-soup": {
    name: "Ming Hong Oyster Soup",
    area: "Sanhe Night Market",
    blurb:
      "An oyster-only stall in Sanhe Night Market since 1972: plump oysters get a thin starch coat and a quick blanch, served with fried shallots, scallion, and house sauce. The soup is barely seasoned so the oyster's own sweetness leads, with moist rice noodles under braised-pork sauce as the supporting act, afternoon to late night.",
    tips: "Open from mid-afternoon until late night; dip the dry oysters in sauce and add the pork rice noodles.",
    mustOrder: ["Blanched oysters", "Oyster soup", "Braised pork rice noodles"],
  },
  "newtaipei-ke-si-hai-oyster-omelette": {
    name: "Ke Si Hai Oyster Omelet",
    area: "Sanhe Night Market",
    blurb:
      "An oyster omelet veteran on Sanhe Night Market's Changyuan Street: the crepe is griddled soft and chewy, the sauce runs salty-sweet, and the oyster portions are so generous food writers warn against taking them on lightly. The side oyster soup is just as plump and fresh — a fixture of the market's side streets, 4 to 9:30 p.m.",
    tips: "Open 16:00–21:30, closed Wednesdays; portions are big — smaller eaters can split one.",
    mustOrder: ["Egg oyster omelet", "Oyster soup"],
  },
  "newtaipei-wu-deng-jiang-pork-knuckle": {
    name: "Wu Deng Jiang Pork Knuckle Rice",
    area: "Sanchong Elementary School Area",
    blurb:
      "A Sanchong pork knuckle landmark that grew from a 1981 market cart, named for the owner's daughter winning five straight rounds on the TV show 'Wu Deng Jiang'. Knuckles braise to springy skin and tender, collagen-rich meat; Korean star chef Paik Jong-won filmed here, and a 2025 revamp added a Yongkang Street branch in Taipei.",
    tips: "The Ziqiang Road flagship was renovated in 2025 with ordering kiosks; a second shop is on Zhengyi N. Rd.",
    mustOrder: ["Pork knuckle rice", "Pork hock rice", "Braised pork rice"],
  },
  "newtaipei-dian-xiao-er-braised-pork": {
    name: "Dian Xiao Er Braised Pork Rice",
    area: "Cailiao",
    blurb:
      "A rising star among Sanchong's braised pork rice shops, earning its first Michelin Bib Gourmand in 2025. Skin-on pork is braised glossy-dark until the collagen leaves your lips sticky, and the other signature pot is a garlicky shrimp thick soup; locals add raw garlic and chili soy sauce, all served from a bright open kitchen.",
    tips: "Open until 21:30; the local way is skin-on pork rice with raw garlic and chili soy sauce.",
    mustOrder: ["Skin-on braised pork rice", "Shrimp thick soup"],
  },
  "newtaipei-lian-wu-braised-pork-rice": {
    name: "Lian Wu Braised Pork Rice",
    area: "Chongyang Road",
    blurb:
      "Open since 1975 and named for the owner's nickname, it ranks among Sanchong's five great braised pork rice houses alongside Jin Da and Wu Deng Jiang. Pickled mustard greens and bamboo shoots top the rice for a light, clean profile — a deliberate break from the rich-and-oily school — with braised tofu and cabbage as fixtures.",
    tips: "Hidden in a lane off Chongyang Road Section 2; the NT$135 set covers all the signatures at once.",
    mustOrder: ["Pickle & bamboo pork rice", "Braised tofu"],
  },
  "newtaipei-weng-yu-mei-maltose": {
    name: "Weng Yu Mei Maltose",
    area: "Xinzhuang Temple Street",
    blurb:
      "A maltose house on Xinzhuang Temple Street since 1901 — Xinzhuang was once Taiwan's biggest maltose producer, and this is the last shop standing. Sugar is still boiled the old way from malt and glutinous rice without cane sugar or preservatives, work starting at 4 a.m.; syrups sell by grade as the street's century-old souvenir.",
    tips: "Open 8:30–17:30, Saturday mornings only, closed Sundays; maltose comes in pickable grades.",
    mustOrder: ["Maltose", "Malt syrup (shui yi)"],
  },
  "newtaipei-ciyou-popiah": {
    name: "Xinzhuang Temple Street Popiah",
    area: "Xinzhuang Temple Street",
    blurb:
      "A signless popiah stand in front of Ciyou Temple for over thirty years, selling one thing only from 4 p.m. until sold out. Fresh-fried egg crisp is the soul, rolled with cabbage, red-yeast pork, dried tofu bits, and peanut powder so the wrap stays crisp, never soggy; the queue runs daily and Jolin Tsai has name-checked it on TV.",
    tips: "Opens 4 p.m., closes when sold out; under the arcade right in front of Ciyou Temple — look for the line.",
    mustOrder: ["Egg crisp popiah roll"],
  },
  "newtaipei-miaojie-salty-tangyuan": {
    name: "Old-Style Savory Tangyuan",
    area: "Xinzhuang Temple Street",
    blurb:
      "A handmade tangyuan shop on Xinzhuang Temple Street for six decades: the glutinous rice balls are wrapped and boiled to order, pinched slightly triangular as the handmade signature, gushing juice when bitten. The house tiger-skin shrimp roll — fish paste and shrimp flattened in beancurd skin and fried — exists nowhere else.",
    tips: "Cooked to order, allow 6–7 minutes; raw tangyuan can be taken home to boil yourself.",
    mustOrder: ["Handmade savory tangyuan", "Tiger-skin shrimp roll"],
  },
  "newtaipei-jia-wei-xian-sesame-chicken": {
    name: "Jia Wei Xian Sesame Oil Chicken",
    area: "Lehua Night Market",
    blurb:
      "A sesame oil chicken stalwart guarding the Yonghe Road end of Lehua Night Market, its broth aromatic without the burn and the pork hock stewed soft but never dry. Old-timers soak vermicelli in the chicken soup, service runs to 2 a.m., and a self-order kiosk, rare for a stall, anchors this Zhonghe-Yonghe late-night landmark.",
    tips: "Open until 2 a.m., closed Tuesdays; soaking the vermicelli in the chicken soup is the regulars' move.",
    mustOrder: ["Sesame oil chicken leg soup", "Pork hock rice", "Sesame oil vermicelli"],
  },
  "newtaipei-xia-gang-migao-rib-soup": {
    name: "Xia Gang Migao & Pork Rib Soup",
    area: "Lehua Night Market",
    blurb:
      "A queue-forming stall on Lehua Night Market's Baoping Road side: crispy pork ribs simmer with winter melon in a peppery broth, and the melon soaking up the broth is what people remember. The standard order pairs tube migao — sticky rice with house sauce and fish floss — with a bowl of soup; two shifts daily, tables turn fast.",
    tips: "Two shifts, 11:00–14:00 and 17:00–20:30; check the shop's own notices for days off.",
    mustOrder: ["Crispy pork rib soup", "Tube migao (sticky rice)"],
  },
  "newtaipei-a-ba-taro-ball": {
    name: "A-Ba no Taro Balls",
    area: "Lehua Night Market",
    blurb:
      "A handmade taro ball stand in Lehua Night Market that won a Bib Gourmand in 2025 — Michelin's first year covering New Taipei — and held it in 2026. The signature stacks house-made taro balls and honeyed red beans over sugarcane shaved ice; inspectors praised the deep taro aroma and layered textures. Open afternoon to late night.",
    tips: "Open 15:30–23:00; the signature is the taro paste sugarcane ice, and night-market hours mean queues.",
    mustOrder: ["Taro paste sugarcane ice", "Mixed taro ball ice"],
  },
  "newtaipei-yong-xin-soy-milk": {
    name: "Yong Xin Soy Milk",
    area: "Zhulin Road",
    blurb:
      "A Yonghe breakfast shop since 1982 hidden in a lane off Zhulin Road, ranked first when media scored the district's soy milk shops — above the tourist-famous bridgehead shops. Soy milk is ground in-house from non-GMO beans, the pepper bun with cheese and egg is the signature combo, and popular items sell out before noon.",
    tips: "Opens 5 a.m. and runs only until around noon; pepper buns, shaobing, and egg crepes take add-ons freely.",
    mustOrder: ["Pepper bun cheese egg", "Savory soy milk with egg"],
  },
  "newtaipei-yonghe-jiaxiang-soy-milk": {
    name: "Yonghe Jia Xiang Soy Milk",
    area: "Minzhi Market",
    blurb:
      "A handmade soy milk shop by Minzhi Market that shot into the Michelin Bib Gourmand as 2025's dark horse and stayed on the 2026 list. Everything is made in-house, from soy milk and shaobing to egg-crepe skins and soup dumplings; inspectors singled out the well-fermented pepper scallion bun with its golden, faintly sweet crust.",
    tips: "Queues from the 6 a.m. open, done by around 11, closed Wednesdays; sweet pastries go in the first hour.",
    mustOrder: ["Pepper scallion egg bun", "Xiaolong soup dumplings"],
  },
  "newtaipei-li-yuan-halal-roti": {
    name: "786 Li Yuan Halal Eatery",
    area: "Huaxin Street",
    blurb:
      "A halal stalwart at the head of Huaxin Street run by a Yunnanese Muslim family from Myanmar. The signature butter naan is made to order — slapped into the oven, baked until puffed, then slathered with butter. Paired with Indian milk tea or mashed peas it is the Burmese Street daily ritual, and a common first stop for newcomers.",
    tips: "Open early morning to afternoon, closed Thursdays; naan with Indian milk tea is the standard combo.",
    mustOrder: ["Butter naan", "Pea naan", "Indian milk tea"],
  },
  "newtaipei-yuan-bao-milk-tea": {
    name: "Yuan Bao Milk Tea",
    area: "Huaxin Street",
    blurb:
      "One of the busiest Burmese milk tea houses on Huaxin Street, pouring from 6:30 a.m. as Burmese-Chinese regulars settle in to talk over tea — the best window into the street's teahouse social culture. The tea is pulled-tea style, thick and sweet, while made-to-order onion chicken roti and Hong Kong French toast cover both flanks.",
    tips: "Open 6:30 a.m. to 3 p.m.; the roti is made to order, so expect a short wait.",
    mustOrder: ["Burmese milk tea", "Chicken roti", "French toast"],
  },
  "newtaipei-huang-jia-mian-xian": {
    name: "Huang Family Oyster Vermicelli",
    area: "Xingnan Night Market",
    blurb:
      "Serving Xingnan Night Market's back lanes since 1991: the broth is simmered from bonito, the vermicelli runs thick and slippery, and intestine and fresh oysters come in generous measure. The set move is a plate of fresh-fried crispy stinky tofu alongside, and air-conditioned seating makes it an outlier among night-market stalls.",
    tips: "In Lane 410 of Jingxin Street, with air-conditioned seats; vermicelli plus crispy stinky tofu is the set.",
    mustOrder: ["Intestine oyster vermicelli", "Crispy stinky tofu"],
  },
  "newtaipei-nanshijiao-duck-head": {
    name: "Nanshijiao Dongshan Duck Head",
    area: "Xingnan Night Market",
    blurb:
      "The braised duck head stand guarding Xingnan Night Market's entrance, drawing some of the longest lines in the market. Duck heads, wings, and dried tofu are braised then deep-fried — salty-sweet, crackling, more restrained in sugar than the Tainan school — a flavor Zhonghe kids grew up on, selling from evening market hours.",
    tips: "Opens with the evening market; everything is braised, fried, and snipped to order — expect a line.",
    mustOrder: ["Dongshan braised duck head", "Duck wings", "Braised fried tofu"],
  },
  "newtaipei-superman-seabass-soup": {
    name: "Superman Sea Bass Soup",
    area: "Qizhang",
    blurb:
      "A sea bass soup specialist founded beside Cardinal Tien Hospital in 1997 — no wine, no oil, no MSG, just vegetables, fruit, fish bones, and kombu simmered three to four hours. Now in a roomy Beixin Road shopfront under the second generation, a Bib Gourmand pick since 2025; wood-fired maltose pork knuckle is the other signature.",
    tips: "Lunch seats vanish fast — arrive at opening; choose head, middle, or tail cuts for the fish soup.",
    mustOrder: ["Original sea bass soup", "Malt pork knuckle"],
  },
  "newtaipei-qizhang-rice-noodle-soup": {
    name: "Qizhang Rice Noodle Soup",
    area: "Qizhang",
    blurb:
      "A thick rice noodle institution in Xindian's Qizhang, its side cabinet stacked with dozens of heibaiqie choices — tri-color egg, pork gums, red-marinated fried pork. The noodles soak up the pork bone broth and soup refills are free, with hours from 10:30 a.m. to 3 a.m. feeding Xindian's night owls and taxi drivers.",
    tips: "Open until 3 a.m.; pick your own heibaiqie sides from the cabinet — the mixed omelet is huge.",
    mustOrder: ["Thick rice noodle soup", "Heibaiqie side dishes", "Mixed seafood omelet"],
  },
  "newtaipei-bitan-goose": {
    name: "Bitan Qiaotou Goose",
    area: "Bitan",
    blurb:
      "A goose specialist perfuming the Bitan area for over thirty years, focused on smoked goose that arrives already deboned and precisely knifed, newly added to the 2026 Michelin Bib Gourmand list. It serves weekday lunch only and often sells out soon after 1 p.m.; insiders add goose-fat rice and goose intestine soup.",
    tips: "Weekdays 11:00–15:00 only, closed weekends, often sells out early; now at Beixin Road Section 1.",
    mustOrder: ["Smoked goose", "Goose fat rice", "Goose intestine soup"],
  },
};
