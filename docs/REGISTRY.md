# Canonical Restaurant ID Registry

id 治理規則：
- 每城由**單一 agent 批次**獨佔生產（台北拆兩批、分區互斥），天然不撞 id。
- id 格式：kebab-case、`<cityId>-` 前綴、英文語意化，驗證器強制。
- **本檔在內容定稿後由 `npm run check` 的輸出回填**，之後就是 canonical 清單：
  後續增修內容 MUST use these exact ids，改 id = breaking change（會弄壞使用者的
  localStorage 評分），除非店家本身消失，否則禁止改名或刪除 id。

## 批次分工（S4）

| 批次 | cityId | 範圍 |
|---|---|---|
| taipei-a | taipei | 萬華/大同/中正/中山（含寧夏夜市）＋城中老字號 |
| taipei-b | taipei | 大安/信義/松山/士林/北投（含士林、饒河夜市） |
| taichung | taichung | 全市 |
| tainan | tainan | 全市（中西區為主） |
| kaohsiung | kaohsiung | 全市 |
| chiayi | chiayi | 全市（品質基準城） |
| keelung | keelung | 全市 |
| hsinchu | hsinchu | 全市 |
| changhua | changhua | 彰化市＋鹿港 |
| yilan | yilan | 宜蘭市/羅東/礁溪 |
| hualien | hualien | 花蓮市 |
| donggang | donggang | 東港鎮 |
| taitung | taitung | 台東市 |

## Canonical IDs（內容定稿後回填）

共 415 家（2026-07-15 R2 定稿）

### taipei (64)
- `taipei-ay-chung-noodle` 阿宗麵線
- `taipei-wangs-broth` 小王煮瓜
- `taipei-yuan-fang-gua-bao` 源芳刈包
- `taipei-liang-xi-hao` 兩喜號
- `taipei-yi-jia-zi` 一甲子餐飲
- `taipei-stinky-boss-tofu` 臭老闆現蒸臭豆腐
- `taipei-a-nan-sesame-oil-chicken` 阿男麻油雞
- `taipei-liu-shandong-beef-noodle` 劉山東牛肉麵
- `taipei-lin-dong-fang-beef-noodle` 林東芳牛肉麵
- `taipei-fu-hang-soy-milk` 阜杭豆漿
- `taipei-astoria-cafe` 明星咖啡館
- `taipei-dong-yi-pork-ribs` 東一排骨
- `taipei-tien-chu-peking-duck` 天廚菜館
- `taipei-su-hung-restaurant` 蘇杭餐廳
- `taipei-yuan-huan-pien-oyster-omelette` 圓環邊蚵仔煎
- `taipei-liu-yu-zai-taro` 劉芋仔蛋黃芋餅
- `taipei-rong-zai-pork-liver` 豬肝榮仔
- `taipei-da-qiao-tou-rice-tube` 大橋頭老牌筒仔米糕
- `taipei-shuang-lian-sweet-soup` 雙連圓仔湯
- `taipei-bolero-restaurant` 波麗路
- `taipei-dannys-steakhouse` 教父牛排
- `taipei-tairroir` 態芮
- `taipei-impromptu-by-paul-lee` Impromptu by Paul Lee
- `taipei-san-wei-shi-tang` 三味食堂
- `taipei-da-che-lun-train-sushi` 大車輪火車壽司
- `taipei-addiction-aquatic` 上引水產
- `taipei-simple-kaffa-flagship` Simple Kaffa 興波咖啡
- `taipei-fong-da-coffee` 蜂大咖啡
- `taipei-san-coffee` 森高砂咖啡館
- `taipei-ming-fu-taiwanese` 明福台菜海產
- `taipei-mountain-sea-house` 山海樓
- `taipei-tien-hsiang-lo` 天香樓
- `taipei-yongkang-beef-noodle` 永康牛肉麵
- `taipei-dongmen-dumpling-house` 東門餃子館
- `taipei-tianjin-scallion-pancake` 天津蔥抓餅
- `taipei-chengji-vietnamese-noodle` 誠記越南麵食館
- `taipei-yupinyuan-tangyuan` 御品元冰火湯圓
- `taipei-taihodien-spicy-hotpot` 太和殿鴛鴦麻辣火鍋
- `taipei-du-yi-chu-beiping` 都一處
- `taipei-jiaxiang-soy-milk` 家香豆漿店
- `taipei-fuzhou-pepper-bun` 福州世祖胡椒餅
- `taipei-chen-dong-herbal-ribs` 陳董藥燉排骨
- `taipei-tung-fa-hao` 東發號
- `taipei-miss-chin-soy-milk` 秦小姐豆漿店
- `taipei-hot-star-chicken` 豪大大雞排
- `taipei-hai-yu-herbal-ribs` 海友十全排骨
- `taipei-hsin-fa-ting-ice` 辛發亭
- `taipei-da-shanghai-pan-fried-bun` 大上海生煎包
- `taipei-marys-hamburger` 茉莉漢堡
- `taipei-golden-formosa-taiwanese` 金蓬萊遵古台菜
- `taipei-ai-zai-cai-braised-pork-rice` 矮仔財滷肉飯
- `taipei-kao-chi-tea-shop` 高記茶莊
- `taipei-robuchon-latelier` 侯布雄法式餐廳
- `taipei-longtail-restaurant` Longtail
- `taipei-smith-wollensky` Smith & Wollensky
- `taipei-sushi-nomura` 鮨野村
- `taipei-kokuraya-unagi` 小倉屋
- `taipei-hutong-yakiniku` 胡同燒肉
- `taipei-gabee-coffee` GABEE.
- `taipei-journey-kaffe` 覺旅咖啡
- `taipei-sheme-house` 拾米屋
- `taipei-baan-phadthai` 帕泰家
- `taipei-samwon-garden` 三元花園韓式餐廳
- `taipei-fujin-tree-taiwanese` 富錦樹台菜香檳

