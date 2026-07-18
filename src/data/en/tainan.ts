// English pack for src/data/cities/tainan.ts — keyed by canonical id.
// Rules: see docs/EN_GUIDE.md. mustOrder must align index-by-index with zh.
import type { EnRestaurantText } from "../types";

export const en: Record<string, EnRestaurantText> = {
  // ── Beef soup ───────────────────────────────────────────
  "tainan-wenchang-beef-soup": {
    name: "Wen Chang Beef Soup",
    area: "Anping",
    blurb:
      "An Anping specialist in warm, never-frozen beef soup: a broth of beef bones, vegetables, and a touch of Chinese herbs is poured over freshly sliced raw beef, and soup refills are free. It sits on Anping Road not far from the canal, seats a crowd, and runs late into the night — add minced beef rice for the standard Tainan meal.",
    tips: "Quieter near noon on weekdays or late at night; Anping Old Fort is within walking distance.",
    mustOrder: ["Beef soup", "Minced beef rice"],
  },
  "tainan-shijingjiu-beef-soup": {
    name: "Shi Jing Jiu Beef Soup",
    area: "Chihkan Tower Area",
    blurb:
      "A two-generation, fifty-plus-year beef soup shop that began at the Shijingjiu snack court on Minzu Road and now sits diagonally across from Chihkan Tower. Clear beef-bone broth scalds freshly cut warm beef to a perfect half-doneness, and since it only opens in the evening, locals and tourists end up sharing tables over soup.",
    tips: "Opens at 5 p.m. and closes when sold out; closed Mondays.",
    mustOrder: ["Beef soup", "Minced beef rice"],
  },
  "tainan-acun-beef-soup": {
    name: "A Cun Beef Soup (2nd Generation)",
    area: "Bao'an Road Area",
    blurb:
      "The Bao'an Road second-generation branch of Guohua Street's A Cun Beef Soup, opening at 4 a.m. as the first bowl of the day for many Tainan people. The broth runs darker with an amber sheen, the beef is thick-cut with real chew, stir-fried beef is there to pair with rice, and the Michelin Bib Gourmand nod comes year after year.",
    tips: "The beef is at its best in the early morning; Tuesdays it rests by day and opens only for the evening shift.",
    mustOrder: ["Beef soup", "Stir-fried beef"],
  },
  "tainan-chigo-beef-soup": {
    name: "Qi Ge Beef Soup",
    area: "Zhonghua North Road",
    blurb:
      "A warm-beef specialist on Zhonghua North Road with meat sent straight from the Shanhua slaughterhouse, selling from dawn to midnight — locals call it the convenience store of Tainan beef soup. Every bowl of soup comes with all-you-can-eat minced beef rice, and its own parking lot makes it a drive-in breakfast stop.",
    tips: "No slaughter on Tuesdays, so it opens in the afternoon; every other day it starts at dawn.",
    mustOrder: ["Beef soup", "Beef offal soup"],
  },

  // ── Wan guo ─────────────────────────────────────────────
  "tainan-fushenghao-wagui": {
    name: "Fu Sheng Hao Wan Guo",
    area: "Guohua Street Area",
    blurb:
      "A wan guo — savory steamed rice-bowl cake — institution selling since 1947 at the Yongle Market corner of Guohua Street and Minzu Road. The rice batter steams to a deep soy color around chunks of pork, shiitake, and charred shrimp; soy paste on top and swordfish thick soup alongside is the decades-old ritual.",
    tips: "The corner shop has upstairs seating; closed Mondays.",
    mustOrder: ["Wan guo (rice cake)", "Swordfish thick soup"],
  },
  "tainan-yiweipin-wagui": {
    name: "Yi Wei Pin Wan Guo & Fish Soup",
    area: "Guohua Street Area",
    blurb:
      "A wan guo and fish thick soup specialist on Guohua Street beside Yongle Market, steaming its rice-bowl cakes from 5 a.m. Each bowl hides charred shrimp and braised pork, with a softer, silkier texture than Fu Sheng Hao diagonally across the street — Tainan people split into camps, so try both and pick your side.",
    tips: "Closed Tuesdays; closes in the afternoon once sold out.",
    mustOrder: ["Wan guo", "Fish thick soup"],
  },

  // ── Stir-fried eel noodles ──────────────────────────────
  "tainan-ajiang-eel-noodles": {
    name: "A Jiang Stir-Fried Eel",
    area: "Guohua Street Area",
    blurb:
      "A street stall on Section 3 of Minzu Road that has been flash-frying eel over a roaring burner for more than forty years, all wok-breath and flame. The eel is butchered fresh and cut thick so it stays crunchy; have it dry-fried or over yi mian noodles in thickened sauce. The queue forms at 5 p.m. and only grows with the night.",
    tips: "Evening to midnight only; arriving before opening saves you a round of queuing.",
    mustOrder: ["Stir-fried eel noodles", "Dry-fried eel"],
  },
  "tainan-jinfu-eel-noodles": {
    name: "Jin Fu Stir-Fried Eel Specialist",
    area: "Confucius Temple Area",
    blurb:
      "An eel stir-fry house open since 1972 on Fuqian Road, a short walk from the Confucius Temple. The style is classic Tainan — caramelized, smoky, leaning sweet — with generous cuts of eel, and beyond the noodles there are stir-fries like sesame-oil kidney and pork heart that regulars order by the tableful with plain rice.",
    mustOrder: ["Stir-fried eel noodles", "Sesame oil kidney"],
  },

  // ── Shrimp rolls / coffin bread / oyster rolls ─────────
  "tainan-chou-shrimp-rolls": {
    name: "Chou's Shrimp Rolls",
    area: "Anping",
    blurb:
      "An Anping landmark that grew out of a banquet-catering business in 1965. The signature shrimp rolls wrap fresh charred shrimp and ground pork in pork caul fat before deep-frying — crisp shell, springy filling. The Anping Road flagship is roomy with easy parking, and frozen rolls can be shipped home to fry yourself.",
    tips: "Has its own parking lot; easy to pair with Anping Old Fort and the old street.",
    mustOrder: ["Shrimp rolls"],
  },
  "tainan-chikan-coffin-bread": {
    name: "Chikan Coffin Bread",
    area: "Zhongzheng Road Area",
    blurb:
      "The shop that invented coffin bread at the Sakariba food bazaar in 1942, now in its fourth generation. A thick slab of toast is deep-fried, hollowed out, filled with a creamy chicken-liver and seafood chowder, then capped with its own lid. Imitators abound across Taiwan, but the original still hides inside Kangle Market.",
    tips: "Tucked inside Kangle Market — enter from the Zhongzheng Road side.",
    mustOrder: ["Coffin bread", "Stir-fried eel noodles"],
  },
  "tainan-chen-oyster-rolls": {
    name: "Chen's Oyster Rolls",
    area: "Anping",
    blurb:
      "An old fried-snack house at the corner of Anping Road and Gubao Street, as famed as Chou's Shrimp Rolls. Its signature rolls tuck fresh oysters, chives, and ground pork into caul fat before frying, the oyster omelet and soup use local shellfish, and the two-story dining room spares you the old-street crush.",
    mustOrder: ["Oyster rolls", "Oyster omelet"],
  },

  // ── Desserts & drinks ───────────────────────────────────
  "tainan-tongji-douhua": {
    name: "Tongji Anping Douhua",
    area: "Anping",
    blurb:
      "The definitive Anping douhua (silken tofu pudding) shop, its Anbei Road flagship just minutes from the Anping Tree House and the fort. The pudding leans soft and velvety, in classic white or bamboo-charcoal black, topped with red beans or tapioca pearls or laced with lemon juice — the fixed finale to an Anping half-day.",
    mustOrder: ["Classic douhua", "Charcoal douhua"],
  },
  "tainan-yifeng-wintermelon-tea": {
    name: "Yi Feng A Chuan Winter Melon Tea",
    area: "Chihkan Tower Area",
    blurb:
      "A winter melon tea house dating to 1912 and now in its fifth generation, beside the Martial Temple across from Chihkan Tower. The winter melon syrup is still slow-simmered the old way, so the plain tea comes out gently sweet rather than cloying; add lemon or fresh milk, or carry home a winter melon brick to brew yourself.",
    mustOrder: ["Winter melon tea", "Winter melon lemon tea"],
  },
  "tainan-jiangshuihao-ice": {
    name: "Jiang Shui Hao",
    area: "Guohua Street Area",
    blurb:
      "A dessert institution founded in 1931 in the old West Market, now inside the Ximen Asakusa lane off Guohua Street. Everything in the eight-treasure ice — candied beans, tangyuan rice balls, the famous taro paste — is simmered by hand daily; winter brings hot sweet soups like rice porridge and peanut soup.",
    tips: "Taro paste ice often sells out early in summer; hot sweet soups arrive in winter.",
    mustOrder: ["Eight-treasure ice", "Taro paste ice"],
  },
  "tainan-ninao-soft-serve": {
    name: "NINAO Soft Serve",
    area: "Guohua Street Area",
    blurb:
      "A corner soft-serve stand that opened in a Zhengxing Street heritage house in 2012 and kick-started Taiwan's artisan soft-serve wave. Flavors change daily and follow seasonal ingredients; take a numbered ticket, wait for your call, then eat your cone strolling the old street corner — exactly the way it was designed to be eaten.",
    tips: "Take a numbered ticket and wait for your call; the day's flavors are posted on site.",
    mustOrder: ["Soft serve"],
  },
  "tainan-lin-white-sugar-cake": {
    name: "Lin Family Bai Tang Guo",
    area: "Guohua Street Area",
    blurb:
      "A little fried-dessert stall at the corner of You'ai and Guohua Streets, making just three things since 1960: bai tang guo — fried glutinous rice sticks rolled in white sugar — sweet potato puffs, and taro cakes. The dough is pulled and fried to order, crisp outside and soft inside, best eaten hot on the walk.",
    mustOrder: ["Bai tang guo", "Sweet potato puff", "Taro cake"],
  },
  "tainan-aqing-almond-tea": {
    name: "A Qing Traditional Desserts",
    area: "Bao'an Road Area",
    blurb:
      "A traditional sweet-soup shop on Bao'an Road whose almond tea is ground fresh from sweet apricot kernels and Penglai rice, simmered thick enough to cling to the spoon — no artificial flavoring. Dunking a crisp fried youtiao is the standard order, and the summer-only mung bean zhuan has its own loyal following.",
    tips: "Open from afternoon until late night; the late-supper hours draw the biggest crowd.",
    mustOrder: ["Almond tea with youtiao", "Mung bean zhuan"],
  },

  // ── Guohua Street / Bao'an Road snacks ─────────────────
  "tainan-jinde-spring-rolls": {
    name: "Jin De Spring Rolls",
    area: "Guohua Street Area",
    blurb:
      "A spring roll specialist working the corner of Guohua Street and Minzu Road since 1954. Wrappers are rolled and griddled on the spot, stuffed with cabbage, dried tofu, crispy egg, pork, and lima beans, then pressed seam-side down on the griddle until lightly charred. Around the Qingming festival the queue wraps past the corner.",
    tips: "Weekend lunch queues run longest; take away and eat beside Yongle Market.",
    mustOrder: ["Spring roll"],
  },
  "tainan-yeh-squid-rice-noodles": {
    name: "Yeh Family Squid Rice Noodles",
    area: "Guohua Street Area",
    blurb:
      "Founded in 1935 and credited as the originator of Tainan's squid rice noodles, now in its third generation and still selling that single dish. The thick brown-rice noodles are slippery with real bite, the broth leans entirely on the sweetness of fresh baby squid, and the Michelin Bib Gourmand nod only made the line longer.",
    tips: "Daytime only and often sold out by afternoon — go early.",
    mustOrder: ["Squid rice noodles"],
  },
  "tainan-aming-pig-heart": {
    name: "A Ming Pig Heart Vermicelli",
    area: "Bao'an Road Area",
    blurb:
      "Bao'an Road's late-night offal specialist, going on seventy years. Sliced pig heart is warmed gently in a double-boiler jar to keep it crisp-tender before joining the glass-noodle soup; bone marrow and kidney soups share the marquee. The owner's knack for memorizing orders without writing is as famous as his Bib Gourmand.",
    tips: "Evening service only from 5 p.m., and the queue persists deep into the night.",
    mustOrder: ["Pig heart vermicelli", "Bone marrow soup"],
  },
  "tainan-afeng-milkfish-geng": {
    name: "A Feng Milkfish Thick Soup",
    area: "Bao'an Road Area",
    blurb:
      "Over sixty years in business and grown from a roadside stall into a shopfront, it has sold exactly one thing all along: 'floating' milkfish geng. Chunks of milkfish wrapped in fish paste are boiled until they float, then served in lightly thickened broth with cilantro and black vinegar, from breakfast until midnight.",
    mustOrder: ["Milkfish thick soup"],
  },
  "tainan-chunxianfang-guoshao-noodles": {
    name: "Chun Xian Fang Guoshao Noodles",
    area: "Bao'an Road Area",
    blurb:
      "An old-school guoshao yi mian shop on Bao'an Road that fires up at 6 a.m. Deep-fried noodles steep in a naturally sweet bonito broth until they drink up the soup, then get topped with shrimp, clams, and fish cake. Prices have stayed modest for decades, which is why locals eat here from morning straight through to night.",
    mustOrder: ["Guoshao noodle hot pot"],
  },
  "tainan-baoan-migao": {
    name: "Bao'an Road Migao",
    area: "Bao'an Road Area",
    blurb:
      "A migao (savory sticky rice) veteran that began as a shoulder-pole stall in 1961 before settling on Bao'an Road. Long-grain glutinous rice is steamed through, dressed with braised pork sauce, and piled with fish floss, peanuts, and pickled cucumber; add four-herb soup or braised meatball soup — in Tainan this is a proper meal.",
    mustOrder: ["Migao (sticky rice)", "Four-herb soup"],
  },
  "tainan-atang-porridge": {
    name: "A Tang Savory Congee",
    area: "Bao'an Road Area",
    blurb:
      "A third-generation savory congee shop by the Xiaoximen roundabout, opening at dawn and selling out around noon. The half-porridge, half-soup bowl is loaded with milkfish belly, fish skin, oysters, and chunks of Spanish mackerel. It is one of the priciest congees in all Tainan, and the crowd has never thinned because of it.",
    tips: "Closed Tuesdays; be there at opening if you want the fish intestines or fish head.",
    mustOrder: ["Mixed fish congee"],
  },
  "tainan-aizaicheng-shrimp-rice": {
    name: "Ai Zai Cheng Shrimp Rice",
    area: "Bao'an Road Area",
    blurb:
      "The original shrimp rice shop, founded in 1922 by Yeh Cheng after training in a Japanese restaurant. Charred shrimp and scallions are stir-fried until fragrant, then laid over rice braised through with bonito stock; the classic pairing is a soft-cooked duck egg soup. A century on, it remains an old-Tainan standard.",
    mustOrder: ["Shrimp rice", "Duck egg soup"],
  },

  // ── Classic houses & Taiwanese banquet ──────────────────
  "tainan-du-hsiao-yueh-danzai": {
    name: "Du Hsiao Yueh",
    area: "Zhongzheng Road Area",
    blurb:
      "In 1895 fisherman Hung Yu-tou began peddling noodles to tide over the slack fishing season — both the name Du Hsiao Yueh and the term danzai noodles trace back to him. The old Zhongzheng Road shop keeps the low stove and small bowls: shrimp broth under a century-old braised pork sauce, a modest portion that is the original form.",
    tips: "No. 16 Zhongzheng Road is the original shop; No. 101 is the flagship.",
    mustOrder: ["Danzai noodles"],
  },
  "tainan-zaifahao-zongzi": {
    name: "Zai Fa Hao",
    area: "Chihkan Tower Area",
    blurb:
      "Founded in 1872 and run by four generations, Tainan's oldest surviving zongzi (sticky rice dumpling) shop. The signature eight-treasure zongzi packs in abalone, dried scallop, crispy flounder, and salted egg yolk — one huge dumpling is a full meal. Around the Dragon Boat Festival, queue or pre-order.",
    tips: "The eight-treasure zongzi is huge — just right for two to share.",
    mustOrder: ["Eight-treasure zongzi"],
  },
  "tainan-lily-fruit": {
    name: "Lily Fruit Shop",
    area: "Confucius Temple Area",
    blurb:
      "A fruit parlor open since 1947 directly opposite the Confucius Temple, its arcade seats forever full of people eating ice. Cut-fruit plates, fruit ices, and fresh juices rotate with the seasons, and the tomato plate with its ginger-sugar soy paste dip is the Tainan custom that startles out-of-towners most.",
    mustOrder: ["Fresh fruit plate", "Fruit shaved ice"],
  },
  "tainan-fuji-rouyuan": {
    name: "Fu Ji Rou Yuan",
    area: "Confucius Temple Area",
    blurb:
      "A steamed rou yuan (Taiwanese meatball dumpling) specialist of forty-plus years near the Confucius Temple, the deliberate opposite of Changhua's deep-fried school. The rice-batter skin steams up soft and slippery around a whole piece of braised pork leg, and a free help-yourself pork-bone broth rinses the savory finish.",
    mustOrder: ["Steamed rou yuan"],
  },
  "tainan-axia-restaurant": {
    name: "A Sha Restaurant",
    area: "Chihkan Tower Area",
    blurb:
      "A Taiwanese restaurant that started as a street stall in 1940, tucked in a lane off Zhongyi Road. The crab sticky rice is its calling card: glutinous rice steamed glossy with crab roe, a whole mud crab laid on top. With the mullet roe platter and other hand-crafted dishes, it remains the face of Tainan banquet cooking.",
    tips: "Pre-order the crab sticky rice when you reserve; closed Mondays.",
    mustOrder: ["Crab sticky rice", "Mullet roe platter", "Casserole duck"],
  },
  "tainan-amei-restaurant": {
    name: "A Mei Restaurant",
    area: "Chihkan Tower Area",
    blurb:
      "An old-line Taiwanese restaurant that began as the Le Mei snack shop in the Central Market and moved to its Minquan Road home in 1981. The signature casserole duck is coaxed over charcoal for three full hours until the meat is tender yet intact and the broth runs deep — a perennial Bib Gourmand pick, and a winter table ritual.",
    tips: "The casserole duck is limited each day — reserve one when you book.",
    mustOrder: ["Casserole duck", "Crab sticky rice"],
  },
  "tainan-futai-fanzhuo": {
    name: "Fu Tai Fanzhuo (3rd Generation)",
    area: "Chihkan Tower Area",
    blurb:
      "A third-generation heir to a 1939 fanzhuo — Tainan's rice-table eateries where fresh dishes line the counter and you point at what you want. Pan-fried milkfish belly, braised pork, and vegetables pair with braised pork rice, and this uniquely Tainan way of eating earns the Bib Gourmand year after year.",
    tips: "Fullest spread at lunchtime; closed Sundays and Mondays.",
    mustOrder: ["Braised pork rice", "Fried milkfish belly"],
  },
  "tainan-howchou-shacha-hotpot": {
    name: "Xiao Hao Zhou Shacha Hot Pot",
    area: "Zhongzheng Road Area",
    blurb:
      "A Shantou-style shacha hot pot house in a lane off Zhongzheng Road for over half a century. The base is a light dried-flounder stock; the soul is the house-roasted shacha (savory barbecue) sauce. Handmade fish dumplings, fish rolls, and platters of fresh beef are standard issue — a classic Tainan group dinner.",
    tips: "Often full at mealtimes — book ahead for larger groups.",
    mustOrder: ["Shacha beef hot pot", "Handmade fish dumplings"],
  },

  // ── Bakeries & souvenirs ────────────────────────────────
  "tainan-jiulaifa-bakery": {
    name: "Jiu Lai Fa Bakery",
    area: "Da Guanyin Temple Area",
    blurb:
      "A six-generation bakery open since 1875, across from Kaiji Tianhou Temple on Ziqiang Street. Its brown-sugar pong bing — hollow, shatteringly crisp dome pastries — are what Tainan families fry with sesame oil and egg as a postpartum treat. A warm bagful bought at the temple gate is a more local souvenir than any pineapple cake.",
    tips: "Pong bing come out of the oven at irregular times; once a batch is gone, you wait for the next.",
    mustOrder: ["Brown sugar pong bing", "Traditional pastries"],
  },
  "tainan-klin-baozi": {
    name: "Klin Taiwan Bao",
    area: "Confucius Temple Area",
    blurb:
      "A bun shop facing the Confucius Temple that began postwar as a grocery for American imports, then spent sixty years steaming Taiwanese-style baozi. The eight-treasure pork bun stuffs in shiitake, salted egg yolk, chestnut, and braised pork — one bun is a meal — and pong bing and retro pastries fill the shelves for gifting.",
    tips: "Buns come freshly steamed to eat now, or frozen for home delivery.",
    mustOrder: ["Eight-treasure pork bun", "Pong bing"],
  },

  // ── Heritage-house cafes (R2) ───────────────────────────
  "tainan-kantan-cafe": {
    name: "Kantan Cafe",
    area: "Kailong Temple Area",
    blurb:
      "An old-house cafe in the lanes off Section 2 of Minquan Road, next to Kailong Temple — one of the shops that defined Tainan's heritage-house coffee scene. Hand-brewed single origins come with homemade desserts, there is no time limit, and idling by the temple courtyard is Tainan's slow rhythm distilled.",
    tips: "The entrance is easy to miss — walk in via Lane 4, Section 2 of Minquan Road.",
    mustOrder: ["Pour-over single origin", "Handmade desserts"],
  },
  "tainan-paripari-apt": {
    name: "Paripari apt.",
    area: "Xinmei Street Area",
    blurb:
      "A pawnshop of forty-plus years reborn as a three-story retro compound: Showa-era select goods and vintage sundries on the first floor, coffee and desserts by St.1 Cafe on the second, a guesthouse on top. The Japanese-Taiwanese nostalgic styling is fastidious throughout — order a coffee and lose an afternoon among old things.",
    tips: "The cafe is on the second floor; browse the ground-floor select shop before you leave.",
    mustOrder: ["Pour-over coffee", "Seasonal dessert"],
  },
  "tainan-kadoya-kissaten": {
    name: "KADOYA Kissaten",
    area: "Shulin Street",
    blurb:
      "A Japanese-style kissaten and patisserie open since 2013, its dark wood counter and low amber light bringing the whole Showa tearoom mood to east Tainan — the drama 'The Making of an Ordinary Woman 2' shot scenes here. The lemon tart is bright and sharp against a hand-brewed coffee, and queues form before the door opens.",
    tips: "Closed Tuesday through Thursday; NT$200 minimum per person; no phone reservations.",
    mustOrder: ["Lemon tart", "Pour-over coffee"],
  },

  // ── Western & French-Italian (R2) ───────────────────────
  "tainan-principe-french": {
    name: "Principe",
    area: "Tainan Park Area",
    blurb:
      "The chef was sous chef at a one-Michelin-star restaurant in France before returning to frame Tainan ingredients with French technique, and the restaurant has made the Michelin selection every year since the guide reached Tainan in 2022. A small, reservation-only tasting-menu room hidden on Xihua Street near Tainan Park.",
    tips: "Fully reservation-based with a deposit — book online well ahead.",
    mustOrder: ["Chef's tasting menu"],
  },
  "tainan-corner-steak-house": {
    name: "Corner Steak House",
    area: "NCKU Area",
    blurb:
      "A western restaurant in a lane off Daxue Road by NCKU since 1995 — for Tainan locals, the byword for old-school steak dinners. The signatures are US New York strip charcoal-grilled over volcanic stone and lobster dishes; weekday and weekend lunches bring a gentler-priced business set, and family celebrations keep the room full.",
    tips: "Book ahead for celebration dinners; the lunch business set is the affordable way in.",
    mustOrder: ["Charcoal NY strip steak", "Lobster dishes"],
  },
  "tainan-lherbe-bistro": {
    name: "L'herbe Bistro",
    area: "Anping",
    blurb:
      "A small European set-menu bistro on Yonghua Road in Anping, where both the chef and the pastry chef trained at the Robuchon restaurant in Taipei. Local Tainan ingredients are worked into rigorously structured French courses, with house-fermented kombucha offered alongside — yet the room feels as relaxed as a family dining spot.",
    tips: "Set menus only and seats are few — reserve before you go.",
    mustOrder: ["Chef's tasting menu", "House-brewed kombucha"],
  },
  "tainan-hara-peko": {
    name: "HARA PEKO",
    area: "Snail Alley",
    blurb:
      "A French-Japanese spot in Snail Alley with counter seats along an open kitchen, so you watch the chef plate each course. The set menu changes monthly with a sake pairing list, and it earned a Michelin Bib Gourmand in 2024. Small, warm, and paced for lingering — built for a slow date-night dinner rather than a quick bite.",
    tips: "Sets are by advance booking and seats are few — always reserve before heading over.",
    mustOrder: ["French-Japanese set menu"],
  },

  // ── Japanese & yakiniku (R2) ────────────────────────────
  "tainan-mao-don": {
    name: "Mao Don",
    area: "Dongrong Street",
    blurb:
      "A donburi specialist in a renovated old house off Dongrong Street. The namesake Mao don arrives in a wooden tub, sashimi and seafood heaped until the vinegared rice disappears — generous to eye and stomach alike. Cooked bowls like the egg-topped pork don cover non-raw eaters, and reservations are near mandatory at mealtimes.",
    tips: "Book ahead — only a handful of walk-in seats are held back.",
    mustOrder: ["Mao don (seafood bowl)", "Tsukimi pork bowl"],
  },
  "tainan-tanzuomali-yakiniku": {
    name: "Tanzuo Mali Yakiniku (Xinxing)",
    area: "Xinxing Road",
    blurb:
      "The flagship campus of southern Taiwan's favorite yakiniku brand, opened in late 2024: a bare-concrete complex on over two hectares, billed as the world's largest barbecue park. Beyond wagyu at every grade, regulars close with stone-pot garlic rice and the dessert ices. Underground parking helps; tables are fought over.",
    tips: "Book online via inline for parties up to 8; call the hotline for 9 or more.",
    mustOrder: ["Wagyu yakiniku", "Stone-pot garlic rice"],
  },
  "tainan-nanasen-kappo": {
    name: "Nanasen Kappo",
    area: "T.S. Mall Area",
    blurb:
      "A counter-style kappo restaurant in an east-district lane, flying in seasonal fish from across Japan — Kyushu striped beakfish and Kasumi kobako crab have both surfaced on the menu. Evenings are reservation-only omakase; lunch swings affordable with nigiri and eel rice sets. Book early to sit at the counter and watch the work.",
    tips: "Evening omakase requires a reservation; lunch sets are the gentler-priced entry.",
    mustOrder: ["Omakase course", "Nigiri sushi"],
  },

  // ── Group dinners & no-menu (R2) ────────────────────────
  "tainan-zhuxinju-tasting": {
    name: "Zhu Xin Ju",
    area: "Shennong Street Area",
    blurb:
      "A reservation-only, no-menu Taiwanese table inside a Qing-dynasty house on Xinyi Street. From NT$500 a head you get seven dishes and a soup decided by that day's market run — old-style handcraft cooking amid a houseful of antiques. No walk-ins, tables open for two or more only, and the 2025 Bib Gourmand made seats scarcer still.",
    tips: "Strictly reservation-only with no walk-ins; stroll Shennong Street after dinner.",
    mustOrder: ["No-menu Taiwanese feast"],
  },
  "tainan-good-hunan-cuisine": {
    name: "You Ni Zhen Hao Hunan Cuisine",
    area: "Wufei Street Area",
    blurb:
      "A Hunan restaurant on Wufei Street from the group behind yakiniku brand Tanzuo Mali. Its fiery, aromatic Hunanese cooking stands alone in snack-dominated Tainan and has made the Michelin selection year after year. Mao's red-braised pork and farmhouse stir-fried pork empty rice bowls fast — bring a crowd and order big.",
    tips: "Flavors run hot and sour — ask about spice levels before ordering if you are spice-shy.",
    mustOrder: ["Mao's red-braised pork", "Farm stir-fried pork"],
  },
  "tainan-jinxia-restaurant": {
    name: "Jin Xia Lou",
    area: "T.S. Mall Area",
    blurb:
      "A brand founded by the third generation of A Sha Restaurant and named after founder Wu Jin-xia, on the second floor of the T.S. Mall. Crab sticky rice, mullet roe, and other signatures carry the mother house's technique into a modern room where booking and parking are painless — Tainan banquet food brought into the mall.",
    tips: "On level 2 of the T.S. Mall — easy to fold into a shopping or movie outing.",
    mustOrder: ["Crab sticky rice", "Mullet roe"],
  },
  "tainan-gyugozou-beef": {
    name: "Gyu Gozou",
    area: "Anping",
    blurb:
      "A warm-beef specialist founded in 2018 in a stand-alone Japanese-style building in Anping, serving hot pot with beef sliced to order and pioneering salt-grilled beef offal — Tainan's beef restaurant recast as an izakaya. It has made the Michelin selection year after year and serves until 11 p.m., late enough for supper.",
    tips: "Closed Mondays (open on public holidays); service runs to 11 p.m.",
    mustOrder: ["Fresh-cut beef hot pot", "Salt-grilled beef offal"],
  },

  // ── More beef soup & hot pot (R4) ───────────────────────
  "tainan-yige-beef-soup": {
    name: "Yi Ge Beef Soup",
    area: "Yunong Road",
    blurb:
      "A 24-hour warm-beef house on Yunong Road where soup shares the menu with stir-fries and sliced platters, so a full table is possible even in the small hours. Beef arrives from the Shanhua meat market in batches, and a midnight bowl of fresh-sliced beef soup with braised pork rice is a fixture of east Tainan's supper circuit.",
    tips: "Open 24 hours year-round; add the table-side rice wine to your soup for extra aroma.",
    mustOrder: ["Beef soup", "Beef with Chinese kale", "Braised pork rice"],
  },
  "tainan-liuqian-beef-soup": {
    name: "Liu Qian Beef Soup",
    area: "Hai'an Road Area",
    blurb:
      "The Hai'an Road beef soup name where numbered tickets go out before dawn: sales start at 5 a.m. and end when the morning's beef runs out. Each order is sliced on the spot and scalded just past raw by boiling broth — the first pot of the day is the richest. The sign now reads Liu Qian Hong Zuo, but locals still just say Liu Qian.",
    tips: "Numbered tickets start going out past 3 a.m.; closed Monday through Wednesday.",
    mustOrder: ["Beef soup", "Beef offal soup"],
  },
  "tainan-acai-beef-soup": {
    name: "A Cai Beef Soup",
    area: "Anping Old Fort Area",
    blurb:
      "A warm-beef soup shop beside Anping Old Fort serving from noon into the evening, filling the hours after most beef-soup houses close their dawn shifts. The beef is delivered daily and sliced per order, the broth runs clean and sweet, the meat scalded to a perfect blush — and even on a tourist trail, locals keep showing up.",
    tips: "The original by the Gubao Street corner opens at noon; there are branch shops as well.",
    mustOrder: ["Beef soup", "Braised pork rice"],
  },
  "tainan-hongniu-beef-hotpot": {
    name: "Hong Niu Beef Hot Pot",
    area: "Blueprint Park Area",
    blurb:
      "A warm-beef hot pot house on Ximen Road in the South District, its beef delivered daily from the Shanhua meat market into a broth kept light and naturally sweet. The house invention, an elaborate red-braised oxtail pot, is the other signature beyond the classic beef swish, and Taiwanese stir-fries round out a group table.",
    tips: "Lunch and dinner services; closed Tuesdays; there is another branch in Anping.",
    mustOrder: ["Fresh beef hot pot", "Braised oxtail pot"],
  },

  // ── Anping deep cuts (R4) ───────────────────────────────
  "tainan-wang-fish-skin": {
    name: "Wang's Fish Skin",
    area: "Anping Road",
    blurb:
      "A milkfish specialist on Anping Road that opens at 4 a.m., its fish killed before dawn and delivered from the family's own ponds. Fish skin soup and savory congee with pan-fried fish intestines is the traditional Anping breakfast in full, recognized with a Michelin Bib Gourmand — the intestines usually sell out early.",
    tips: "Arrive right at opening for the fried fish intestines; cash only.",
    mustOrder: ["Milkfish skin soup", "Fried fish intestines", "Milkfish congee"],
  },
  "tainan-maoji-black-douhua": {
    name: "Mao Ji Anping Black Douhua",
    area: "Anbei Road",
    blurb:
      "The Anbei Road shop where black douhua was invented: in 2001 the owner, a retired marine frogman, first made tofu pudding from green-kernel black soybeans. The craft follows a three-generation family method, the black-bean fenguo jelly and mochi are made in-house, and dine-in comes with a cup of house-brewed black bean tea.",
    tips: "The Anping shop is near the Anping Tree House; the main shop is on Minquan Road.",
    mustOrder: ["Black soybean douhua", "Black soybean mochi"],
  },
  "tainan-yongtaixing-mijian": {
    name: "Lin Yong Tai Xing Preserved Fruits",
    area: "Anping Old Street",
    blurb:
      "A preserved-fruit shop founded in 1886 and run by four generations, its century-old house on Yanping Old Street still holding great Qing-era pickling urns. Dozens of varieties, dry and moist, sell at a single flat price, the heirloom recipes carrying a licorice perfume — on weekends the line spills into the street.",
    tips: "Closed Tuesdays and Wednesdays, no shipping offered; popular flavors go early.",
    mustOrder: ["Aged dark plum", "Iced green mango", "Pickled green mango"],
  },
  "tainan-elate-pudding": {
    name: "Elate Pudding",
    area: "Anping Road",
    blurb:
      "A souvenir dessert brand built on fresh-milk pudding and panna cotta, its Anping Road shop near Chou's Shrimp Rolls — an easy grab on the Anping half-day circuit. The pudding is all silky custard and once made Tainan's top-ten souvenir list, while the French sugar-pearl puffs hold an international taste-award certification.",
    tips: "Also sold at HSR-station convenience stores, but the shop carries the fullest range.",
    mustOrder: ["Fresh milk pudding", "Sugar-pearl puff"],
  },
  "tainan-guiji-food-house": {
    name: "Gui Ji Food House",
    area: "Anping Old Street",
    blurb:
      "A snack house in the Yang family's ancestral home on Yanping Old Street, keeping the horseback-ridge roofline and a hand-dug Japanese-era air-raid shelter you can visit. Ding bian suo — thin sheets griddled from aged-rice slurry, served in seafood stock — headlines, with shrimp rou yuan and the family taro cake in one stop.",
    tips: "Weekdays it opens only over lunch; on weekends it runs to early evening.",
    mustOrder: ["Ding bian suo", "Shrimp rou yuan", "Taro cake"],
  },

  // ── Market stalls (R4) ──────────────────────────────────
  "tainan-yamuliao-apo-pudding": {
    name: "Yamuliao Granny Pudding",
    area: "Yamuliao Market",
    blurb:
      "An old-style pudding stand by the entrance of Yamuliao Market — officially registered as Hong Ji Foods, though everyone says Granny Pudding. The recipe is nothing but egg, milk, and caramel with no additives, which is why it keeps only three days chilled. Beyond the small cups there is a giant version ordered ahead.",
    tips: "Sells from 7 a.m. until noon; closed Mondays along with the market.",
    mustOrder: ["Caramel pudding"],
  },
  "tainan-yamuliao-charcoal-noodles": {
    name: "Yamuliao Charcoal Noodles",
    area: "Yamuliao Market",
    blurb:
      "A signless yi mian stall in the aisles of Yamuliao Market whose big pot of minced pork sauce still cooks directly over charcoal — hence the nickname, charcoal noodles. Noodles soaked in the smoke-tinged pork sauce make the whole bowl; add a NT$10 old-style black tea and the market-run brunch is solved in passing.",
    tips: "Deep inside the market — turn left down the aisle beside the Granny Pudding stand.",
    mustOrder: ["Charcoal yi mian", "Old-style black tea"],
  },
  "tainan-shuixiangong-migao": {
    name: "Shuixiangong Leaf-Wrapped Migao",
    area: "Shuixiangong Market",
    blurb:
      "A migao stall beside Shuixian Temple since 1956, opening in the late afternoon and selling past midnight. Long-grain sticky rice steams inside zongzi leaves so the fragrance hits the moment you unwrap it, then gets braised pork sauce, crispy swordfish floss, and peanuts — a fixture of old Tainan's late-night circuit.",
    tips: "Opens at 4 p.m. with very few tables — most people take it to go.",
    mustOrder: ["Leaf-wrapped migao", "Four-herb soup"],
  },
  "tainan-miantiaowang-seafood-noodles": {
    name: "Mian Tiao Wang Seafood Noodles",
    area: "Shuixiangong Market",
    blurb:
      "A seafood noodle stall reached from the Hai'an Road side entrance of Shuixiangong Market, each bowl loaded with baby squid, pork liver, pork slices, and a braised egg. The signature is three ways to eat it — soup, dry, or dry with a separate seafood soup. Pay first, take a number, and join a queue that forms daily even here.",
    tips: "Runs 8 a.m. to 2 p.m.; closed Mondays.",
    mustOrder: ["Seafood noodles", "Seafood soup"],
  },
  "tainan-ershixiong-luwei": {
    name: "Er Shi Xiong Lu Wei",
    area: "Dadong Night Market",
    blurb:
      "A cold lu wei (soy-braised snack) stall born of Tainan's night markets, braising every ingredient in its own pot — at peak twenty to thirty pots go at once. It sets up in the old Dadong Night Market blocks on Mondays and Tuesdays; spicy dried tofu, chicken feet, and duck wings lead, and a Guohua Street shopfront now runs too.",
    tips: "Dadong Night Market opens Mon/Tue/Fri; this stall appears Mondays and Tuesdays.",
    mustOrder: ["Spicy dried tofu", "Braised chicken feet", "Braised duck wings"],
  },

  // ── North & east district staples (R4) ──────────────────
  "tainan-liandetang-crackers": {
    name: "Lian De Tang Crackers",
    area: "Chong'an Street Area",
    blurb:
      "A handmade cracker bakery whose founder apprenticed with a Japanese master in the colonial era, hidden in a Chong'an Street lane under its fourth generation. The vintage round press runs daily on a batter made without a drop of water; each customer may buy two packs a day, and peanut or sesame flavors book out months ahead.",
    tips: "Only the egg and miso flavors are sold on-site — arrive late and you leave empty-handed.",
    mustOrder: ["Egg crackers", "Miso crackers"],
  },
  "tainan-xiaomaowu-guoshao": {
    name: "Xiao Mao Wu",
    area: "NCKU Area",
    blurb:
      "A guoshao yi mian veteran that began as a fruit-ice parlor in 1977, now on Changrong Road beside the NCKU dormitories. Fried noodles meet a clean broth made without shacha sauce, and the local move is to add an old-style black tea; douhua and shaved ice share the same menu, with hours running from morning to midnight.",
    tips: "Closed on the 1st and 15th of each month; the Changrong Road shop is the original.",
    mustOrder: ["Guoshao noodle hot pot", "Old-style black tea"],
  },
  "tainan-kaiyuan-milkfish": {
    name: "Kaiyuan Road No-Name Milkfish",
    area: "Kaiyuan Road Area",
    blurb:
      "A nameless milkfish stall under a green-and-white tarp in a Kaiyuan Road arcade, opening at 6 a.m. for close to half a century. Fish skin, belly, and fish balls mix and match with braised pork rice in the north district's breakfast formula; it held the Michelin Bib Gourmand for years, so expect a peak-hour queue.",
    tips: "Cash only; sells until 1:30 p.m.; days off are irregular.",
    mustOrder: ["Milkfish skin soup", "Fish belly soup", "Braised pork rice"],
  },
  "tainan-roubo-turkey-rice": {
    name: "Rou Bo Turkey Rice",
    area: "Wu Garden Area",
    blurb:
      "A turkey rice specialist that started as a Gongyuan Road stall in 1981, said to be the first shop in Tainan to sell the dish. The turkey is hand-shredded and slicked with poultry fat under a sweet-savory sauce that never overwhelms; it now runs air-conditioned shops reaching Taipei, but the original stays on Gongyuan Road.",
    tips: "Near Tang Te-chang Park and the Wu Garden; open for lunch and dinner services.",
    mustOrder: ["Turkey rice", "Dried-fish cabbage soup"],
  },
  "tainan-laozeng-lamb": {
    name: "Lao Zeng Lamb",
    area: "Wu Garden Area",
    blurb:
      "A lamb specialist on Minzu Road for over fifty years, risen from a night-market stall to a shop that serves from morning until 11 p.m. The warm, never-frozen lamb is handled so cleanly there is no trace of gaminess; wok-seared lamb with Chinese kale alongside lamb rice is the signature, recognized with a Michelin Bib Gourmand.",
    tips: "Hours are long — visit off-peak and you will not wait for a table.",
    mustOrder: ["Lamb with Chinese kale", "Angelica lamb soup"],
  },

  // ── Late-night eats (R4) ────────────────────────────────
  "tainan-yuejin-porridge": {
    name: "Yue Jin Savory Congee",
    area: "Ximen Roundabout Area",
    blurb:
      "A 24-hour congee shop beside the Ximen roundabout that does not close even on Lunar New Year's Eve, drawing one crowd at dawn and another after midnight. The soupy mixed congee carries milkfish and oysters, best with a fresh-fried youtiao dropped in to soak — the blue-and-white storefront announces itself from a block away.",
    tips: "Open year-round; even in the small hours the bowls come freshly cooked.",
    mustOrder: ["Mixed fish congee", "Youtiao (fried dough)"],
  },
  "tainan-dayong-porridge": {
    name: "Dayong Street No-Name Congee",
    area: "Dayong Street",
    blurb:
      "A congee shop in a residential tin-roofed house with no sign at all, selling from 4 a.m. until it runs out shortly after noon. The clear-broth mixed congee comes packed with milkfish and fresh oysters, two people eat for little over NT$100, and word of mouth alone has kept it on the Michelin Bib Gourmand list year after year.",
    tips: "Closed Mondays; arrive at opening for the full range of toppings.",
    mustOrder: ["Mixed fish congee", "Fish skin soup"],
  },
  "tainan-yidian-guabao": {
    name: "Yi Dian Gua Bao",
    area: "NCKU Area",
    blurb:
      "A gua bao (steamed bun sandwich) shop on Xiaodong Road that opens at 9:30 p.m., the late-night canteen for NCKU students. Braised pork balanced between lean and fatty meets pickled mustard greens, peanut powder, and cucumber — NT$45 even with an egg — plus egg crepes and soy milk, and the crowd swells toward dawn.",
    tips: "Runs into the small hours; expect a short queue at the supper peak.",
    mustOrder: ["Gua bao with egg", "Egg crepe"],
  },
  "tainan-fucheng-saokao-bbq": {
    name: "Fucheng Saokao BBQ",
    area: "Tainan Rear Station Area",
    blurb:
      "A Taiwanese charcoal-grill supper house on Qianfeng Road behind the train station, firing from 6 p.m. to 1 a.m. since 2008. The charcoal-grilled mud crab, served year-round, is the house emblem, with salt-scallion beef tongue and wooden-tub lard rice as regulars' fixtures — the kind of place a whole table books after work.",
    tips: "Closed Tuesdays; book ahead for larger groups.",
    mustOrder: ["Charcoal-grilled crab", "Salt-scallion beef tongue", "Lard rice"],
  },
  "tainan-shengli-breakfast": {
    name: "Sheng Li Breakfast",
    area: "NCKU Area",
    blurb:
      "A Chinese breakfast shop beside NCKU for over fifty years — except it now opens at 4 p.m. and serves until 4 a.m., breakfast at supper hours being its trademark inversion. The pork chop egg crepe is griddled to order with shredded cabbage, joined by Shandong scallion cake and soy milk, and the midnight queue is mostly students.",
    tips: "Closed Mondays; the crowd only thins toward the pre-dawn close.",
    mustOrder: ["Pork chop egg crepe", "Shandong scallion cake", "Soy milk"],
  },

  // ── Heritage cafes & teahouse (R4) ──────────────────────
  "tainan-narrow-door-cafe": {
    name: "Narrow Door Cafe",
    area: "Confucius Temple Area",
    blurb:
      "A cafe on the second floor of a century-old wooden shophouse opposite the Confucius Temple since 1990, entered through an alley about 38 centimeters wide — you shuffle in sideways. The name nods to Andre Gide's 'Strait Is the Gate'; the house was once a Japanese-era doctor's home, and window seats face the temple's red wall.",
    tips: "The entrance is a slit between the arcades on Nanmen Road; closed Wednesdays.",
    mustOrder: ["Silver iced drink", "Iced coffee float"],
  },
  "tainan-a-room-cafe": {
    name: "a Room",
    area: "Changrong Road",
    blurb:
      "An old-house cafe at the end of a lane off Changrong Road, entered through a small garden thick with plants. Inside are a full wall of books, outlets at the seats, and no time limit — for over a decade it has been where NCKU people camp to read and write theses, and the courtyard connects to the doughnut shop next door.",
    tips: "Red no-parking lines fill the lane — park on Changrong Road and walk in.",
    mustOrder: ["Earl Grey milk tea", "Sicilian coffee", "Lemon pound cake"],
  },
  "tainan-sun-hong-ho-cafe": {
    name: "Sun Hong Ho",
    area: "Kaishan Road Area",
    blurb:
      "A heritage cafe opened in 2020 inside the family home of the founder of Sun Hong Ho electric fans, antique fans still displayed through the rooms. The signature is a handmade fresh cream roll in a different flavor daily — a bookable limited edition appears in mango season — and the third floor keeps a small rooftop garden.",
    tips: "One-drink minimum with a 90-minute limit; the cream rolls can be pre-ordered.",
    mustOrder: ["Fresh cream roll", "Sicilian coffee"],
  },
  "tainan-shibamao-teahouse": {
    name: "Shibamao Teahouse",
    area: "Wu Garden Area",
    blurb:
      "A teahouse inside the Wu Garden occupying Yanagiya, a Japanese-era canteen building taken over in 2012 by the Feng Cha tea brand's founder — the name splits the willow character into 'eighteen mao'. Taiwanese tea and confections in a fish-scale-clad wooden house, an old garden on one side, the baroque Public Hall on the other.",
    tips: "Enter the Wu Garden beside the Public Hall; closed Mondays.",
    mustOrder: ["Taiwanese tea", "Afternoon tea snacks"],
  },

  // ── Desserts, drinks & central district (R4) ────────────
  "tainan-luji-baozi": {
    name: "Lu Ji Buns",
    area: "Kaishan Road Area",
    blurb:
      "A bun shop founded in 1886 — locals call it Bao Zai Lu — spending 140 years in a lane off Kaishan Road making only four things: pork buns, mantou, longevity peaches, and crystal dumplings. Everything is rolled and filled fresh over charcoal steamers, and the daily-limited crystal dumplings, thin and translucent, sell out fast.",
    tips: "In the lane beside Qingshui Temple; come early for the crystal dumplings.",
    mustOrder: ["Crystal dumplings", "Pork bun"],
  },
  "tainan-huaijiu-tofu-ice": {
    name: "Huai Jiu Tofu Ice",
    area: "Wufei Street Area",
    blurb:
      "An almond tofu ice specialist opposite the Wufei Temple, run by a couple for nearly twenty years in a room full of vintage objects. The tofu comes in almond, matcha, and fresh milk, pitched between pudding and panna cotta; regulars add tangyuan and a drizzle of black sesame sauce, and students keep the seats warm.",
    tips: "No fixed day off — check their fan page for ad-hoc closures.",
    mustOrder: ["Almond tofu ice", "Matcha tofu ice"],
  },
  "tainan-shuangsheng-mungbean-milk": {
    name: "Shuang Sheng Mung Bean Milk",
    area: "Xinmei Street Area",
    blurb:
      "A drinks shop on Minzu Road selling only five items across its mung bean smoothie and black tea lines. The mung beans are boiled and blended fresh daily with whole beans left in, and everything comes in a single 620 ml size. At peak hours you pull a numbered ticket, and the queue regularly stretches past the shop next door.",
    tips: "Closed Mondays and Tuesdays; closes early once sold out.",
    mustOrder: ["Mung bean milk smoothie", "Mung bean smoothie"],
  },
  "tainan-borentang-herbal": {
    name: "Bo Ren Tang Herbal Kitchen",
    area: "Ximen Roundabout Area",
    blurb:
      "A medicinal-cuisine eatery grown from a 1961 Chinese pharmacy: in 2016 the fifth generation of a Cantonese medical family turned it into a dining room. The hundred-drawer cabinet, bronze acupuncture figure, and plaques are originals; sip double-boiled shiquan chicken soup by the medicine chests — a Bib Gourmand regular.",
    tips: "Near Shuixian Temple and Shennong Street; the double-boiled soups take a short wait.",
    mustOrder: ["Shiquan chicken soup", "Herbal pork rib soup"],
  },
  "tainan-shataogong-caizong": {
    name: "Shatao Temple Cai Zong",
    area: "Shatao Temple Area",
    blurb:
      "A stall that has set up under the great banyan in the Shatao Temple courtyard since 1949, selling exactly two things: cai zong — sticky rice and Beigang peanuts wrapped in shell ginger leaves — and miso soup. No peanut powder here, just soy paste and sesame oil; it opens at 5 a.m. and sells out in roughly three hours.",
    tips: "No sign — look for the stall under the banyan in the temple yard; latecomers miss out.",
    mustOrder: ["Cai zong (peanut zongzi)", "Miso soup"],
  },
  "tainan-xiajia-fish-noodles": {
    name: "Xia Family Handmade Fish Noodles",
    area: "Fuqian Road Area",
    blurb:
      "A fish noodle specialist on Fuqian Road sharing roots with Zhuo Jia, the now-closed Shantou fish noodle house. The noodles are hand-beaten from lizardfish paste with no flour — irregular, springy, faintly sweet with the sea. Have them dry or in soup, with a bowl of fish roll soup as the regulars' pairing.",
    tips: "Sells from midday to early evening, but hours shift often — check before you go.",
    mustOrder: ["Handmade fish noodles", "Fish roll soup"],
  },
  "tainan-ahui-charcoal-oden": {
    name: "A Hui Charcoal Oden",
    area: "Dalin Road",
    blurb:
      "A charcoal grill stall beside the Dalin housing blocks, perfuming the street for some forty years. Olen fish cakes and sausages are braised until seasoned through before hitting the coals, and the pot of hot soup out front is free to ladle. A 2024 Bib Gourmand pick, it draws afternoon queues and closes at dusk when sold out.",
    tips: "Afternoon to dusk only, closed Mondays — do not plan it as a supper stop.",
    mustOrder: ["Charcoal-grilled olen", "Grilled sausage", "Sticky rice sausage"],
  },
};
