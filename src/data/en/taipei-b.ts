// English pack for src/data/cities/taipei-b.ts — keyed by canonical id.
// Rules: see docs/EN_GUIDE.md. mustOrder must align index-by-index with zh.
import type { EnRestaurantText } from "../types";

export const en: Record<string, EnRestaurantText> = {
  // ---------- Da'an (Yongkang Street) ----------
  "taipei-yongkang-beef-noodle": {
    name: "Yong Kang Beef Noodle",
    area: "Yongkang Street",
    blurb:
      "A Sichuan-style beef noodle institution open since 1963, its braised broth built on wok-fried chili bean paste and topped with hulking chunks of tendon-laced beef. A Bib Gourmand regular, its queue mixes locals and tourists from the minute the doors open; old-timers always add the rice-powder steamed ribs.",
    tips: "Queues often top 20 minutes at peak mealtimes; mid-afternoon is the easiest time to get a seat.",
    mustOrder: ["Braised beef & tendon noodles", "Rice-powder steamed ribs"],
  },
  "taipei-dongmen-dumpling-house": {
    name: "Dongmen Dumplings",
    area: "Yongkang Street",
    blurb:
      "A third-generation mainlander-style dumpling house open since 1961, it grew from a dumpling stall into the Yongkang area's go-to for sauerkraut and pork belly hot pot. The cabbage is fermented in-house for a proper sour punch — pair it with pork dumplings and scallion pancake, an old Taipei winter ritual.",
    mustOrder: ["Sauerkraut pork hot pot", "Pork dumplings", "Scallion pancake"],
  },
  "taipei-tianjin-scallion-pancake": {
    name: "Tianjin Scallion Pancake",
    area: "Yongkang Street",
    blurb:
      "A stall at the mouth of Yongkang Street where scallion pancakes are rolled and griddled to order, the dough fluffed until the layers pull apart and the edges fry up crackly. Only eight flavors exist — basil with egg is the favorite — and half the queue is usually Japanese and Korean tourists watching the cook whack the dough.",
    mustOrder: ["Basil & egg pancake", "Plain scallion pancake"],
  },
  "taipei-chengji-vietnamese-noodle": {
    name: "Thanh Ky Vietnamese Noodles",
    area: "Yongkang Street",
    blurb:
      "Started in 1980 as a Vietnamese-Chinese couple's five-stool street stand, this Yongkang Street pho house has grown into Taipei's benchmark for Vietnamese noodles. The broth is a clear beef-bone simmer, and the rare beef pho arrives with slices still cooking in the hot soup — fried spring rolls on the side complete it.",
    mustOrder: ["Rare beef pho", "Fried spring rolls"],
  },
  // ---------- Da'an (Linjiang Street / Xinyi Anhe) ----------
  "taipei-yupinyuan-tangyuan": {
    name: "Yu Pin Yuan Iced and Hot Tangyuan",
    area: "Linjiang Street Night Market",
    blurb:
      "A dessert stall in Linjiang Street Night Market famous for one trick: freshly boiled sesame and peanut tangyuan (glutinous rice balls) laid straight onto shaved ice, one bite scalding and freezing at once. Bib Gourmand-listed, it often sells out early — the owner's tip is a drizzle of osmanthus honey and a squeeze of lime.",
    tips: "Opens at 6 p.m.; arrive before 8 if you want a seat inside.",
    mustOrder: ["Ice & hot tangyuan", "Osmanthus jiuniang tangyuan"],
  },
  "taipei-taihodien-spicy-hotpot": {
    name: "Tai Ho Dien Spicy Hot Pot",
    area: "Xinyi Anhe",
    blurb:
      "A mala hot pot stalwart running since 1994, its red broth simmered from beef bones, chili bean paste, and Sichuan peppercorns; the deeply braised duck blood and tofu come with free refills. Celebrities from Hong Kong and Korea head straight here, and with service until 3 a.m. it defines Taipei's late-night hot pot scene.",
    mustOrder: ["Duck blood & tofu", "Sichuan meatballs", "Half & half hot pot"],
  },
  // ---------- Xinyi ----------
  "taipei-du-yi-chu-beiping": {
    name: "Do It True",
    area: "Sun Yat-sen Memorial Hall",
    blurb:
      "A Beijing-style restaurant open since 1949, turning out northern classics like dalian huoshao (pan-fried meat pockets) and nine-turn braised intestines for over seventy years. A multi-year Bib Gourmand pick, its sauerkraut and pork belly hot pot starts from naturally fermented cabbage — bring a group and order family-style.",
    mustOrder: ["Dalian huoshao pockets", "Braised pork intestines", "Sauerkraut pork hot pot"],
  },
  "taipei-jiaxiang-soy-milk": {
    name: "Jia Xiang Soy Milk",
    area: "Wuxing Street",
    blurb:
      "A traditional breakfast shop beside the Wuxing Street market, selling from five in the morning; the pork xiaolongbao are wrapped and steamed to order, thin-skinned and full of soup. Local office workers split open a pepper bun and stuff a fried cruller inside, chased with savory soy milk — favorites are often gone by ten.",
    tips: "Closed Mondays; the signature xiaolongbao sell out fast, so come before 9 a.m.",
    mustOrder: ["Pork xiaolongbao", "Pepper bun with youtiao", "Savory soy milk"],
  },
  // ---------- Songshan (Raohe / Taipei Arena) ----------
  "taipei-fuzhou-pepper-bun": {
    name: "Fuzhou Black Pepper Bun",
    area: "Raohe Street Night Market",
    blurb:
      "The pepper bun stall at the Ciyou Temple end of Raohe Street Night Market, where bakers slap each bun by hand onto the wall of a charcoal oven at two to three hundred degrees. Inside: pork marinated half a day with a fistful of scallions — bite carefully, the juice is molten. Bib Gourmand-listed, batches vanish into the queue.",
    tips: "The oven fires up at 3:30 p.m.; expect a 10–20 minute wait in line for a fresh batch.",
    mustOrder: ["Pepper bun"],
  },
  "taipei-chen-dong-herbal-ribs": {
    name: "Chen Tung Pork Ribs Medicinal Herbs Soup",
    area: "Raohe Street Night Market",
    blurb:
      "The first medicinal pork rib stall in Raohe Street Night Market, its broth brewed from more than ten Chinese herbs yet clean and gently sweet rather than bitter, the ribs stewed until chopsticks pull them apart. A Bib Gourmand pick five years running since 2018 — dip the meat in the house chili bean sauce on a cold night.",
    mustOrder: ["Herbal pork rib soup", "Herbal lamb soup"],
  },
  "taipei-tung-fa-hao": {
    name: "Tung Fa Hao",
    area: "Raohe Street Night Market",
    blurb:
      "A Raohe Street institution founded in 1937 that has sold just three things for over eighty years: oyster vermicelli, sticky rice, and pork thick soup. The vermicelli broth is left unthickened so the bonito-stock sweetness comes through, and tables turn so fast you're usually seated within ten minutes even on packed nights.",
    mustOrder: ["Oyster vermicelli", "Sticky rice", "Pork thick soup"],
  },
  "taipei-miss-chin-soy-milk": {
    name: "Miss Qin's Soy Milk",
    area: "Taipei Arena",
    blurb:
      "A military-village-style breakfast shop on Yanji Street near Taipei Arena, opening at 5:30 a.m. with egg crepes rolled and griddled to order. Its rare signature tucks a lion's head meatball into a flatbread or egg crepe, and the pickled cowpea egg crepe draws Japanese travelers — weekend lines bend around the corner.",
    mustOrder: ["Lion's head egg crepe", "Pickled bean egg crepe", "Savory soy milk"],
  },
  // ---------- Shilin (Shilin Night Market / Tianmu) ----------
  "taipei-hot-star-chicken": {
    name: "Hot-Star Large Fried Chicken",
    area: "Shilin Night Market",
    blurb:
      "The brand that started Taiwan's giant fried chicken craze in Shilin in 1992, flattening cutlets out bigger than your face and dusting them with pepper salt — the template every night market now follows. Now at the Jihe Road entrance to Shilin Night Market, it fries to order; one crackly, juicy slab is a meal in itself.",
    mustOrder: ["Giant fried chicken cutlet"],
  },
  "taipei-hai-yu-herbal-ribs": {
    name: "Hai Yu Pork Ribs",
    area: "Shilin Night Market",
    blurb:
      "A Shilin Night Market fixture on Dadong Road for more than fifty years, ladling out a dark, ten-herb medicinal broth that drinks sweet, with generous slabs of pork rib. A repeat Bib Gourmand pick — regulars order the herbal chicken, two legs to a serving, and on winter nights the tiny shopfront never has a seat to spare.",
    mustOrder: ["Ten-herb pork rib soup", "Herbal chicken leg soup"],
  },
  "taipei-hsin-fa-ting-ice": {
    name: "Xin Fa Ting Shaved Ice",
    area: "Shilin Night Market",
    blurb:
      "A Shilin ice parlor open since 1968 and the birthplace of snowflake ice — ice bricks shaved into thin ribbons and piled into a melting mountain. The honey bean ice still carries an old-Taipei combination of toppings, and its spot beside the Yangming Theater has watched Shilin Night Market grow from the old market entrance.",
    mustOrder: ["Snowflake ice", "Honey bean ice"],
  },
  "taipei-da-shanghai-pan-fried-bun": {
    name: "Da Shanghai Pan-Fried Buns",
    area: "Shilin Night Market",
    blurb:
      "An old pan-fried bun shop at a lane mouth off Wenlin Road in Shilin Night Market, cooking dozens per pan and reportedly selling eighty thousand buns a month. There are only three fillings — pork, cabbage, and mala — with bottoms seared golden and crisp; the queue looks long but the pans turn over so fast it hardly matters.",
    mustOrder: ["Pork pan-fried bun", "Cabbage pan-fried bun"],
  },
  "taipei-marys-hamburger": {
    name: "Mary's Hamburger",
    area: "Tianmu",
    blurb:
      "Opened in Tianmu in 1979, just after the US broke ties with Taiwan, by a chef who came out of the American military club. The patties are hand-formed, thick, and juicy, the milkshakes still follow the original recipe, and a basement play corner keeps kids busy — a taste of old-school Americana left over from Tianmu's GI days.",
    mustOrder: ["Cheeseburger", "Milkshake"],
  },
  "taipei-golden-formosa-taiwanese": {
    name: "Golden Formosa",
    area: "Tianmu",
    blurb:
      "A Tianmu East Road restaurant descended from Beitou's wine-house banquet tradition, holding a Michelin star year after year. The signature spare ribs are twice-fried for a crackling crust over tender meat; Buddha Jumps Over the Wall and crispy duck need pre-ordering — one of few old houses serving banquet-grade Taiwanese daily.",
    tips: "Reservations are near-essential for weekends and dinner; pre-order the big signature dishes when you book.",
    mustOrder: ["Crispy spare ribs", "Buddha Jumps Over the Wall", "Crispy duck"],
  },
  // ---------- Beitou ----------
  "taipei-ai-zai-cai-braised-pork-rice": {
    name: "Ai Zai Cai Braised Pork Rice",
    area: "Beitou Market",
    blurb:
      "A Beitou Market stall closing in on half a century, its braising sauce cooked to a lacquered black shine and its skin-heavy 'black gold' pork melting the instant it hits hot rice. CNN named it one of Taiwan's signature eats; it sells from morning until just past noon, and a thirty-minute weekday queue is simply the baseline.",
    tips: "Now in the zone D food court of the interim Beitou Market; closed Mondays, closes early once sold out.",
    mustOrder: ["Braised pork rice", "Braised cabbage", "Braised pork knuckle"],
  },
  "taipei-kao-chi-tea-shop": {
    name: "Kao Chi Tea House",
    area: "Beitou Market",
    blurb:
      "An old tea stand that has been boiling leaves beside Beitou Market since 1980, the stove never resting as black tea and the house 'worry-free' oolong-green blend brew in huge pots. Locals carry it off in knotted plastic bags for pocket change — after a market run, nearly every hand on the street swings one.",
    mustOrder: ["Worry-free blend tea", "Old-style black tea"],
  },
  // ---------- Western (French / steak / bistro) ----------
  "taipei-robuchon-latelier": {
    name: "L'Atelier de Joël Robuchon",
    area: "Xinyi District",
    blurb:
      "Joël Robuchon's Taipei outpost on the fifth floor of BellaVita, where a red-and-black counter rings the open kitchen and counter seats watch every dish get its finishing touches. Awarded two Michelin stars in 2025, the famously butter-rich mashed potatoes are a fixture, and the weekday business lunch is the gentlest way in.",
    tips: "Reservation only: online booking covers parties of up to four within 60 days; larger groups must phone.",
    mustOrder: ["Signature mashed potatoes", "Roast pigeon"],
  },
  "taipei-longtail-restaurant": {
    name: "Longtail",
    area: "Liuzhangli",
    blurb:
      "Chef Kin Lam's modern restaurant-bar pulls apart Taiwanese snacks — gua bao, scallion pancake — and rebuilds them with European and Southeast Asian technique as small plates for drinking. A Michelin one-star for years running, it serves past midnight, cocktails as serious as the food — Taipei's rare starred late-night room.",
    tips: "Closed Tuesdays; dinner service only, running into the small hours — the pick for a starred late-night meal.",
    mustOrder: ["Eel gua bao", "Wagyu tartare scallion pancake"],
  },
  "taipei-smith-wollensky": {
    name: "Smith & Wollensky",
    area: "Xinyi District",
    blurb:
      "The New York steakhouse's first Asian outpost, on the 47th floor of Breeze Nan Shan with floor-to-ceiling windows staring straight at Taipei 101. Beef is dry-aged in the house aging room — the bone-in ribeye comes charred outside and rosy within — and the towering coconut cake finale is a tradition fit for any celebration.",
    tips: "Next-month reservations open at noon on the 1st; grab window seats the moment booking opens.",
    mustOrder: ["Dry-aged bone-in ribeye", "Coconut cake"],
  },
  // ---------- Japanese (sushi / unagi / yakiniku) ----------
  "taipei-sushi-nomura": {
    name: "Sushi Nomura",
    area: "East District",
    blurb:
      "Chef Yuji Nomura's Edomae sushi den in a lane off Renai Road, where the rice is seasoned two ways — red vinegar or white — to match each fish, the aging and curing of each piece timed with precision. It held a Michelin star four years running and remains on the 2025 list; lunch and dinner are omakase only, all at the counter.",
    tips: "Reservation only with a deposit; closed Mondays. Seats are released monthly and go fast.",
    mustOrder: ["Omakase nigiri course"],
  },
  "taipei-kokuraya-unagi": {
    name: "Kokuraya",
    area: "Sun Yat-sen Memorial Hall",
    blurb:
      "The first overseas branch of Inaka-an, a century-old eel house from Kitakyushu, tucked in a lane off Guangfu South Road. The eel skips steaming, grilled straight over fire in Kyushu style — crisp skin, tender flesh — and the signature eel box is eaten in three acts: plain, with condiments, then doused in dashi as rice soup.",
    tips: "Expect waits at weekend mealtimes; crowds peak around the midsummer eel-eating days.",
    mustOrder: ["Unagi box three ways", "Unaju eel box"],
  },
  "taipei-hutong-yakiniku": {
    name: "Hutong Yakiniku",
    area: "East District",
    blurb:
      "The original shop of a yakiniku brand born in the East District's lanes, where staff grill Japanese A5 wagyu tableside, handling cuts, heat, and every flip. Open until midnight under its 'night eats' sign, it's the standby for late-night group dinners; of ten-plus branches islandwide, this original keeps the regulars' mood.",
    tips: "Reservations take a NT$500 per-person deposit; 90-minute seatings, with late slots for supper runs.",
    mustOrder: ["Japanese A5 wagyu", "Salted scallion beef tongue"],
  },
  // ---------- Cafes ----------
  "taipei-gabee-coffee": {
    name: "GABEE.",
    area: "Minsheng Community",
    blurb:
      "Opened in 2004 by Lin Dong-yuan, winner of Taiwan's first national barista championship, this Minsheng Community cafe is a birthplace of Taipei's creative coffee scene. The signature drinks are layered like small desserts, the coffee-bean-shaped waffle is the house emblem, and the back room hosts many a small gathering.",
    mustOrder: ["Signature coffee creations", "Coffee-bean waffle"],
  },
  "taipei-journey-kaffe": {
    name: "Journey Kaffe",
    area: "Neihu Technology Park",
    blurb:
      "A big neighborhood cafe on Neihu's Yangguang Street with no time limits and a power outlet at nearly every seat, known for wooden-bowl salads and fresh-baked thin-crust pizza. At the open creation kitchen you can build your own pizza and drinks; weekdays it fills with laptop tech workers, weekends with families and friends.",
    tips: "No reservations — scan the code at the door to queue on weekends; quietest right after the 9 a.m. opening.",
    mustOrder: ["Wooden-bowl salad", "Hand-made pizza"],
  },
  "taipei-sheme-house": {
    name: "SheMe House",
    area: "Xinbeitou",
    blurb:
      "A coffee-and-dessert house in a Xinbeitou lane, set in a Japanese-era grain barn with its lofty timber frame intact, pouring slow-roasted single-estate beans from its own roastery. Desserts use free-range eggs and small-farm produce, and the chocolate work has won international medals — made for a slow Beitou afternoon.",
    tips: "Opens at 1 p.m. on weekdays; no weekend reservations — join the walk-in wait.",
    mustOrder: ["Single-origin pour-over", "French pastries"],
  },
  // ---------- Korean & Thai ----------
  "taipei-baan-phadthai": {
    name: "Baan Phadthai",
    area: "Xinyi District",
    blurb:
      "A Bangkok pad thai specialist with a string of Bib Gourmand nods at home, its first overseas branch inside Xinyi's Shin Kong Mitsukoshi A8. The signature noodles are tossed in house-made tamarind sauce and topped with a hefty river prawn; tom yum and Thai milk tea follow the Bangkok recipes, and one main is a complete solo meal.",
    mustOrder: ["Pad thai", "Tom yum goong", "Thai milk tea"],
  },
  "taipei-samwon-garden": {
    name: "Samwon Garden",
    area: "Neihu Tanmei",
    blurb:
      "The Taipei branch of a forty-year Seoul barbecue house, set in Neihu's Tanmei with Korean chefs at the grill and refillable banchan handmade by Korean aunties. Marinated beef short ribs anchor the charcoal barbecue, finished the Seoul way with a bowl of ice-cold naengmyeon; prices run high, but it's the orthodox article.",
    tips: "Online bookings open 90 days out; parties of ten or more should phone.",
    mustOrder: ["Marinated beef short ribs", "Naengmyeon cold noodles"],
  },
  // ---------- Taiwanese (fine dining) ----------
  "taipei-fujin-tree-taiwanese": {
    name: "Fujin Tree Taiwanese Cuisine & Champagne",
    area: "Taipei Arena",
    blurb:
      "A restaurant polishing homestyle Taiwanese dishes — poached chicken, stir-fried 'fly's head' — and pairing them with champagne, in a room of greenery and vintage pieces in the Fujin Tree select-shop style. A Michelin one-star yearly since 2021; the fried rice lands mullet roe in every bite — take a foreign friend and look good.",
    tips: "Book ahead for busy hours; big feast dishes must be pre-ordered by phone three days before your meal.",
    mustOrder: ["Mullet roe fried rice", "Poached chicken", "Oysters with youtiao"],
  },
  // ---------- Wenshan (Jingmei / Muzha) ----------
  "taipei-yi-hsing-lou": {
    name: "Yi Hsing Pavilion",
    area: "Jingmei",
    blurb:
      "A Jingmei institution that began as the Yi Hsing public canteen in 1938, its signature golden coin shrimp cakes carrying a recipe from the wine-house kitchens of Japanese-era Dadaocheng. A former Bib Gourmand pick, it still plates crispy duck and egg-crisp glass noodle soup the old way — Wenshan's stalwart for family feasts.",
    tips: "Cash only; big dishes like crab sticky rice and Buddha Jumps Over the Wall need advance orders.",
    mustOrder: ["Golden coin shrimp cakes", "Crispy duck", "Crab sticky rice"],
  },
  "taipei-jingmei-tofu-pudding": {
    name: "Jingmei Tofu Pudding",
    area: "Jingmei Night Market",
    blurb:
      "A tofu pudding stall anchoring Jingmei Night Market for over forty years, selling from four in the afternoon to midnight; a whisper of smokiness in the pudding is its calling card. Toppings — honeyed taro, tapioca pearls, peanuts — are piled until the douhua nearly disappears, and the hot winter version queues just the same.",
    mustOrder: ["Mixed tofu pudding", "Hot tofu pudding"],
  },
  "taipei-san-lao-cun": {
    name: "San Lao Cun",
    area: "Muzha",
    blurb:
      "A third-generation Shandong eatery on Muzha Road whose name — 'three elders village' — comes from opera-school students' joke that three old men ran it. Shandong roast chicken, soy-braised trotters, and beef aspic sit in a self-serve cooler; add a plate of tender fish dumplings for Wenshan's homiest old mainlander cooking.",
    tips: "Closed Sundays; grab cold dishes straight from the cooler yourself and settle the bill at the end.",
    mustOrder: ["Shandong roast chicken", "Fish dumplings", "Soy-braised pork trotters"],
  },
  // ---------- Nangang ----------
  "taipei-nangang-laozhang-shaobing": {
    name: "Lao Zhang Charcoal Shaobing",
    area: "Nangang",
    blurb:
      "A charcoal-oven flatbread shop on Nangang's Zhongnan Street corner for thirty-odd years, slapping sourdough crusts straight onto the oven wall. The pepper bun hides a black pork filling that gushes when bitten; a repeat pick in Taiwan's '500 Bowls', regulars carry its sugar-paste and small flaky pastries home by the bagful.",
    tips: "Afternoon bake times draw the biggest crowds; come late and the pepper buns are often gone.",
    mustOrder: ["Pepper bun", "Sugar-paste flaky pastry", "Small flaky pastry"],
  },
  // ---------- Da'an (Linjiang / Tonghua) ----------
  "taipei-shijia-guabao": {
    name: "Shi Jia Guabao",
    area: "Linjiang Street Night Market",
    blurb:
      "A guabao shop that has folded steamed buns around braised pork in Tonghua Night Market for sixty years, the pickled mustard greens fried punchy and the peanut powder laid on thick. You pick your fat-to-lean ratio, and a bowl of four-herb soup rounds it into a meal — it opens by mid-morning, no waiting for the night market.",
    mustOrder: ["Mixed pork gua bao", "Four-herb soup"],
  },
  "taipei-luoji-stir-fry": {
    name: "Lo Chi Hsiao Chao",
    area: "Linjiang Street Night Market",
    blurb:
      "A stir-fry stall in the Linjiang night market lanes with barely a dozen dishes on the menu — sea snails, lamb, clams — all tossed over roaring flame for proper wok hei. A Bib Gourmand pick many years running, it runs five spice levels and cooks from evening to midnight — Tonghua's spot for plates that demand a cold beer.",
    tips: "Closed Mondays, opens at 5 p.m.; expect full tables and shared seating at the dinner peak.",
    mustOrder: ["Stir-fried sea snails", "Stir-fried lamb", "Stir-fried clams"],
  },
  // ---------- Da'an (coffee / beef noodles) ----------
  "taipei-rufous-coffee": {
    name: "Rufous Coffee Roasters",
    area: "Technology Building",
    blurb:
      "A roaster-cafe open since 2007, all dark timber bar and amber light, where the cold drip and espresso con panna are what the regulars order without looking at a menu. It has been named among Asia's 50 best coffee shops and joined a 2025 list of the world's top 100 — the elder statesman of specialty coffee in Da'an.",
    tips: "Closed Thursdays, opens at noon; seats are few, so aim for off-peak hours.",
    mustOrder: ["Cold drip coffee", "Single-origin pour-over", "Latte"],
  },
  "taipei-halal-beef-noodle": {
    name: "Halal Chinese Beef Noodles",
    area: "Sun Yat-sen Memorial Hall",
    blurb:
      "A halal beef noodle house founded in 1957 in a lane off Yanji Street, its clear broth from a beef-bone master stock that has barely left the fire in decades, the beef stewed soft yet holding its shape. A Bib Gourmand pick seven years running — insiders also order Peking-sauce shredded beef rolled in a fresh-griddled jin bing.",
    mustOrder: ["Clear broth beef noodles", "Jin bing flatbread", "Peking-sauce shredded beef"],
  },
  // ---------- Xinyi ----------
  "taipei-sung-chu-restaurant": {
    name: "Sung Kitchen",
    area: "Taipei City Hall",
    blurb:
      "A Peking duck house in a Xinyi lane that traces back to Taipei's Quanjude, roasting Yilan ducks the orthodox Beijing way — belly unopened — the owner still carving every bird himself after decades. A Bib Gourmand pick five years running, often called Taipei's toughest duck reservation; one duck, two ways is the standard order.",
    tips: "Closed Sundays and Mondays; book two to three weeks ahead, and always pre-order the duck.",
    mustOrder: ["Peking duck"],
  },
  // ---------- Neihu (Lane 737) ----------
  "taipei-dachenji-noodle": {
    name: "Da Chen Ji Noodles",
    area: "Neihu Lane 737",
    blurb:
      "A noodle shop in Neihu's Lane 737 open since 1989, whose signature vinegar noodles — bracingly sour and appetite-whetting — are a flavor you'll struggle to find elsewhere. The fresh-fried crispy pork and fried tofu land on nearly every table, and from morning to night the tiny room hums with tech-park workers and neighbors.",
    tips: "Closed Sundays; the lunch rush is wall-to-wall tech workers, so avoid high noon for a faster seat.",
    mustOrder: ["Vinegar noodles", "Fried crispy pork", "Fried tofu"],
  },
};