### keelung (26)
- `keelung-wu-ding-bian-cuo` 百年吳家鼎邊趖
- `keelung-tian-yi-xiang` 天一香肉羹順
- `keelung-wu-ji-crab-geng` 吳記螃蟹羹油飯
- `keelung-wang-ji-tempura` 王記天婦羅
- `keelung-tian-sheng-sandwich` 天盛舖營養三明治
- `keelung-chen-ji-paopao-ice` 陳記泡泡冰
- `keelung-shi-sheng-sausage` 世盛一口吃香腸
- `keelung-quan-jia-fu-yuanxiao` 全家福元宵
- `keelung-san-xiong-di-douhua` 三兄弟豆花
- `keelung-zhu-tian-fish` 朱添鮮魚號
- `keelung-rong-sashimi` 榮生魚片
- `keelung-xiao-san-da-chang-quan` 基隆孝三大腸圈
- `keelung-chang-jiao-noodles` 長腳麵食
- `keelung-liao-mama-bubble-tea` 廖媽媽珍珠奶茶專賣舖
- `keelung-li-hu-bakery` 李鵠餅店
- `keelung-lian-zhen-bakery` 連珍糕餅店
- `keelung-zhou-jia-scallion-pancake` 周家蔥油餅
- `keelung-jin-long-rou-geng` 金龍肉焿
- `keelung-guo-jia-guozai-soup` 郭家巷頭粿仔湯
- `keelung-tu-da-chikuwa` 涂大手工碳烤吉古拉
- `keelung-yu-pin-xuan-seafood` 漁品軒海鮮餐廳
- `keelung-wakayo-sushi` 和蕎屋壽司料理店
- `keelung-sandaime-ramen` 定置漁場三代目 正濱漁港店
- `keelung-miaopu-italian` 苗圃義大利餐廳
- `keelung-tuman-cafe` 圖們咖啡
- `keelung-marucorner-cafe` 丸角自轉生活咖啡

