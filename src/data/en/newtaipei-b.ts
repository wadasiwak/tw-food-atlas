// English pack for src/data/cities/newtaipei-b.ts — keyed by canonical id.
// Rules: see docs/EN_GUIDE.md. mustOrder must align index-by-index with zh.
// Area map: 淡水真理街=Tamsui Zhenli Street, 淡水老街=Tamsui Old Street,
// 淡水英專路=Tamsui Yingzhuan Road, 淡水油車口=Tamsui Youchekou,
// 淡水河岸=Tamsui Riverside, 九份老街=Jiufen Old Street,
// 金瓜石=Jinguashi, 金瓜石水湳洞=Jinguashi Shuinandong,
// 三峽老街=Sanxia Old Street, 鶯歌=Yingge, 鶯歌老街=Yingge Old Street,
// 深坑老街=Shenkeng Old Street, 深坑阿柔洋=Shenkeng Arouyang,
// 烏來老街=Wulai Old Street, 石碇老街=Shiding Old Street,
// 平溪老街=Pingxi Old Street, 菁桐老街=Jingtong Old Street,
// 十分老街=Shifen Old Street
import type { EnRestaurantText } from "../types";

export const en: Record<string, EnRestaurantText> = {
  // ---- Tamsui ----
  "newtaipei-laopai-agei": {
    name: "Laopai Agei",
    area: "Tamsui Zhenli Street",
    blurb:
      "The 1965 birthplace of agei — a fried tofu pouch stuffed with braised glass noodles, sealed with fish paste, sauced spicy or mild — invented by Yang Cheng Jin-wen. Six decades at the top of Zhenli Street, steamers puffing from 5 a.m., it's the breakfast memory of Tamkang High School students.",
    tips: "Sales start at 5 a.m. and end by 2 p.m.; often sold out by noon on weekends — go early.",
    mustOrder: ["Agei", "Fish ball soup"],
  },
  "newtaipei-xu-yi-fish-crisp": {
    name: "Xu Yi Fish Crisps",
    area: "Tamsui Old Street",
    blurb:
      "Tamsui's first fish ball shop, opened in 1950 under the Wei Xiang Fish Ball sign, frying fresh fish paste into airy, crunchy fish crisps at this one location only — no branches. Locals eat a bowl of fish ball soup with a pork bun, then carry out bags of crisps, the town's old-school edible gift.",
    tips: "Closed Wednesdays; the handmade fish crisps are limited — popular flavors often run out by late afternoon.",
    mustOrder: ["Fish crisps", "Fish ball soup", "Pork bun"],
  },
  "newtaipei-a-xiang-shrimp-roll": {
    name: "A-Xiang Shrimp Rolls",
    area: "Tamsui Old Street",
    blurb:
      "A fry-to-order stall near Fuyou Temple on Tamsui Old Street: wonton skins wrap shrimp paste, minced pork, and scallions, and nothing hits the oil until you order — three golden, shattering-crisp pieces to a skewer. Drizzled with the house sweet chili sauce, it's the fried snack to eat while wandering the old street.",
    mustOrder: ["Fresh-fried shrimp rolls"],
  },
  "newtaipei-jiukan-28": {
    name: "Tamsui Jiukan 28",
    area: "Tamsui Old Street",
    blurb:
      "A cafe in a near-century-old house on Chongjian Street: the ground floor is a bookstore and curio shop, while upstairs keeps the wooden roof and old furniture, like a Tamsui street house where time stopped. Order coffee and dessert, settle in slowly, and the view out the window is the tiled rooftops of Tamsui Old Street.",
    tips: "Hours are irregular — open only when the blue-and-yellow tiger flag hangs at the door; check their fan page first.",
    mustOrder: ["Pour-over coffee", "Dessert"],
  },
  "newtaipei-three-sisters-agei": {
    name: "Three Sisters Agei",
    area: "Tamsui Zhenli Street",
    blurb:
      "One of the big three agei houses on Zhenli Street, open since 1966 steps from Laopai Agei and the only one of the trio that also serves noodles. Fried tofu stuffed with braised glass noodles, sealed with fish paste, steamed, and dressed in house sauce — with fish ball soup, the after-school taste of Tamkang High School students.",
    tips: "Opens at 6 a.m. and often sells out by 2–3 p.m.; closed Wednesdays.",
    mustOrder: ["Agei", "Fish ball soup"],
  },
  "newtaipei-huwei-douhua": {
    name: "Tamsui Huwei Douhua",
    area: "Tamsui Yingzhuan Road",
    blurb:
      "A douhua (tofu pudding) shop in a lane off Yingzhuan Road for nearly fifty years, setting its curd with house-adapted sweet potato starch instead of gypsum and slow-simmering peanuts from Yilan's sandy soil. The signature four-topping bowl gathers everything, and it stays open to 11 p.m. — Tamsui's late-night sweet soup base.",
    tips: "Hidden in Lane 21 of Yingzhuan Road and easy to miss — turn into the lane from the night market street.",
    mustOrder: ["Four-topping douhua", "Peanut douhua"],
  },
  "newtaipei-a-po-iron-egg": {
    name: "A-Po Iron Eggs",
    area: "Tamsui Old Street",
    blurb:
      "The definitive shop for Tamsui iron eggs: founder Yang Bi-yun kept re-braising her noodle stall's eggs until they shrank dark and chewy, accidentally creating one of Tamsui's 'three treasures'. Slow-braised in soy and Chinese herbs, no preservatives; bite-size quail iron eggs are the favorite, vacuum-packed for gifting.",
    tips: "Knock-off iron eggs abound on the old street — look for the original shop at 135-1 Zhongzheng Road by the ferry pier.",
    mustOrder: ["Quail iron eggs", "Chicken iron eggs"],
  },
  "newtaipei-san-xie-cheng-bakery": {
    name: "San Xie Cheng Bakery",
    area: "Tamsui Old Street",
    blurb:
      "A Quanzhou-style bakery founded in 1935, named for three brothers working in concert; its winter melon pork pastry, sweet meeting savory, is the classic Tamsui wedding pastry. An in-house pastry museum, free to visit, serves the town's confectionery history alongside samples — a rare old-street bakery worth a slow browse.",
    tips: "The in-house pastry culture museum is free to visit; samples are common on weekends.",
    mustOrder: ["Winter melon pork pastry", "Sakura pastry"],
  },
  "newtaipei-hei-dian-pork-rib-rice": {
    name: "Hei Dian Pork Chop Rice",
    area: "Tamsui Youchekou",
    blurb:
      "A pork chop rice specialist at Youchekou since 1971, so dim early on that Tamkang students nicknamed it 'the black shop' — the owners eventually embraced Black Palace. The fried bone-in chop with pickled mustard greens and soy-cured melon keeps a 1950s–60s flavor; nearly thirty thousand reviews, and tables turn fast.",
    tips: "The original is at Youchekou; the Right Bank branch by the MRT station saves the trip. Avoid the noon rush for a seat.",
    mustOrder: ["Signature pork chop rice", "Braised platter"],
  },
  "newtaipei-ancre-cafe": {
    name: "Ancre Café",
    area: "Tamsui Riverside",
    blurb:
      "Push open an unassuming wooden door on Zhongzheng Road and climb a long stair to this upstairs cafe, named after the French for anchor — nautical decor and a full wall of river view make it feel like a yacht moored on the Tamsui River. The donut waffle with the sunset is the house pairing; dusk window seats go fastest.",
    tips: "No reservations, cash only, with a minimum charge and time limit — arrive early to claim a sunset seat.",
    mustOrder: ["Donut waffle", "Ice cream coffee"],
  },
  "newtaipei-between-teahouse": {
    name: "Between Teahouse",
    area: "Tamsui Riverside",
    blurb:
      "A tea-food space by a designer who came home, at the far western end of the old street, built around tea, food, and ware: local ingredients like pumpkin become vegetarian dishes cooked with tea, and it won Japan's Good Design Award in its opening year. Walk past where the crowds end to find it — a quiet pot and a proper meal.",
    tips: "Closed Tuesdays; lunch and dinner sessions on weekdays, open straight through on weekends.",
    mustOrder: ["Roast pumpkin rice", "Tea-yeast pizza"],
  },
  // ---- Jiufen / Jinguashi ----
  "newtaipei-a-gan-yi-taro-ball": {
    name: "A-Gan Yi Taro Balls",
    area: "Jiufen Old Street",
    blurb:
      "A taro ball institution beside Jiufen Elementary School atop the Shuqi Road stone steps, begun as a general store selling shaved ice. The taro balls are hand-rolled fresh daily with real bites of taro, and the dining area looks over Keelung Mountain and the bay — in winter, the hot taro ball soup is just as right.",
    tips: "It takes a climb up the Shuqi Road steps to get here; window seats in the dining area have the best view.",
    mustOrder: ["Mixed taro ball ice", "Hot taro ball soup"],
  },
  "newtaipei-lai-a-po-taro-ball": {
    name: "Lai A-Po Taro Balls",
    area: "Jiufen Old Street",
    blurb:
      "A fourth-generation taro ball shop on Jishan Street that goes beyond taro and sweet potato with purple yam and sesame balls — five colors to a generously topped bowl. The texture runs softer and chewier than Jiufen's other shops, and there are no stone steps: when the old street tires you out, just walk in and eat.",
    mustOrder: ["Five-color taro balls"],
  },
  "newtaipei-a-lan-mugwort-cake": {
    name: "A-Lan Mugwort Rice Cakes",
    area: "Jiufen Old Street",
    blurb:
      "A third-generation caozaiguo specialist on Jishan Street: mugwort rice-dough skins wrap fillings like dried radish, red bean, and salted mung bean, while the taro version comes studded with big chunks of taro. Steamed fresh and sold at NT$20 apiece, the queue rarely breaks — a boxed set is Jiufen's signature souvenir.",
    mustOrder: ["Mugwort rice cake", "Taro rice cake"],
  },
  "newtaipei-kuan-ge-about-coffee": {
    name: "Kuan Ge's About Coffee",
    area: "Jinguashi Shuinandong",
    blurb:
      "An old-house cafe beside the Golden Waterfall in Jinguashi, its wooden interior carrying a hint of a small Okinawan shop — yet the kitchen turns out pasta with noodles made fresh every day. The wet-style tiramisu is the signature dessert, and it's the natural landing spot after the Thirteen Levels ruins and the Yin-Yang Sea.",
    tips: "Open year-round, no reservations — walk-in waitlist only; weekdays offer more breathing room.",
    mustOrder: ["Tiramisu", "Handmade pasta"],
  },
  "newtaipei-zhang-ji-fish-ball": {
    name: "Zhang Ji Traditional Fish Balls",
    area: "Jiufen Old Street",
    blurb:
      "A Fuzhou-style fish ball shop on Jishan Street: the oversized fish balls hide a pork filling that spills juice when you bite in, and the silky fish geng (thick soup) offers a change of pace. The storefront is plain and easy to walk past, yet tour guides make it a fixed stop, and the little dining room is packed from midday on.",
    tips: "Seats are few and crowds surge from noon — mornings are the calm window.",
    mustOrder: ["Fuzhou fish balls", "Fish thick soup"],
  },
  "newtaipei-head-nurse-lu-wei": {
    name: "The Head Nurse's Lu Wei",
    area: "Jiufen Old Street",
    blurb:
      "A dry braised-snack shop run by a retired head nurse, simmering dried tofu and duck wings with honey and Chinese herbs for a sweet, lingering finish — Jiufen's only honey lu wei. Buy first, leave it at the shop, collect after walking the old street; the mixed pack covers the range, and many carry whole bags downhill.",
    tips: "Popular items often sell out by afternoon; the mixed pack is the better deal, with hold-and-collect service.",
    mustOrder: ["Honey braised snacks", "Braised duck wings"],
  },
  "newtaipei-a-mei-tea-house": {
    name: "A-Mei Tea House",
    area: "Jiufen Old Street",
    blurb:
      "The red-lantern teahouse on the Shuqi Road steps, once a blacksmith's forging tools for miners before turning to tea when the gold stopped — today the lead actor of Jiufen's postcard night view. Order high-mountain tea with tea snacks; seaward window seats have no time limit, and the lantern-lit evening is the classic.",
    tips: "No reservations, walk-in seating only; come early for a window seat — tea sessions have no time limit.",
    mustOrder: ["High-mountain tea", "Tea snacks"],
  },
  "newtaipei-shi-bu-yan": {
    name: "Shi Bu Yan",
    area: "Jinguashi",
    blurb:
      "An old-house eatery on Jinguang Road between Jiufen and Jinguashi: the signature overnight-dried threadfin is air-dried in house and pan-fried until fragrant with its own oils, and a bowl of mao fan ('cat rice') completes it. No reservations, cash only, weekend queues form before opening — locals wait here too.",
    tips: "Walk-in waitlist only and cash only; mountain-road parking is tough — the bus is the easier play.",
    mustOrder: ["Dried threadfin (yiyegan)", "Mao fan (cat rice)"],
  },
  // ---- Sanxia ----
  "newtaipei-fumeixuan-bakery": {
    name: "Fumeixuan Bakery",
    area: "Sanxia Old Street",
    blurb:
      "The birthplace of Sanxia's croissant horn: second-generation owner Luo Fu-qing baked buttery dough into a horn shape, and it became the whole town's calling card. Hidden in a market lane and selling just the one original flavor for decades, the shop perfumes the street with butter at oven time, when purchase limits kick in.",
    tips: "Closed Mondays; fresh-from-the-oven batches go fastest — come late and you may leave empty-handed.",
    mustOrder: ["Original croissant horn"],
  },
  "newtaipei-dong-dao-diner": {
    name: "Dong Dao Diner",
    area: "Sanxia Old Street",
    blurb:
      "A retro diner on Ren'ai Street beside Sanxia Old Street, its red brick walls, old cinema posters, and dressers recreating a Taiwanese living room of fifty years ago. The signature pork chop rice uses Sanxia black pork, marinated in black pepper and soy sauce and fried into a thick, plate-sized cutlet, with generous sides.",
    tips: "Closed Tuesdays; long queues at weekend mealtimes — easier to be seated away from high noon.",
    mustOrder: ["Old-style pork chop rice", "Sesame paste noodles"],
  },
  "newtaipei-sanxia-spring-water-douhua": {
    name: "Spring Water Handmade Douhua",
    area: "Sanxia Old Street",
    blurb:
      "A handmade douhua (tofu pudding) shop on Minsheng Street in Sanxia, made fresh daily from non-GMO soybeans and mountain spring water — dense, silky, and full of soy aroma. One flat price buys any two toppings, and it runs 9 a.m. to 10 p.m. year-round; finish the old street, cross an intersection, and sit down to a bowl.",
    mustOrder: ["Handmade douhua"],
  },
  "newtaipei-honaichuan-soy": {
    name: "Honaichuan Soy Works",
    area: "Sanxia Old Street",
    blurb:
      "A soy workshop by cultural group Gan Le inside the Hexi compound, a converted former clinic, insisting on Taiwan-grown soybeans for its fresh rich soy milk and nigari tofu. Tofu shaved ice and sesame soft serve turn soy into dessert; drink your soy milk, then carry a block of tofu home — Sanxia Old Street's new local flavor.",
    tips: "Closes by 6 p.m. on weekdays — don't leave dessert too late.",
    mustOrder: ["Rich soy milk", "Tofu shaved ice", "Sesame soft serve"],
  },
  // ---- Yingge ----
  "newtaipei-a-po-sushi": {
    name: "A-Po Sushi",
    area: "Yingge",
    blurb:
      "A Taiwanese-style sushi shop by Yingge Station running for over fifty years, grown from a hawker's cart into a 24-hour operation with boxed sushi at a flat NT$50. The oden is braised deep and the chawanmushi silky — a late-night canteen shared by students, ceramics-street tourists, and night-shift workers alike.",
    mustOrder: ["Assorted sushi", "Oden", "Chawanmushi"],
  },
  "newtaipei-chang-ying-bawan": {
    name: "Chang Ying Bawan",
    area: "Yingge",
    blurb:
      "A specialist on Xingzheng Road selling only bawan (Taiwanese meatballs), four-herb soup, and pearl barley soup since 1968 — the bawan skin springy, the pork filling dense and full. The local way is to top it with the house sauce and a spoonful of garlic paste; Yingge Station and the ceramics old street are minutes away.",
    tips: "Closed Tuesdays; often sells out in the afternoon and closes early.",
    mustOrder: ["Bawan (meatball)", "Four-herb soup"],
  },
  "newtaipei-ama-e-douhua": {
    name: "Ama E Douhua",
    area: "Yingge Old Street",
    blurb:
      "A little douhua (tofu pudding) shop on Jianshanpu Road in Yingge Old Street, making both yellow and black soybean versions fresh every day — just order from the owner and dig in. Open to evening on weekdays and from early morning on weekends, it's the simple, honest sweet stop when the ceramics street wears your legs out.",
    tips: "Open till around dusk on weekdays; starts selling in the early morning on weekends.",
    mustOrder: ["Black soybean douhua", "Yellow soybean douhua"],
  },
  "newtaipei-houdao-diner": {
    name: "Hou Dao Diner",
    area: "Yingge Old Street",
    blurb:
      "A pork chop rice hall on Yingge Old Street styled as a 1980s time capsule, with iron window grilles, vintage posters, and old school desks for furniture. The signature old-style pork chop is marinated through, fried crisp, and deeply savory; grab an order sheet, mark it, and hand it in — expect a wait at weekend mealtimes.",
    tips: "Closed Tuesdays; self-serve order sheets — on weekends, skip high noon for an easier seat.",
    mustOrder: ["Old-style pork chop rice", "Crispy chicken leg rice"],
  },
  "newtaipei-fugui-taoyuan": {
    name: "Fugui Taoyuan",
    area: "Yingge Old Street",
    blurb:
      "A pottery-gallery restaurant open since 1995: ceramics are shown and sold on the ground floor, meals served upstairs on the house's own tableware. Pork knuckle rice and beef short ribs are the regulars' pairing, and as a rare proper sit-down restaurant on the ceramics old street, it's where a real meal after browsing happens.",
    tips: "Closed Tuesdays; minimum charge plus 10% service fee — book ahead on weekends.",
    mustOrder: ["Pork knuckle rice", "Beef short ribs"],
  },
  // ---- Shenkeng ----
  "newtaipei-wang-shui-cheng-tofu": {
    name: "Wang Shui Cheng Tofu House",
    area: "Shenkeng Old Street",
    blurb:
      "A tofu-cooking institution begun as a stall at Shenkeng's temple plaza in 1956, braising mala and garlic stinky tofu and red-braised firm tofu until seasoned through yet never mushy. Successive presidents have visited; white-cut chicken with the intestine and duck blood is the standard Shenkeng family-table lineup.",
    tips: "Closed Wednesdays and cash only; weekend lunch seats are hard to come by.",
    mustOrder: ["Mala stinky tofu", "Intestine & duck blood", "White-cut chicken"],
  },
  "newtaipei-gu-zao-cuo-tofu": {
    name: "Gu Zao Cuo",
    area: "Shenkeng Old Street",
    blurb:
      "A tofu restaurant at the front of Shenkeng Old Street that sold its first pot of mala stinky tofu in the 1990s, with tofu made fresh daily and a broth simmered from Chinese herbs. Sample plates are cut at the door for passersby, weekday lunches still fill the room, and steamed and deep-fried each have their loyalists.",
    mustOrder: ["Mala duck blood stinky tofu", "Steamed stinky tofu"],
  },
  "newtaipei-da-tuan-yuan": {
    name: "Da Tuan Yuan",
    area: "Shenkeng Arouyang",
    blurb:
      "A scenic banquet restaurant at the foot of Shenkeng's Arouyang hills, open since 1990: the free-range white-cut chicken has crackly skin over sweet meat, and mala stinky tofu with wine-fermented lamb lands on every table. Minutes on foot from the old street buys a garden and mountain views — bring the family and order a spread.",
    tips: "Not on the old street itself — a few minutes' walk toward Arouyang gets you there.",
    mustOrder: ["White-cut free-range chicken", "Mala stinky tofu", "Wine-fermented lamb"],
  },
  "newtaipei-jin-da-ding-tofu": {
    name: "Jin Da Ding Grilled Tofu Skewers",
    area: "Shenkeng Old Street",
    blurb:
      "The Shenkeng Old Street stall that skewers stinky tofu and chargrills it until the skin chars lightly, then brushes on sauce and showers it with peanut powder and cilantro to eat one-handed. Cash only, takeaway to go — the easiest entry point among the old street's tofu dishes, with a weekend crowd always ringing the stall.",
    tips: "Cash only and mostly takeaway; expect a short queue on weekends.",
    mustOrder: ["Grilled stinky tofu skewer"],
  },
  // ---- Wulai ----
  "newtaipei-tayal-grandma": {
    name: "Tayal Grandma's Kitchen",
    area: "Wulai Old Street",
    blurb:
      "An Atayal home-style eatery on Wulai Old Street, mountain ingredients straight to the table: fried river fish and shrimp, stir-fried boar, makino bamboo shoots, pearl onions. The bamboo tube rice is split open fresh, all bamboo fragrance — add a cup of millet drink, and an indigenous meal fits right around a hot spring soak.",
    mustOrder: ["Bamboo tube rice", "Fried river fish & shrimp", "Stir-fried boar"],
  },
  "newtaipei-yage-boar-sausage": {
    name: "Yage Indigenous Boar Sausage",
    area: "Wulai Old Street",
    blurb:
      "A boar sausage stall on Wulai Old Street where the charcoal never rests: the sausage is rich without being greasy, its casing grilled to a char-crisp snap, best chased with a bite of raw garlic. Grilled chicken skewers offer a change of pace — this is the snack in everyone's hand on the way to the waterfall and the hot springs.",
    mustOrder: ["Boar sausage", "Grilled chicken skewer"],
  },
  "newtaipei-gao-jia-iced-egg": {
    name: "Gao Family Chilled Hot Spring Eggs",
    area: "Wulai Old Street",
    blurb:
      "The Wulai Old Street shop that invented the chilled hot spring egg: slow-cooked at low temperature, then iced in marinade until the yolk turns to a savory, silky paste — one egg leads straight to the next. Open daily since 2001; add purple rice eight-treasure congee and it's the fixed stop on any hot spring itinerary.",
    tips: "Open year-round; the chilled hot spring eggs come boxed for takeaway.",
    mustOrder: ["Chilled hot spring egg", "Purple rice congee"],
  },
  // ---- Shiding ----
  "newtaipei-meimei-eatery": {
    name: "Mei Mei Eatery",
    area: "Shiding Old Street",
    blurb:
      "A home-style restaurant on Shiding East Street running since 1991, where regulars lock in the white-cut capon and tofu served three ways. Tofu made with Shiding's famously good water is the star of the whole menu, and eating in an old house on the covered 'no-sky street' is the surest meal to be had in Shiding Old Street.",
    tips: "Closed Tuesdays; weekend lunches are busy — best to arrive early.",
    mustOrder: ["White-cut capon", "Tofu three ways"],
  },
  "newtaipei-wang-shi-tofu": {
    name: "Wang Shi Tofu",
    area: "Shiding Old Street",
    blurb:
      "A century-old tofu shop on Shiding Old Street now in its fifth generation, its tofu thick with soy fragrance thanks to the local water. The fresh-fried tofu is crisp outside and custardy inside — a shake of pepper salt is all it needs — while the tofu roll turns bean curd into a snack, bought and eaten right at the stall.",
    mustOrder: ["Fried tofu", "Tofu roll"],
  },
  // ---- Pingxi line ----
  "newtaipei-hong-gui-noodle": {
    name: "Hong Gui Noodles",
    area: "Pingxi Old Street",
    blurb:
      "A noodle shop on Pingxi Old Street closing in on sixty years: the shacha dry noodles are straightforwardly fragrant, the mitaimu (short rice noodles) slide down smooth, and cut side dishes complete a mountain-town meal. Seats are few, the menu short — a hot bowl before or after your sky lantern is Pingxi at its most everyday.",
    mustOrder: ["Shacha dry noodles", "Mitaimu rice noodles"],
  },
  "newtaipei-yang-jia-chicken-roll": {
    name: "Yang Family Jijuan",
    area: "Jingtong Old Street",
    blurb:
      "A weekends-only stall on Jingtong Old Street frying jijuan — bean curd skin rolled around a taro and pork filling — to order, the shell shattering-crisp over a soft, taro-scented core. With a bowl of braised pork rice it makes a railside lunch, and the Saturday–Sunday-only hours send plenty of people up the mountain on purpose.",
    tips: "Open Saturdays and Sundays only — come on a weekday and you'll miss it.",
    mustOrder: ["Taro jijuan roll", "Braised pork rice"],
  },
  "newtaipei-rong-shu-xia-rice-noodle": {
    name: "Under the Banyan Rice Noodle Soup",
    area: "Shifen Old Street",
    blurb:
      "A century-old rice noodle stall on Shifen Old Street, its big pot of broth rolling with thick rice noodles while pork skin, fried tofu, and other blanched cuts fill the table. It sits by the old banyan right beside the tracks — a hot bowl before your sky lantern rises is Shifen's most flavorful slice of everyday life.",
    tips: "Closed Tuesdays; closes early once sold out.",
    mustOrder: ["Rice noodle soup", "Pork skin", "Fried tofu"],
  },
};
