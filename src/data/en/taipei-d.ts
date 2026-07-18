// English pack for src/data/cities/taipei-d.ts — keyed by canonical id.
// Rules: see docs/EN_GUIDE.md. mustOrder must align index-by-index with zh.
import type { EnRestaurantText } from "../types";

export const en: Record<string, EnRestaurantText> = {
  // ---------- Da'an (Tonghua / Linjiang Street Night Market) ----------
  "taipei-red-flower-salted-chicken": {
    name: "Red Flower Mala Salted Chicken",
    area: "Linjiang Street Night Market",
    blurb:
      "A salted-chicken stall trading in Linjiang Street Night Market for over thirty years: pick chicken and some forty vegetables and braised bites into a basket, with saltiness adjustable to order. Grown from a pushcart into a shopfront, it draws a queue before opening — regulars take an extra portion of the smoked chicken.",
    tips: "Order ahead on LINE to skip the queue; open till midnight, made for late-night runs.",
    mustOrder: ["Salted chicken leg", "Smoked chicken", "Mala tianbula"],
  },
  "taipei-yakou-stinky-tofu": {
    name: "Yakou Tian Xiang Stinky Tofu",
    area: "Linjiang Street Night Market",
    blurb:
      "A stinky tofu shop of twenty-plus years at the Keelung Road end of the Tonghua night market — successor to Tian Xiang, a 2019 Bib Gourmand pick, which moved next door and rehung its sign as Yakou. Twin fryers keep the oil temperature exact so the crust blisters; the mala duck blood combination is the order everyone fights for.",
    tips: "Open until 1 a.m. — seats come easier late at night.",
    mustOrder: ["Crispy fried stinky tofu", "Mala duck blood stinky tofu"],
  },
  "taipei-liang-ji-luwei": {
    name: "Liang Ji Luwei",
    area: "Linjiang Street Night Market",
    blurb:
      "A Cantonese-style cold luwei stall selling since 1965, one of the longest-standing vendors in Linjiang Street Night Market. Duck wings braise through to a sweet finish, crisp intestines and dried tofu are sliced and sauced to eat from NT$10 — a former Bib Gourmand pick that gathers a crowd before the stall even opens.",
    tips: "Best right when the stall opens in the early evening; closed Tuesdays.",
    mustOrder: ["Duck wings", "Crisp duck intestines", "Cold dressed dried tofu"],
  },
  "taipei-tonghua-meatball": {
    name: "Tonghua Bawan",
    area: "Tonghua Street",
    blurb:
      "A three-generation bawan (Taiwanese meatball) shop in Lane 39, half a century old: the oil-poached wrapper stays soft with a chew around a filling of pork leg and bamboo shoots. It sells from morning to evening, was introduced by CNN as a face of Taiwanese street food, and keeps its space cleaner than most night-market stalls.",
    mustOrder: ["Bawan meatball", "Intestine & squid vermicelli", "Taro oil kueh"],
  },
  // ---------- Da'an (Liuzhangli) ----------
  "taipei-mingyue-tangbao": {
    name: "Ming Yue Soup Dumplings",
    area: "Liuzhangli",
    blurb:
      "A soup dumpling specialist founded in 2001 at the Keelung Road corner, rolled and wrapped to order — eight thin-skinned pieces a steamer, the broth hot enough to 'open a window' first. The golden-bottomed crispy potstickers share top billing, and this Japanese-guidebook regular seats tourists and local families half and half.",
    tips: "Closed Mondays, with an afternoon break between lunch and dinner.",
    mustOrder: ["Signature soup dumplings", "Crispy potstickers", "Pot-steamed chicken soup"],
  },
  "taipei-zhanji-spicy-hotpot": {
    name: "Zhan Ji Spicy Hot Pot (Dunnan)",
    area: "Liuzhangli",
    blurb:
      "The Dunnan branch of Zhan Ji, the famed Taiwanese-style mala hotpot, at the bottom of Dunhua South Road by the Heping East Road corner, retro-Taiwan decor and neon a look of its own. Duck blood and tofu soak up the broth and can be refilled, the intestine head braises soft and sticky, and tables stay notoriously hard to book.",
    tips: "Reservations are brutally hard at peak times — grab a slot the moment booking opens.",
    mustOrder: ["Mala duck blood", "Mala tofu", "Pork intestine head"],
  },
  // ---------- Da'an (Yongkang / Dongmen / Qingtian / Jinhua) ----------
  "taipei-smoothie-house": {
    name: "Smoothie House",
    area: "Yongkang Street",
    blurb:
      "The mango ice specialist at the mouth of Yongkang Street, piling snow ice high with fresh mango and house mango sorbet — once on CNN's Taiwan dessert list. In mango season the upstairs dining room fills with Japanese and Korean tourists; come winter, strawberry snow ice takes over and the queue still spills onto the street.",
    mustOrder: ["Super mango sorbet snow ice", "Strawberry snow ice"],
  },
  "taipei-hao-kung-tao-golden-chicken": {
    name: "Hao Kung Tao Chin Chi Yuan",
    area: "Yongkang Street",
    blurb:
      "A Jiangsu-Zhejiang dim sum house open since 1973 — the xiaolongbao old-timer in Yongkang locals' hearts, at roughly half the price of the tourist names. The fried tofu vermicelli soup is the house bowl, the extra-flaky scallion cake bakes up in shattering layers, and it has held a Michelin Bib Gourmand for years running.",
    tips: "Closed Wednesdays; off-peak hours rarely need a queue.",
    mustOrder: ["Xiaolongbao", "Fried tofu vermicelli soup", "Extra-flaky scallion cake"],
  },
  "taipei-xiulan-restaurant": {
    name: "Xiulan Restaurant",
    area: "Dongmen",
    blurb:
      "A Jiangsu-Zhejiang restaurant open since 1980, tucked into the lanes beside Dongmen station and a Michelin Plate pick year after year. The lion's head meatball stews until it falls apart at a chopstick's touch, the shallot roast ribs and radish beef are rice-demanding slow dishes, and weekday lunch fills a full seating.",
    tips: "Seats are few — book ahead for any group dinner.",
    mustOrder: ["Lion's head with cabbage", "Braised beef with radish", "Shallot roast pork ribs"],
  },
  "taipei-qingtian-76": {
    name: "Qingtian 76",
    area: "Qingtian Street",
    blurb:
      "A Japanese wooden residence completed in 1931, once home to NTU professor Adachi Jin and geologist Ma Ting-ying, reborn as a restaurant in 2011 under city heritage status. The tatami rooms and engawa veranda are intact, the kitchen serves Japanese-Western set meals and afternoon tea, and socks are required to step inside.",
    tips: "Book online; closed the first Monday of each month.",
    mustOrder: ["Chef's set menu", "Afternoon tea desserts"],
  },
  "taipei-ecole-cafe": {
    name: "Ecole Cafe",
    area: "Qingtian Street",
    blurb:
      "A cafe of ten-plus years at a Qingtian Street lane corner, big windows washing light over wooden tables — no time limits, outlets everywhere, and a long-term base for NTNU and NTU students and writers. Beyond the pour-overs and cold-brew coffee, the New York cheesecake and brunch each keep a loyal following of their own.",
    mustOrder: ["Pour-over coffee", "New York cheesecake", "Brunch"],
  },
  "taipei-liao-beef-noodle": {
    name: "Liao Family Beef Noodles",
    area: "Jinhua Street",
    blurb:
      "A beef noodle shop perfuming Jinhua Street for over forty years, its tea-amber broth sitting somewhere between clear-stewed and red-braised, the beef simmered soft without falling apart. A former Bib Gourmand pick, it sells only four midday hours a day, and the fresh-cut thin dried tofu under soy paste lands on every table.",
    tips: "Open 10:00–14:00 only, closed Mondays; half-hour queues are normal even on weekdays.",
    mustOrder: ["Clear-broth beef noodles", "Fresh-cut dried tofu", "Braised beef intestine"],
  },
  "taipei-liu-pin-restaurant": {
    name: "Liu Pin Restaurant",
    area: "Jinhua Street",
    blurb:
      "A mainlander-style family restaurant open since 1983, forty years of neighborhood business in a quiet Jinhua lane. Yellow croaker braised with tofu folds the fish's sweetness into the curd, the shredded pork with dried tofu sells out almost daily, and honest prices make it the everyday canteen on the Yongkang area's edge.",
    mustOrder: ["Braised croaker with tofu", "Shredded pork dried tofu", "Herbal crispy duck"],
  },
  // ---------- Da'an (Shida Night Market) ----------
  "taipei-shiyun-fried-chicken": {
    name: "Shi Yun Fried Chicken",
    area: "Shida Night Market",
    blurb:
      "A fried chicken stall founded in 1984 that claims the invention of Taiwanese popcorn chicken: the nuggets marinate in garlic and get a pepper-salt dusting straight out of the fryer. The fried squid and tianbula are just as senior, it sells until midnight, and its queue runs among the longest in Shida Night Market.",
    mustOrder: ["Popcorn chicken", "Fried squid", "Tianbula"],
  },
  "taipei-lantern-luwei": {
    name: "Lantern Luwei",
    area: "Shida Night Market",
    blurb:
      "The hot luwei landmark on Shida Road, nicknamed the gate god of Shida Night Market, one master broth running over forty years. Pork shank and foot tendon simmer to melting, the insider move adds pickled mustard greens and Prince instant noodles, and the basement dining room pours free-refill drinks late into the night.",
    tips: "Closed Mondays; weekend-evening queues are the longest.",
    mustOrder: ["Pork shank", "Pork foot tendon", "Luwei platter"],
  },
  // ---------- Da'an (East District / Yanji / Ren'ai / Technology Building) ----------
  "taipei-eastern-ice-store": {
    name: "Eastern Ice Store",
    area: "East District",
    blurb:
      "A dessert shop open since 1984 where the tapioca pearls are boiled fresh — springy, with a whiff of caramel — and every bowl comes with three toppings of your choice. A visit from Jensen Huang set off a fresh wave of queues; a Japanese menu is on hand, and pearl ice carries the summer while hot grass jelly carries the winter.",
    mustOrder: ["Tapioca pearl ice", "Hot grass jelly", "Tofu pudding"],
  },
  "taipei-zilin-dumpling": {
    name: "Zilin Steamed Dumplings",
    area: "East District",
    blurb:
      "A dumpling old-timer in the Dinghao Mingdian basement arcade, thirty years in the East District: the steamed dumplings are wrapped to order, thin-skinned and juicy. The wing-shaped potstickers fry crisp on the bottom, and with a bowl of beef egg-drop soup the bill stays under NT$200 — queues at both meal shifts, every day.",
    mustOrder: ["Steamed dumplings", "Potstickers", "Beef egg-drop soup"],
  },
  "taipei-sao-douhua": {
    name: "Sao Douhua",
    area: "Yanji Street",
    blurb:
      "The dessert shop in a Yanji Street lane that first put fresh fruit on douhua (tofu pudding) — its watermelon-cube, douhua, and brown-sugar-water combination famous enough to open a branch in Shinjuku. The pudding runs dense and silky, the fruit rotates with the seasons, it opens in the afternoon and closes when sold out.",
    tips: "Closed Sundays; opens at 13:00 and often sells out ahead of time.",
    mustOrder: ["Watermelon tofu pudding", "Mango tofu pudding"],
  },
  "taipei-solo-pasta": {
    name: "Solo Pasta",
    area: "Ren'ai Road",
    blurb:
      "Chef Wang Chia-ping opened this pasta specialist in 2010 after training in restaurants across Italy, insisting on original regional recipes and pasta eaten the instant it lands. The smoked duck breast cream pasta and squid ink tagliolini lead the menu, a 500 Plates listee year after year, and weekday lunch still runs full.",
    tips: "Book ahead; the pasta won't wait — eat it the moment it hits the table.",
    mustOrder: ["Smoked duck cream pasta", "Squid ink tagliolini"],
  },
  "taipei-steak-inn": {
    name: "Steak Inn",
    area: "Ren'ai Road",
    blurb:
      "An old-guard steakhouse open since 1994, its original shop beside the Ren'ai roundabout searing then roasting — twin fires that lock in the juices. The steak-and-lobster double main is the set piece for celebration dinners, while the business lunch lets office workers reach the same grade of beef at a friendlier price.",
    tips: "Reservations required; the business lunch is the better deal.",
    mustOrder: ["Twin-fire steak", "Lobster"],
  },
  "taipei-the-diner": {
    name: "the Diner",
    area: "Technology Building",
    blurb:
      "An American diner that opened its first shop on Rui'an Street in 2006, one of the pioneers that brought all-day brunch culture to Taipei. The eggs Benedict and hand-formed burgers have run since day one; branches have spread into several cities, yet the original still packs its little lane full.",
    mustOrder: ["Eggs Benedict", "American burger"],
  },
  "taipei-toasteria-cafe": {
    name: "Toasteria Cafe (Dunnan)",
    area: "East District",
    blurb:
      "A Mediterranean cafe its Israeli founder grew from a six-ping East District shopfront: the grilled panini come generously stuffed, cheese stretching with every pull. Shakshuka, hummus, and other Middle Eastern plates are rare finds in Taipei, pet-friendly and open late, it keeps regulars for dinners and midnight snacks alike.",
    mustOrder: ["Panini", "Shakshuka", "Hummus"],
  },
  // ---------- Xinyi ----------
  "taipei-lawrys-prime-rib": {
    name: "Lawry's The Prime Rib",
    area: "Xinyi District",
    blurb:
      "The prime rib house born in Beverly Hills landed in Taipei in 2002 and now sits on the sixth floor of Bellavita. Silver carts roll to the table for prime rib carved on the spot, the salad tossed spinning over a bowl of ice is the signature tableside ritual, and it stays a favorite stage for birthdays and family celebrations.",
    tips: "Reservations required; online booking takes a deposit.",
    mustOrder: ["Signature prime rib", "Spinning bowl salad"],
  },
  "taipei-wildwood": {
    name: "Wildwood",
    area: "Xinyi District",
    blurb:
      "Chef Kin Lam's wood-fired grill house opened in 2018 on the fourth floor of Shin Kong Mitsukoshi Xinyi Place A9. Longan and lychee wood flames roast the dry-aged steaks over live fire, layering in a smoky depth no electric grill can imitate, and the house-made bread makes a statement of an opening act.",
    tips: "Reservations required; book about a week ahead for dinner.",
    mustOrder: ["Wood-fired dry-aged steak", "Charcoal-grilled seafood"],
  },
  "taipei-bawu-tiandi": {
    name: "85TD",
    area: "Taipei 101",
    blurb:
      "A Cantonese restaurant on the 85th floor of Taipei 101, opened in 2021, the Xinyi skyline pooled beyond floor-to-ceiling glass. The signature char siu glistens sweet and lacquered, the suckling pig and roast duck follow the Cantonese siu mei line — the high-altitude pick for business banquets and anniversaries.",
    tips: "Reservations required; window seats need booking well ahead.",
    mustOrder: ["Supreme char siu", "Roast suckling pig", "Roast duck"],
  },
  "taipei-shijia-sesame-oil-kidney": {
    name: "Shi Family Sesame Oil Kidney",
    area: "Yongchun",
    blurb:
      "A sesame oil kitchen open since 1973 beside Songde Temple near Yongchun station. The kidneys are cleaned to a crisp, clean bite with no trace of gaminess, the sesame-oil broth runs thick with ginger yet never harsh, and on cold days locals pair a bowl of sesame oil chicken with braised pork rice — fifty years of warmed stomachs.",
    tips: "Closed Mondays; winter dinner hours are the busiest.",
    mustOrder: ["Sesame oil kidney", "Sesame oil chicken", "Braised pork rice"],
  },
  "taipei-nancun-eatery": {
    name: "Nancun Eatery",
    area: "Zhuangjing Road",
    blurb:
      "A military-village eatery of some fifty years in the lanes of Zhuangjing Road — regulars call it the 'Little Grand Hyatt'. The fried noodles are rolled fresh, rough-edged and chewy; the peeled-chili scrambled eggs demand extra rice; a plate of braised cuts opens the meal — the pocket spot Xinyi locals bring friends to.",
    mustOrder: ["Hand-rolled fried noodles", "Peeled-chili fried eggs", "Luwei platter"],
  },
  "taipei-hutao-rice-noodle-soup": {
    name: "Hu Tao Rice Noodle Soup",
    area: "Yongji Road Lane 30",
    blurb:
      "A rice noodle soup specialist in Lane 30 of Yongji Road, a brand handed down three generations from a 1967 Tonghua Street stall to the City Hall district. The taro is simmered until it dissolves into the broth, the red-marinated pork comes fried crisp to order, and at lunchtime no spot in the lane draws more people.",
    mustOrder: ["Taro rice noodle soup", "Fried red-marinated pork"],
  },
  "taipei-mu-ji-beef-noodle": {
    name: "Muji Beef Noodles",
    area: "Wuxing Street",
    blurb:
      "A Sichuan-style beef noodle house open since 1979 on Wuxing Street, diagonally across from Taipei Medical University. The clear broth pours limpid yet lands with depth, the fresh-griddled jin bing flatbread rolled around beef is a military-village way of eating, and it has held a Bib Gourmand seven years running since 2019.",
    mustOrder: ["Clear-broth beef noodles", "Jin bing beef roll"],
  },
  "taipei-zhenfang-charcoal-toast": {
    name: "Zhen Fang Charcoal Toast",
    area: "Taipei City Hall",
    blurb:
      "A charcoal toast brand founded in 2017, its original Xinyi shop in the lanes near City Hall station, the bread picking up char and smoke over live coals. Pork, egg, and cheese toast with a cup of milk black tea is the signature combo, the batter-style egg crepe eats soft and springy, and weekday queues start at first light.",
    mustOrder: ["Pork egg cheese toast", "Milk black tea", "Batter egg crepe"],
  },
  // ===== R4-d2: Songshan / Shilin / Beitou / Neihu / Nangang =====
  "taipei-yue-jia-xiaoguan": {
    name: "Yue Family Eatery",
    area: "Shidong Market",
    blurb:
      "An old noodle stall on the second floor of Shidong Market: each oversized wonton wraps a whole shrimp and is folded fresh that day, while the heirloom double-sauce noodles get their sauce from black pork. It opens just four midday hours, seats fill fast, and the hand-rolled flaky red bean pastries often sell out early.",
    tips: "Open 11:00–15:00 only, closed Mondays; the red bean pastries often go early.",
    mustOrder: ["Big shrimp wontons", "Double-sauce noodles", "Red bean pastry"],
  },
  "taipei-zhen-hao-jia-pho": {
    name: "Zhen Hao Jia Vietnamese Pho",
    area: "Shidong Market",
    blurb:
      "A Vietnamese stall on Shidong Market's second floor where the pho noodles are made fresh daily in limited batches, never rehydrated, and the broth draws its savor from fish sauce. Rare beef pho and fried spring rolls lead the board; with air-conditioning and a spotless stand, media call it a face of this 'five-star' market.",
    tips: "Fresh pho noodles are limited daily — go late and you may miss out; closed Mondays with the market.",
    mustOrder: ["Rare beef pho", "Fried spring rolls"],
  },
  "taipei-yipin-shanxi-noodle": {
    name: "Yi Pin Shanxi Knife-Cut Noodles",
    area: "Tianmu",
    blurb:
      "A Tianmu old-name noodle house hidden in a Tianyu Street home, where the knife-cut noodles are shaved to order — by the shop's own robot — into a tomato-beef broth stewed thick, mellow, and tangy. Northern staples like beef rolls and mushu fried bing fill the menu, and dinner runs full nearly nightly with local families.",
    tips: "Dinner rush fills the room — order online for takeout to skip the wait.",
    mustOrder: ["Tomato beef knife-cut noodles", "Beef pancake roll", "Mushu stir-fried bing"],
  },
  "taipei-viet-phu-banh-mi": {
    name: "Viet Phu Banh Mi",
    area: "Tianmu",
    blurb:
      "A takeout-only banh mi specialist on Dexing East Road, baking its baguettes fresh daily until they run out — the crispy pork version crackles out loud at the first bite. A 500 Bowls listee also endorsed by celebrity chef James, it draws long lines even at off-peak hours, and most regulars phone their order in ahead.",
    tips: "Walk-in waits often top half an hour — phone in your order first; closed Mondays.",
    mustOrder: ["Crispy pork banh mi", "Signature banh mi"],
  },
  "taipei-chen-ji-fried-chicken": {
    name: "Chen Ji Fried Chicken",
    area: "Beitou Market",
    blurb:
      "A popular fried chicken shop born in Shipai; this branch beside Beitou Market only gets busier as the night runs on, the late-night stop for hot-spring bathers. Wings and cutlets are pre-fried then flash-fried again — crisp shells, never dry — pepper dusted piece by piece, five wings for just over NT$100 making a meal.",
    tips: "Open until close to midnight; peak waits run about twenty minutes.",
    mustOrder: ["Fried chicken wings", "Fried chicken cutlet"],
  },
  "taipei-tsai-yuan-yi-black-tea": {
    name: "Tsai Yuan Yi Black Tea",
    area: "Beitou Market",
    blurb:
      "A tea stand beside Beitou Market pouring since 1966: the old-style black tea simmers in giant kettles with nothing but tea leaves and sugar — no essences, no coloring. A medium cup has held at NT$20 for decades, and insiders order the off-menu 'three-in-one', black tea, green tea, and smoked plum juice layered into one cup.",
    tips: "Black tea comes in take-home bags; the one true shop stands beside Beitou Market.",
    mustOrder: ["Old-style black tea", "Three-in-one blend", "Sour plum drink"],
  },
  "taipei-man-ke-wu-ramen": {
    name: "Man Ke Wu Ramen",
    area: "Xinbeitou",
    blurb:
      "A Taiwanese-style ramen veteran on Wenquan Road, not far from Thermal Valley: the miso chashu ramen carries a rich, rounded broth, its pork stewed soft. Beitou locals have eaten here since childhood, queues form at nearly every mealtime, and the bowl isn't properly Beitou until a hot-spring egg lands on top.",
    tips: "Lunch and dinner sittings; closed Mondays; expect a queue at peak.",
    mustOrder: ["Miso chashu ramen", "Hot-spring egg"],
  },
  "taipei-su-jia-beef-noodle": {
    name: "Su Family Beef Noodles",
    area: "Xinbeitou",
    blurb:
      "Open close to forty years and paired with Wu Family as Beitou's twin beef noodle powers, it fields all three broths — red-braised, clear, and tomato — beef stewed soft but intact. It serves to 11:30 p.m. with no days off; come down from the hot springs for a bowl, help yourself to pickled greens, and refill the soup free.",
    tips: "The main shop is on Yongxing Road Section 1 — don't end up at the Zhongyang North Road branch.",
    mustOrder: ["Braised beef trio noodles", "Tomato beef noodles"],
  },
  "taipei-a-cai-potsticker": {
    name: "A-Cai Potstickers & Dumplings",
    area: "Shipai",
    blurb:
      "A Shipai queue fixture since 1982: yellow-chive potstickers hit the griddle to order, bottoms toasted gold, juice bursting at the bite. Each piece runs under NT$10 and a meal with hot and sour soup stays under NT$100 — Veterans Hospital and school-district locals have eaten here since student days and now bring their kids.",
    tips: "Closed Wednesdays, takeout only on Thursdays; phone ahead at peak hours.",
    mustOrder: ["Yellow-chive potstickers", "Hot & sour soup"],
  },
  "taipei-shipai-noname-egg-crepe": {
    name: "Shipai No-Name Egg Crepe",
    area: "Shipai",
    blurb:
      "A no-name breakfast shop in the lanes of Shijian Street, its egg crepe wrappers rolled and griddled to order — crisp at the edges, chewy within — with peanut soup or savory soy milk as the regulars' pairing. Fame spiked after chef André Chiang came and vouched; it sells five morning hours, a line forming before the door opens.",
    tips: "Sells 6–11 a.m. only, closed Tuesdays; on weekends even takeout means queuing.",
    mustOrder: ["Handmade egg crepe", "Peanut soup", "Savory soy milk"],
  },
  "taipei-zhongchenghao-oyster-omelette": {
    name: "Zhong Cheng Hao Oyster Omelette",
    area: "Shilin Night Market",
    blurb:
      "A Shilin Night Market elder open since 1972 and now run by the second generation — one of few stalls with a bright sit-down dining area. It built its name on stir-fried squid thick soup, squid thick-cut and crisp in rich broth; the oyster omelette's batter fries up just right, and orders arrive by number to your table.",
    tips: "Opens in the afternoon and runs to 1 a.m.; weekend crowds turn over fast.",
    mustOrder: ["Stir-fried squid soup", "Oyster omelette"],
  },
  "taipei-boss-shih-stinky-tofu": {
    name: "Boss Shih Spicy Stinky Tofu",
    area: "Raohe Street Night Market",
    blurb:
      "The old-name stinky tofu stall of Raohe Street Night Market: the tofu drinks up the mala broth, the duck blood slips silky, and adding pork intestine is the connoisseur's move. Selected as Bib Gourmand street food in the very first Michelin Guide Taipei in 2018, it keeps a ring of customers around the stall from evening onward.",
    tips: "Sales start at 4:30 p.m.; skip the dinner rush if you want a seat.",
    mustOrder: ["Mala stinky tofu duck blood", "Mala pork intestine"],
  },
  "taipei-chen-jia-cold-noodle": {
    name: "Chen Family Cold Noodles",
    area: "Nanjing Sanmin",
    blurb:
      "A cold noodle institution running since 1975: thick-cut noodles with real chew under a densely fragrant sesame sauce, sold from dawn until 1:30 a.m. The locals' set is the 'three-in-one' soup — miso, egg ribbons, and pork meatballs in one bowl — cold noodles beside hot soup, hailed as the founding Taipei way.",
    tips: "Closed Sundays; crowds keep coming deep into the night; cash only.",
    mustOrder: ["Sesame cold noodles", "Three-in-one soup"],
  },
  "taipei-dongyin-eatery": {
    name: "Dongyin Eatery",
    area: "Nanjing Sanmin",
    blurb:
      "The late-night legend in a market lane off Nanjing East Road Section 5, a noodle stall grown over half a century, selling until 4 a.m. The signature noodles come tossed with sesame paste and fried shallots, the braising counter cuts twenty-plus picks from tofu skin to pork trotter — a fixed night station for taxi drivers.",
    tips: "Sells until 4 a.m.; days off are irregular — check the official socials before heading out.",
    mustOrder: ["Signature noodles", "Braised tofu skin", "Red-oil wontons"],
  },
  "taipei-minsheng-fried-rice": {
    name: "Minsheng Fried Rice",
    area: "Minsheng Community",
    blurb:
      "A fried rice specialist of some thirty years in Minsheng Community, every wok tossed over roaring flame — grains distinct, wok hei thick in the air. It shot to fame after winning a 2013 online poll of Taiwan's ten best egg fried rice, beating Din Tai Fung; the shopfront is tiny and mostly takeout, so expect a queue at peak.",
    tips: "Peak queues can pass an hour — go off-peak or phone in an order first.",
    mustOrder: ["House mixed fried rice", "Egg fried rice"],
  },
  "taipei-xinzhong-shengjianbao": {
    name: "Xinzhong Street Pan-Fried Buns",
    area: "Xinzhong Street",
    blurb:
      "The pan-fried bun stall by the big tree on Xinzhong Street, wrapping and frying on the spot in just two flavors — fresh pork and cabbage — the bottoms seared golden and crisp. Sales start at 6:30 a.m. and often finish before 9, weekday afternoons add a second round, and the queue at opening is this street's daily scenery.",
    tips: "Morning batch often gone before 9; weekdays add a 3:30 p.m. session; takeout only.",
    mustOrder: ["Pork pan-fried bun", "Cabbage pan-fried bun"],
  },
  "taipei-minsheng-gongyu-cafe": {
    name: "Minsheng Gongyu Coffee Essential",
    area: "Minsheng Community",
    blurb:
      "An industrial-retro cafe converted from an old apartment, running over twenty years in Minsheng Community's tree-shaded lanes — an elder of its cafe culture. Pour-over single origins and desserts share the menu with beer; weekday seating has no time limit and outlets to spare, and readers and workers settle in all afternoon.",
    tips: "No time limit on weekdays; two-hour cap on weekends.",
    mustOrder: ["Pour-over single origin", "Latte"],
  },
  "taipei-tt-restaurant": {
    name: "T+T",
    area: "Taipei Arena",
    blurb:
      "A one-Michelin-star restaurant hidden in the lanes off Dunhua North Road, opened in 2018 and named for 'Tapas' and 'Tasting'. Built on a new-Asian axis, it translates Asian street food elements through French techniques — fire, fermentation, confit — into its tasting menus, and has held onto its star year after year.",
    tips: "Tasting menu only, booked through the online system — popular slots go fast.",
    mustOrder: ["Chef's tasting menu"],
  },
  "taipei-xiao-beiping-noodle": {
    name: "Xiao Beiping Noodle House",
    area: "Yanshou Street",
    blurb:
      "A northern noodle house of nearly thirty years on Yanshou Street, grown from a noodle stand into a full family menu, everything cooked to order. The scallion pancake shatters in fragrant layers, the red bean guo bing — a pan-seared sweet pastry — is the regulars' dessert ritual, and limited dishes vanish if you come late.",
    tips: "Online reservations available; arrive early for the limited dishes.",
    mustOrder: ["Scallion pancake", "Red bean guo bing", "Crispy beef brisket"],
  },
  "taipei-sihai-yijia": {
    name: "Si Hai Yi Jia",
    area: "Bade Road Section 4",
    blurb:
      "A northern-Chinese house from 1970 hidden in a lane off Bade Road Section 4, grown from hot pot into a complete northern repertoire. The shredded lamb tripe eats crisp, the pickled cabbage and pork belly pot runs bright and sour, and around NT$400 a head loads the table full — weekday lunches still fill every single day.",
    tips: "No reservations at peak times — arriving before the doors open is the safe play.",
    mustOrder: ["Shredded lamb tripe", "Pickled cabbage pork pot", "Salt-baked chicken"],
  },
  "taipei-all-day-roasting": {
    name: "All Day Roasting Company",
    area: "Yanshou Street",
    blurb:
      "A self-roasting cafe opened on Yanshou Street in 2014, its industrial room fitted with a three-group espresso machine and top-shelf grinders. Black coffee comes with refills, seating has no time limit, and the signature apple pie beside a pour-over marks it as the emblem of Minsheng's work-and-read cafes.",
    tips: "No time limit, no service charge; weekend afternoons usually run full.",
    mustOrder: ["Pour-over single origin", "Apple pie"],
  },
  "taipei-zhu-da-lang-pig-blood-cake": {
    name: "Zhu Da Lang Pig's Blood Cake",
    area: "Neihu Lane 737",
    blurb:
      "The queue magnet of the Neihu Lane 737 food street: a jumbo pig's blood cake past twenty centimeters, rolled heavy in peanut powder and cilantro, sauce and chili level yours to call. It grew from a humble stand a decade-plus ago into branches across the city's night markets, and the crowd never thins after the afternoon opening.",
    tips: "The stall opens at 2:30 p.m.; queues build from evening.",
    mustOrder: ["Pig's blood cake"],
  },
  "taipei-ya-xiang-bao-duck": {
    name: "Ya Xiang Bao Duck Rice",
    area: "Xihu Market",
    blurb:
      "A duck specialist in the back lane of Xihu Market, formerly A-Ling noodle shop, founded 1990 and renamed by the second generation. The minced duck rice comes crowned with a molten fried egg, the pickled-greens duck soup cuts the richness clean, and the heibaiqie plates pile on generously — the office crowd's daily canteen.",
    tips: "Five minutes on foot from Xihu Station Exit 1; check the official socials for surprise days off.",
    mustOrder: ["Minced duck rice", "Pickled greens duck soup", "Heibaiqie side dishes"],
  },
  "taipei-antipodean-coffee": {
    name: "The Antipodean Specialty Coffee",
    area: "Gangqian",
    blurb:
      "An Antipodean-style cafe near Gangqian station, its signature a build-your-own breakfast plate of sourdough, hash browns, and avocado rose, with a flat white poured the way it should be. Blue geometric walls and dense greenery frame generously spaced seats plus a small private room, and weekend brunch starts at seven sharp.",
    tips: "Opens 7 a.m. on weekends — arrive early to dodge the brunch wave.",
    mustOrder: ["Build-your-own breakfast", "Flat white"],
  },
  "taipei-donghu-wang-dumpling": {
    name: "Donghu Wang Family Dumplings",
    area: "Donghu",
    blurb:
      "The dumpling old-timer opposite Donghu Elementary: chive dumplings boiled to order at NT$10 apiece, with a bowl of hot and sour soup as the standard local set. One small shop has grown into three branches, the second generation has launched a brand of its own, and when Lehuo Park's cherry blossoms bloom, a seat is a prize.",
    tips: "Closed Tuesdays; mealtime queues balloon during cherry blossom season.",
    mustOrder: ["Chive dumplings", "Hot & sour soup"],
  },
  "taipei-a-fu-tofu-pudding": {
    name: "A-Fu Tofu Pudding",
    area: "Donghu",
    blurb:
      "A popular tofu pudding shop beside Anhu No. 3 Park in Donghu, where the signature bowl gets its surface blowtorched into a crème brûlée-style caramel shell. Begun as a roadside stand before expanding to Rui'an Street, it rotates toppings with the seasons — red bean soup in winter, mung bean in summer — and takes cash only.",
    tips: "Cash only; closed Sundays.",
    mustOrder: ["Torched tofu pudding", "Taro tofu pudding"],
  },
  "taipei-swagger-mummy-dumpling": {
    name: "Swagger Mummy Handmade Dumplings",
    area: "Huzhou",
    blurb:
      "A handmade dumpling brand whose original stall opened in Xihu Market, with a flagship by Huzhou station for dine-in and frozen takeaway. Famed for a golden ratio of piled vegetables to fresh pork, its shrimp-and-cabbage dumplings hide shrimp the size of NT$50 coins — twice champion of the Taipei Traditional Market Festival.",
    tips: "The original Xihu Market stall opens only Wednesday and weekend mornings; flagship closed Sundays.",
    mustOrder: ["Shrimp & cabbage dumplings"],
  },
  "taipei-a-chun-smoked-goose": {
    name: "A-Chun Smoked Goose",
    area: "Academia Sinica",
    blurb:
      "An old-name goose shop on Yanjiuyuan Road: the salt-water and smoked goose platters slice tender, with a house dipping sauce and a NT$50 bowl of pickled-greens goose intestine soup. Ordering is old-school — write your own slip — and from late afternoon to midnight it hosts Academia Sinica and biotech park staff over drinks.",
    tips: "Doors open at 4:30 p.m., with one fixed day off a week — check before you go.",
    mustOrder: ["Salted goose platter", "Goose intestine soup"],
  },
  "taipei-ama-rice-noodle-soup": {
    name: "Ama's Rice Noodle Soup",
    area: "Kunyang",
    blurb:
      "A rice noodle soup stall under a tin roof on Dongxin Street, perfuming Kunyang for close to fifty years: the pork-bone broth carries a light pickled-green tang and refills are free. Heibaiqie sides are blanched and sliced to order from NT$15, ama (grandma) herself holds court, and from 6:30 a.m. it stays full past midday.",
    tips: "Opens at dawn and packs up by 2:30 p.m.; popular sides sell out before noon.",
    mustOrder: ["Rice noodle soup", "Heibaiqie side dishes"],
  },
  "taipei-laojuancun-pancake": {
    name: "Lao Juan Cun Stuffed Pancakes",
    area: "Nangang",
    blurb:
      "A handmade stuffed pancake stand five minutes from Nangang Station, selling just four fillings — cabbage, shredded radish, chives, and red bean — at NT$40 each. The dough is rolled, filled, and griddled on the spot, crisp outside, soft within, warm with white pepper — from the weekday afternoon opening the queue never ends.",
    tips: "Opens 1:30 p.m. on weekdays, closed Sundays; everything fries to order, so expect a wait.",
    mustOrder: ["Shredded radish pancake", "Cabbage pancake"],
  },
};