### hsinchu (28)
- `hsinchu-guo-run-bing` 郭家元祖潤餅
- `hsinchu-a-cheng-hao-rice-noodles` 阿城號米粉
- `hsinchu-wang-ji-oyster-omelet` 王記蚵仔煎
- `hsinchu-miaokou-duck-rice` 廟口鴨香飯
- `hsinchu-liu-jia-braised-pork-rice` 柳家肉燥飯
- `hsinchu-zhou-jia-mochi` 周家燒麻糬
- `hsinchu-lin-jia-taro-balls` 林家芋泥球
- `hsinchu-shidafa-bun` 西大發城隍包
- `hsinchu-hsinfuchen-pastry` 新復珍商行
- `hsinchu-delong-shuirunbing` 德龍商店
- `hsinchu-jinyi-pork-ball` 進益摃丸文化會館
- `hsinchu-fuyuan-peanut-butter` 福源花生醬
- `hsinchu-yeh-tapioca-balls` 葉大粒粉圓
- `hsinchu-feilong-meatball` 飛龍肉圓
- `hsinchu-beimen-fried-kueh` 北門炸粿
- `hsinchu-duck-hsu-erjie` 鴨肉許 二姊
- `hsinchu-xishi-shantou` 西市汕頭館
- `hsinchu-duanchunzhen-beef-noodle` 段純貞牛肉麵
- `hsinchu-shaobing-house` 燒餅屋
- `hsinchu-shijia-fish-ball` 石家魚丸
- `hsinchu-yats-leaf` YATS 葉子
- `hsinchu-stanley-steakhouse` 史坦利美式牛排
- `hsinchu-friendy-pizzeria` Friendy Pizzeria
- `hsinchu-dongjie-japanese` 東街日本料理
- `hsinchu-today-fish-market` 今日魚市日本料理
- `hsinchu-ink-coffee` 墨咖啡
- `hsinchu-jsygs-art-cafe` 江山藝改所
- `hsinchu-a-moom-cafe` 李克承博士故居 a-moom

### yilan (30)
- `yilan-beimen-garlic-pork-soup` 北門蒜味肉羹（宣卡桑）
- `yilan-yixiang-eatery` 一香飲食店
- `yilan-wenchang-zhajiang-noodles` 文昌炸醬麵
- `yilan-xinlihao-fishball-rice-noodles` 信利號貓耳魚丸米粉
- `yilan-beimen-mung-bean-milk` 北門綠豆沙牛乳大王
- `yilan-sanshi-lemon-aiyu` 30年老店檸檬愛玉
- `yilan-red-lantern-duck` 紅樓中餐廳（蘭城晶英酒店）
- `yilan-azaobo-mutton-soup` 阿灶伯當歸羊肉湯
- `yilan-luodong-red-bean-tangyuan` 羅東紅豆湯圓
- `yilan-weijie-baoxin-fenyuan` 魏姐包心粉圓
- `yilan-xiaochun-gaozha-burou` 小春糕渣卜肉
- `yilan-linchang-pork-soup` 林場肉羹
- `yilan-nobel-milk-roll` 諾貝爾奶凍捲
- `yilan-yishunxuan-luodong` 奕順軒羅東店
- `yilan-ke-scallion-pancake` 柯氏蔥油餅
- `yilan-wengyao-chicken` 甕窯雞礁溪總店
- `yilan-baishui-douhua` 白水豆花
- `yilan-leshan-onsen-ramen` 樂山溫泉拉麵
- `yilan-wanglaowu-cured-duck` 王老五鴨賞
- `yilan-toucheng-majiang-noodles` 麻醬麵蛤蜊湯（瑞宏小吃）
- `yilan-dingpu-ama-scallion-pancake` 頂埔阿嬤蔥油餅
- `yilan-jiafuge-seafood` 甲富哥活海產
- `yilan-le-temps-bistro` Le Temps 食光1998
- `yilan-yao-mian-italian` 窯。麵義式餐坊
- `yilan-mihan-jiaoxi` 三燔礁溪
- `yilan-lihai-cafe` 里海cafe'
- `yilan-minwater-teppanyaki` 明水然·樂 礁溪店
- `yilan-shandu-omakase` 山渡空間食藝
- `yilan-mingcao-coffee` 鳴草咖啡自家烘焙館
- `yilan-mr-brown-castle` 伯朗咖啡城堡一館

### taichung (44)
- `taichung-shanhe-lu-rou-fan` 山河魯肉飯
- `taichung-wang-radish-cake` 王記菜頭粿糯米腸
- `taichung-mao-chuan-meatball` 茂川肉丸
- `taichung-lai-tea-stand` 老賴茶棧
- `taichung-arashi-braised-pork` 嵐肉燥專賣店
- `taichung-guan-zhi-lin-sausage` 官芝霖大腸包小腸
- `taichung-ming-lun-egg-pancake` 明倫蛋餅
- `taichung-japan-boat-takoyaki` 日船章魚小丸子
- `taichung-gekiuma-yakitori` 激旨燒鳥
- `taichung-a-ming-shi-suncake` 阿明師老店太陽堂
- `taichung-chen-yun-pao-chuan` 陳允寶泉
- `taichung-banshin-castella` 坂神本舖長崎蛋糕
- `taichung-yingcai-da-mian-geng` 英才大麵羹
- `taichung-chun-shui-tang` 春水堂創始店
- `taichung-miyahara-eye-clinic` 宮原眼科
- `taichung-fengren-ice` 豐仁冰創始店
- `taichung-a-dou-bo-taro` 阿斗伯冷凍芋
- `taichung-rou-yuan` 台中肉員
- `taichung-fu-din-wang-pork-knuckle` 富鼎旺豬腳
- `taichung-chen-ming-tong` 陳明統爌肉飯
- `taichung-wei-quan-migao` 味泉米糕
- `taichung-lianxin-chicken-feet` 東海蓮心冰雞爪凍
- `taichung-pork-egg-toast` 肉蛋吐司
- `taichung-a-kun-mian` 阿坤麵
- `taichung-shanghai-weiming` 上海未名酸梅湯麵點
- `taichung-hu-she-yu-wei` 滬舍餘味
- `taichung-shin-yuan` 馨苑小料理
- `taichung-wen-dao` 溫叨古早味料理餐廳
- `taichung-shantou-liu-hotpot` 汕頭牛肉劉沙茶爐
- `taichung-shuang-jiang-tea` 雙江茶行
- `taichung-fleur-de-sel` 鹽之華法國餐廳
- `taichung-sur` 澀 Sur-
- `taichung-forchetta` Forchetta
- `taichung-jl-studio` JL Studio
- `taichung-oretachi-no-nikuya` 俺達の肉屋
- `taichung-umai-yakiniku` 屋馬燒肉 中港店
- `taichung-isagi-kappo` いさぎ ISAGI 潔
- `taichung-coffee-stopover` Coffee Stopover
- `taichung-factory-mojocoffee` The Factory Mojocoffee
- `taichung-come-true-coffee` 成真咖啡 審計店
- `taichung-shan-shin` 膳馨民間創作料理
- `taichung-karuizawa-hotpot` 輕井澤鍋物 公益店
- `taichung-qin-yuan-chun` 沁園春
- `taichung-minimal` MINIMAL

### changhua (28)
- `changhua-a-zhang-ba-wan` 阿璋肉圓
- `changhua-north-gate-ba-wan` 北門口肉圓
- `changhua-a-quan-braised-pork-rice` 阿泉爌肉飯
- `changhua-fish-market-braised-pork-rice` 魚市場爌肉飯
- `changhua-a-chang-braised-pork-rice` 阿章爌肉飯
- `changhua-mao-shu-noodles` 貓鼠麵
- `changhua-papaya-milk-king` 彰化木瓜牛乳大王
- `changhua-shan-hang-wan-guo` 杉行碗粿
- `changhua-da-yuan-mochi` 大元餅行
- `changhua-tong-zhong-tangyuan` 銅鐘圓仔湯
- `changhua-hei-rou-noodles` 黑肉麵
- `changhua-a-tian-clam-noodles` 阿添蛤仔麵
- `changhua-lin-family-vegetarian` 林家素食
- `changhua-yu-zhen-zhai` 玉珍齋
- `changhua-wang-wang-mian-xian-hu` 王罔麵線糊
- `changhua-a-zhen-pork-buns` 阿振肉包
- `changhua-lao-long-shi-pork-buns` 老龍師肉包
- `changhua-a-dao-oyster-omelet` 鹿港阿道蚵仔煎
- `changhua-miaokou-first-house` 廟口第一家
- `changhua-yangzhou-ba-wan-taro-balls` 楊州肉圓芋丸
- `changhua-fa-ji-fen-guo-ice` 發記粉粿冰
- `changhua-dong-hua-mian-cha` 東華素食麵茶
- `changhua-salt-coast-bistro` 鹽岸－島嶼的義法料理
- `changhua-mu-hiding-omakase` 沐藏料理所
- `changhua-farming-memory` 農食憶料理坊
- `changhua-monsoon-coffee` 東北季風 Monsoon coffee
- `changhua-stable-fly-cafe` Stable Fly 穩定飛行模式
- `changhua-zozo-claypot-cafe` 煮煮陶鍋咖啡

### chiayi (38)
- `chiayi-liu-lizhang-turkey-rice` 劉里長雞肉飯
- `chiayi-kuo-family-turkey-rice` 郭家雞肉飯
- `chiayi-taocheng-sanho-turkey-rice` 桃城三禾火雞肉飯
- `chiayi-alou-shi-turkey-rice` 阿樓師火雞肉飯
- `chiayi-dai-shi-turkey-rice` 呆獅雞肉飯
- `chiayi-a-xi-turkey-rice` 阿溪雞肉飯
- `chiayi-smart-fish-head` 林聰明沙鍋魚頭
- `chiayi-a-e-douhua` 阿娥豆漿豆花
- `chiayi-yuanxing-yuxiangwu` 源興御香屋
- `chiayi-pinan-douhua` 品安豆漿豆花
- `chiayi-zhenzhen-seafood-congee` 珍珍蚵仔煎海產粥
- `chiayi-beihui-crystal-dumpling` 北回水晶餃
- `chiayi-a-fu-net-meat-roll` 阿富網絲肉捲
- `chiayi-wang-beef-offal-soup` 王家祖傳本產牛雜湯
- `chiayi-yuan-tube-rice-cake` 袁家筒仔米糕排骨酥
- `chiayi-huopo-pan-fried-cake` 火婆煎粿
- `chiayi-heiren-lu-shu-rou` 黑人魯熟肉
- `chiayi-fuyishan-egg-roll` 福義軒
- `chiayi-new-taiwan-bakery` 新台灣餅舖
- `chiayi-endian-cube-pastry` 恩典方塊酥
- `chiayi-huangji-cold-noodles` 黃記涼麵涼圓
- `chiayi-siwei-juice-cold-noodles` 涼麵四味果汁
- `chiayi-fangguizai-luwei` 方櫃仔滷味
- `chiayi-dawenhua-duck-geng` 達文化生炒鴨肉焿
- `chiayi-a-an-rice-cake` 阿岸米糕
- `chiayi-taiwanren-ice` 咱台灣人的冰
- `chiayi-morikoohii-cafe` 森咖啡
- `chiayi-yuan-braised-pork-rice` 源滷肉飯
- `chiayi-shimo-sora-coffee` 霜空珈琲
- `chiayi-mugeneration-cafe` 木更 Mugeneration
- `chiayi-happyhill-cafe` 幸福山丘 HappyHill
- `chiayi-tenderness-bistro` 溫淳 Tenderness
- `chiayi-hana-asagi-brunch` 花淺蔥
- `chiayi-morikawa-dondon` 森川丼丼
- `chiayi-songzhu-washoku` 松築創作和食料理
- `chiayi-1961-seafood-grill` 1961海鮮碳烤
- `chiayi-jiayuan-shantou-hotpot` 佳園汕頭火鍋
- `chiayi-yisin-yakiniku` 壹心燒肉

### tainan (49)
- `tainan-wenchang-beef-soup` 文章牛肉湯
- `tainan-shijingjiu-beef-soup` 石精臼牛肉湯
- `tainan-acun-beef-soup` 阿村第二代牛肉湯
- `tainan-chigo-beef-soup` 旗哥牛肉湯
- `tainan-fushenghao-wagui` 富盛號碗粿
- `tainan-yiweipin-wagui` 一味品碗粿魚羹
- `tainan-ajiang-eel-noodles` 阿江炒鱔魚
- `tainan-jinfu-eel-noodles` 進福炒鱔魚專家
- `tainan-chou-shrimp-rolls` 周氏蝦捲
- `tainan-chikan-coffin-bread` 赤崁棺材板
- `tainan-chen-oyster-rolls` 陳家蚵捲
- `tainan-tongji-douhua` 同記安平豆花
- `tainan-yifeng-wintermelon-tea` 義豐阿川冬瓜茶
- `tainan-jiangshuihao-ice` 江水號
- `tainan-ninao-soft-serve` 蜷尾家甘味処
- `tainan-lin-white-sugar-cake` 林家白糖粿
- `tainan-aqing-almond-tea` 阿卿傳統飲品冰品
- `tainan-jinde-spring-rolls` 金得春捲
- `tainan-yeh-squid-rice-noodles` 葉家小卷米粉
- `tainan-aming-pig-heart` 阿明豬心冬粉
- `tainan-afeng-milkfish-geng` 阿鳳浮水虱目魚焿
- `tainan-chunxianfang-guoshao-noodles` 醇涎坊鍋燒意麵
- `tainan-baoan-migao` 保安路米糕
- `tainan-atang-porridge` 阿堂鹹粥
- `tainan-aizaicheng-shrimp-rice` 矮仔成蝦仁飯
- `tainan-du-hsiao-yueh-danzai` 度小月擔仔麵
- `tainan-zaifahao-zongzi` 再發號
- `tainan-lily-fruit` 莉莉水果店
- `tainan-fuji-rouyuan` 福記肉圓
- `tainan-axia-restaurant` 阿霞飯店
- `tainan-amei-restaurant` 阿美飯店
- `tainan-futai-fanzhuo` 福泰飯桌第三代
- `tainan-howchou-shacha-hotpot` 小豪洲沙茶爐
- `tainan-jiulaifa-bakery` 舊來發餅舖
- `tainan-klin-baozi` 克林台包
- `tainan-kantan-cafe` 甘單咖啡
- `tainan-paripari-apt` Paripari apt.
- `tainan-kadoya-kissaten` KADOYA喫茶店
- `tainan-principe-french` Principe 原則
- `tainan-corner-steak-house` 轉角餐廳
- `tainan-lherbe-bistro` 香草小餐酒
- `tainan-hara-peko` HARA PEKO
- `tainan-mao-don` 毛丼 丼飯專門店
- `tainan-tanzuomali-yakiniku` 碳佐麻里精品燒肉 台南新興店
- `tainan-nanasen-kappo` 七撰 割烹
- `tainan-zhuxinju-tasting` 筑馨居
- `tainan-good-hunan-cuisine` 有你真好 湘菜沙龍
- `tainan-jinxia-restaurant` 錦霞樓
- `tainan-gyugozou-beef` 牛五蔵

### kaohsiung (44)
- `kaohsiung-duck-zhen` 鴨肉珍
- `kaohsiung-rouzong-tai` 肉粽泰
- `kaohsiung-gang-yuan-beef-noodles` 港園牛肉麵
- `kaohsiung-lao-tsai-milkfish-porridge` 老蔡虱目魚粥
- `kaohsiung-hwa-da-milk-tea` 樺達奶茶
- `kaohsiung-popo-ice` 高雄婆婆冰
- `kaohsiung-dong-fen-wang` 冬粉王
- `kaohsiung-migao-cheng` 米糕城
- `kaohsiung-duck-ben` 鴨肉本
- `kaohsiung-zheng-papaya-milk` 鄭老牌木瓜牛奶
- `kaohsiung-zhuang-ji-seafood-congee` 莊記海產粥
- `kaohsiung-bbq-house-liuhe` 烤肉之家
- `kaohsiung-xing-long-ju` 興隆居
- `kaohsiung-lao-chiang-milk-tea` 老江紅茶牛奶
- `kaohsiung-qianjin-braised-pork-rice` 前金肉燥飯
- `kaohsiung-quan-cheng-shacha-hotpot` 汕頭泉成沙茶火鍋
- `kaohsiung-buer-zhiguo` 不二緻果
- `kaohsiung-liu-family-sauerkraut-hotpot` 劉家酸白菜火鍋
- `kaohsiung-fen-yang-wonton` 汾陽餛飩
- `kaohsiung-san-niu-beef-noodles` 三牛牛肉麵
- `kaohsiung-wu-ma-jia-dumplings` 吳媽家餃子
- `kaohsiung-jiang-hao-ji-stinky-tofu` 江豪記臭豆腐王
- `kaohsiung-da-gang-rice-ball` 大港飯糰
- `kaohsiung-old-new-taiwanese` 老新台菜
- `kaohsiung-chun-xia-tapioca-ice` 春霞古早味粉圓冰
- `kaohsiung-hong-mao-gang-seafood` 紅毛港海鮮餐廳
- `kaohsiung-nan-feng-braised-pork-rice` 南豐魯肉飯
- `kaohsiung-wu-pao-chun-bakery` 吳寶春麥方店
- `kaohsiung-wan-san-seafood` 萬三小吃部
- `kaohsiung-ya-jiao-seafood` 鴨角活海產
- `kaohsiung-new-international-steakhouse` 新國際西餐廳
- `kaohsiung-thomas-chien` THOMAS CHIEN
- `kaohsiung-gien-jia` Gien Jia 挑食
- `kaohsiung-haili` Haili
- `kaohsiung-sho` 承 Sho
- `kaohsiung-ukai-tei` Ukai-tei Kaohsiung
- `kaohsiung-tanzuo-mali-yakiniku` 碳佐麻里精品燒肉 高雄時代店
- `kaohsiung-akoya-uohane` あこや太羽魚貝料理専門店
- `kaohsiung-hifumi-tei` 書店喫茶一二三亭
- `kaohsiung-xiao-ti-coffee` 小堤咖啡
- `kaohsiung-ginza-house` 銀座聚場
- `kaohsiung-goood-time` 龜時間
- `kaohsiung-bai-yu-lou` 白玉樓
- `kaohsiung-gen` 雋 GEN

### donggang (18)
- `donggang-wang-jiang-bluefin-sashimi` 王匠黑鮪魚生魚片
- `donggang-yu-lang-sashimi-sushi` 漁郎生魚片握壽司
- `donggang-ruizihao-swordfish-tempura` 瑞字號旗魚黑輪
- `donggang-jia-jhen-seafood` 佳珍海產餐廳
- `donggang-dong-sheng-seafood` 東昇餐廳
- `donggang-yeh-family-rou-guo` 葉家肉粿
- `donggang-lin-ji-rou-guo` 林記肉粿
- `donggang-chiu-shuang-gao-run` 邱家雙糕潤
- `donggang-zheng-zong-meatball` 東港正宗肉丸
- `donggang-jia-ji-drinks` 佳吉飲料店
- `donggang-hua-jhen-breakfast` 華珍早餐
- `donggang-lao-er-seafood-stirfry` 老二海鮮特炒
- `donggang-bing-no-ie` 冰の家
- `donggang-wei-yi-fish-floss` 東港味益鬆品專賣店
- `donggang-jhen-jhen-seafood` 珍珍海鮮餐廳
- `donggang-xiwei-sushi` 細尾手作壽司
- `donggang-elong-sushi` 瀧壽司
- `donggang-maritime-chapel-cafe` 海上教堂咖啡

### hualien (26)
- `hualien-yexiang-wonton` 液香扁食店
- `hualien-hualienxiang-wonton` 花蓮香扁食
- `hualien-gongzheng-baozi` 公正包子店
- `hualien-zhoujia-dumplings` 周家蒸餃
- `hualien-laopai-egg-scallion-pancake` 老牌炸蛋蔥油餅
- `hualien-miaokou-black-tea` 廟口紅茶
- `hualien-diyijia-bbq-skewers` 第一家烤肉串
- `hualien-jiangjia-coffin-toast` 蔣家官財板
- `hualien-linji-grilled-corn` 林記燒番麥
- `hualien-nazizi-grilled-fish` 娜滋滋烤魚
- `hualien-chengkang-diner` 成康飲食店
- `hualien-mr-goose` 鵝肉先生
- `hualien-laisang-sushi` 賴桑壽司屋
- `hualien-chenji-congee` 陳記狀元粥舖
- `hualien-yuli-qiaotou-stinky-tofu` 玉里橋頭臭豆腐
- `hualien-haipu-oyster-omelet` 海埔蚵仔煎
- `hualien-wuba-tapioca-ice` 五霸焦糖包心粉圓
- `hualien-mingxin-ice` 明新冰菓店
- `hualien-tzen-mochi` 曾記麻糬
- `hualien-ebisu-bakery` 惠比須餅舖
- `hualien-old-time-izakaya` 老時光燒肉酒肴
- `hualien-fujo-restaurant` fūjō restaurant
- `hualien-rourou-table` 肉肉餐桌
- `hualien-chef-ming` 銘師父餐廳
- `hualien-giocare-coffee` Giocare義式手沖咖啡
- `hualien-caffe-fiore` Caffe Fiore 珈琲花

### taitung (20)
- `taitung-rongshuxia-mitaimu` 榕樹下米苔目
- `taitung-laodongtai-mitaimu` 老東台米苔目
- `taitung-beinan-pig-blood-soup` 卑南豬血湯
- `taitung-jinfang-ice` 津芳冰城
- `taitung-zhengdongshan-ice` 正東山冰屋
- `taitung-blue-dragonfly-fried-chicken` 藍蜻蜓速食專賣店
- `taitung-lin-stinky-tofu` 林家臭豆腐
- `taitung-baosang-tangyuan` 寶桑湯圓
- `taitung-qilixiang-buns` 七里香水煎包
- `taitung-xiao-meatball` 蕭家肉圓
- `taitung-yang-sweet-potato` 蕃薯伯楊記家傳地瓜酥
- `taitung-mibanai-indigenous` 米巴奈山地美食坊
- `taitung-jinhuaxuan-buns` 金花軒卑南包仔店
- `taitung-sutianzhu-veg-noodles` 蘇天助素食麵
- `taitung-mloma` M'loma
- `taitung-yucai-kappo` 漁采時令料理
- `taitung-john-johns-kitchen` 強強廚房
- `taitung-ouxiang-steakhouse` 歐鄉牛排館
- `taitung-hiii-birdie-cafe` 有知鳥 hiii birdie
- `taitung-taimali-cafe` 太麻里文創咖啡館
