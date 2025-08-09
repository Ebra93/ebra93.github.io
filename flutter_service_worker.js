'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "162faab05f639720546ec691a7c0df59",
".git/config": "c52818537d9642bf15dd6f9ba5e657fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "624fcf47739dafdab1983810b7f42f35",
".git/HEAD": "dfa70f0fc783ffb8cfbeb7672a3b116c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3dc664bdd98b70b59d17206ae806b000",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4f161f5dba14758f40822c3098a7534",
".git/logs/refs/heads/main": "cfebecd5c4cacb19014f896c616d7d82",
".git/logs/refs/heads/v1": "bff24bd7a4711969d91a412843dfd053",
".git/logs/refs/remotes/origin/main": "45543c854d09311d09127e7c9460d550",
".git/logs/refs/remotes/origin/master": "c1fe58a98121c1f60313f37a017aa719",
".git/logs/refs/remotes/origin/v1": "955fbebce893da1ee6eb64d5e054412e",
".git/objects/00/0c084c16d3361c4ab4ce7421a788d3eda4ffdd": "66ce4e76672853f2e34f7a1cf5d64ed4",
".git/objects/00/3a7d30da3633c2f24c906bfa65a0c97b1f475c": "b8e703685891f99f8124020bc9583d61",
".git/objects/00/f13c2fbd9e114069d919c340c1a4df12fbc07c": "77a64e41eddf9000f2e8378a92e5915f",
".git/objects/03/1912b988d55bc7752f32129490967b6230865e": "9098770420844b4c3f9a7cb268932863",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/16e477119abbff35479c38264b649bb46f11d4": "b0ffb6fffa77311fee5a7c54b2088429",
".git/objects/07/ef678f70cb0db0fc60de048eeea26224e5799b": "57a3673fb4945106c132a202fd43d8e2",
".git/objects/08/5c9de2e3a04545336f173eceb2ea1353e83526": "8730641205da0009864c33195a7b9f34",
".git/objects/0e/76ec78954d8534c4a57cf8086cc9dc25450262": "d8ac272085a560b0dead519b191add64",
".git/objects/11/03a383b80d94378f09e91a2370685a957eb8fc": "c97dca0892adb7cb70015cccb080b96c",
".git/objects/11/66741a599297ca4f24a8cc469cc5832a840517": "7d29c715018470cb1eecfa4a158f0183",
".git/objects/12/2f993867db2bf0acb1e3e3a888627e740b9bc6": "6460e9f459dbabad30bded4ff6d829d9",
".git/objects/16/d0d77554158051ae2fc9e1eef2e1a2ed206b27": "9e1684837f517a194339fe94456fac8a",
".git/objects/17/9fdaac6741e1e8ebf04c9897988562f624c025": "356826a8731fc2096b53107159b41f3e",
".git/objects/19/f08c2b2d4f9f041ff6f030deddb43c29174e77": "d98aaf52daa79d5e513f6b0a34022e7a",
".git/objects/21/bad8b06575cade3d01c96a9cb1d8f055380052": "bb6eb7592a79bf78d69b86f6622a1256",
".git/objects/24/e545c8273aa9e12459a287919c14b35e1198fd": "7808d87c1336fbd209726476fb8ea6c3",
".git/objects/24/ed93461cf16c82cfc95f24882b481190e439f4": "11290c0ef4a136cbd2f33475c310a3f0",
".git/objects/25/45546a081e5a6a6c593c44e561fa37c761e15f": "5553a8a0a044fbe90ca9d3a88934b245",
".git/objects/26/b28b1dddc1090e5d901ad1784975ca159b7a09": "b66e962b8b03e5671a55c7357e55b8ee",
".git/objects/2d/5b59a7b762c9f7de126e018ca77d16a4bdd32c": "85165e94cf203b3500aabd80ab1d1b30",
".git/objects/2e/971cf13a5194bd11feceaf58be6d8d149037c1": "3edf27d5762f8d229e4e83872848a36b",
".git/objects/2e/a977b6556ea4e7b13f0609f4b4c8b7fe99269d": "c9fd315fa539540b6f2dae2d6f182f8f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/1ff6a8dfc4ee7f91324f38046a20b3b9226af1": "c4a1be26eb6646f9b24edea3af716782",
".git/objects/35/711c8a8b99c16f400260957f38b710099b693e": "0bbafadb21291772d8d1a9521e74a5e2",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/b9e918fc38e8c56137b32ac0ac8429692dcb0a": "6d41e32b368c60fb1b0979fbeb3549f7",
".git/objects/3c/be416e3f41660ad0f1b033fae8d63aa75ee44f": "2e95f7fdfb6583b80af85471b009a8e9",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/5258b3284ba03b17e9fff29c172e46ed6aa614": "20dde8610a97eff962f2526b0dc770f8",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/aaca42bd77e4ff95a2f35c79761e1b34c6d19f": "f66efbfe08383c7d9fb697012250ad51",
".git/objects/44/6ca1ff7e20b2fd6ed7474217c7912f09af7748": "62d93814620708703bf93da5c7058cd2",
".git/objects/46/317d9d5ee522b1b720195ddb0fed715c34c4ba": "d1c2a498e18a8eb83a714c121e999b68",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6f78edebb8532d4dcbb2d50c4b927bd9bc70dd": "659b77f7b01e8ccbacdc8f42c45ffe48",
".git/objects/47/4908ae00629e8cc0db8d7f3456e4ba5f572fe4": "5e38bd3be5c59172939a557d9775f54a",
".git/objects/48/e95578ac5dd8d8d28bec196e2eaf15342763f6": "26bb4e68744304aa44a5c7bc94c120d9",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/08ae321988132db3cff983044fa45b941855ac": "eaa5aa544fe53a6f103c311e494848c7",
".git/objects/50/566915838d215d3dbe37b35c1ef4405a66ee54": "6e455d72d8195b0cbc067004c1c38efc",
".git/objects/54/abff61719a35cfd536ec7b0c8d338c229b042f": "0758a626e15bdbe11f2b8fadabf3dfa6",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/4a6735f73fce1acaf5b809551854709da9bb68": "ae55de0b095884c8f363550a215803c9",
".git/objects/5e/81a8da3f4b51106cd2794be953b1d6de233b9e": "05aee2377612206b174c2a9b1b62004d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/aaf8d0c15ed1f9a5f0daa24d3b5ce6279fa286": "323b2bf6f1f69ce89f756e529a9db5a5",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/cc90f0f4f10ac0bce48a69e1041e5a40a8cea8": "2d5afdda5ad92b933be79fa84f24e208",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/74/43a1bcd7219f84a3c3445a3227b30794409965": "462240514425b5884c2749a5c9b1632e",
".git/objects/78/8f60c2a96b022bd2fc8fd3843f22cba4dbb2ad": "1c285bfa1d8a39faf024d842ecbc9ea9",
".git/objects/7b/d970adf0ac7ccd5d7296cdb2766c51ce4062cf": "2c713bff9fa62d25980ed742c2f5a514",
".git/objects/7d/54d72ba4db701cf23302cdb5f9181a6cf7141d": "dd1e0f9a9ff40a5286e09260f727e6ad",
".git/objects/7e/926107c47fbe8e42be18a3be95879b2b01d599": "2a3d859c58b61a3a1cf1376aff8b5ce4",
".git/objects/7e/e2c401c6a6c55eed35a1c09efaec1c1cf80829": "1aeb9bf1e01b8c79c50d7d330b7d8103",
".git/objects/84/54652d4f471001f25abfcff619661c3907a5b6": "2aa371f90a423abafe34b03efa94b763",
".git/objects/85/1c27077b41d49b77ef31c8c6ed23d276094b59": "ebb0d28371f4a3aa78d3416b6226e946",
".git/objects/85/3745769c3aef3eb87d2a1cb79665333f4a7667": "ab75106a166fd06e176f6ed44ec66670",
".git/objects/87/8e4fe9c16bd6dead16071bd18e4fdd36ffea21": "a700eb50329461583460d64dcd5e1402",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/da68af131f46805bf2f8b94ad79530d0ef3d6b": "62f730fca793a0fd6353c85118cff202",
".git/objects/8f/9d67320c5dd5e600ddaf5613cc8529483c7a41": "8344227166c5201857d7a7d90d689c1e",
".git/objects/8f/d5421ecc2bd90752b8b6501ff04ae6d40f6ffa": "31a142baa44e0e3ed292baa770de7451",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/a1d73a3f193cfaaad631451eafa240aafff01f": "9538c13b975506bba087bf7c06d44d16",
".git/objects/9d/54f371370f6c2d78c04b528f7a62e0a3cd5311": "1d7b1b6b8d6acd92ec1ac5f7d6f7fe16",
".git/objects/9e/bc4ab71ff6c85a034a267180109479ab942a56": "9731ac1ae4e59d86664e9cec1b04ad4b",
".git/objects/9f/68563632b104724764c25bc773cf3b888412eb": "ae82045e18487a263b18b0a2556c1362",
".git/objects/a5/4ac3f27c01e9b6ba90eccaad8d8e364883cfce": "9c78bc24077a62d7b077e1dec0af7406",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/3408ffa55b49f5c3382a79080fd30fc92b123a": "f959a0060576737fe55451a6f6970bfc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b2/816aa7c728182d83718b3b985c9fa327cbfe22": "b902bddf634ff2de100934a86ec2c96c",
".git/objects/b3/943a5339687f705967f208b88b5c6832651962": "6140e26282abbe775946da5bd8db5b34",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "33c8da475e2b1b32eb9336b7a07d0e5e",
".git/objects/b5/a731b8c0d61a7b875c674c7b1d2874e8a0f4d0": "5782eaf0227cfa12258d6a208bca48b2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/fb7994442890112de050cd796f4620d48f1eaa": "69ea47ea0164593113760f1d37c5fd52",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cd2ebf447ea14f915debd858e619047bb520b2": "16aec60854d6ac49002c2591559837d5",
".git/objects/b9/f29740f1b550a88ab45e8454a467fec9c220a6": "df094d86ee7a5e311abe5d9c2f33e3e1",
".git/objects/ba/332fc1725a54e003fa450c8a5fdd6115eeeeef": "944a0e95e2bd056a5dfb6fe82c6fb375",
".git/objects/bd/2e967d21281d4e6087ee401247c47f10ad6cbd": "4bcfbb1ba989faa1f27a76c1448ba39b",
".git/objects/c9/8d9000b5cd253de132eec78b558737a1b481de": "e52959c787ebc31c8b2eda26beb3ed9a",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cd/7fea9d4af0bec33a2e9620f22832446972171d": "a011e0028739cfc940d8631e91db4cea",
".git/objects/d0/3ec7350a86fcc4ca322f18b9eb7ee0e9dafab6": "8423c81ca9f33ca02d91d33395749483",
".git/objects/d1/9aec045e328abd09f3e3c89cced61bbd9cd9d0": "ccc3aea5ca0ed545ea4eb13c8964921c",
".git/objects/d1/b7886805d43d5277eb7b73eaf6340c9875b514": "d86c6417cfaa85a282926af52a95fc65",
".git/objects/d3/7fbf37d4e43c1406649e49cfb6dd1e3b783707": "a18c014329a92dcfd0badd730046683a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/827c641e86ef5a26f3c5cb923abd795a5cb944": "1e65e76f2411dd966ad0db5272b1357f",
".git/objects/d5/a0aa1c257aee9acb03596da296cb15654da78d": "39dee4f8a588973b321d7122977d15c3",
".git/objects/d6/3ef15cc445cfa8a2932fa89ad5e766f4ab70ef": "a8f2884d02d304c3e3f0e5029d29910b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/90ec667c3fa173d68a8b307f30580bf9e4e0f3": "765163f2bbd71dbe948ec34e9db9d792",
".git/objects/e1/1648340384cfaab215fd775b9589cc17952e08": "393e582186b846e0278421cf4fa473d5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/82b7c781c28655f80fd51b35b96dc409f3e9ca": "9653170ce7c3592907f91c095b4fdc4a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4bcd32c613a89a044f6a79b8df415cb3e02f21": "a9a8138b1cde390c56327d20d4fea9eb",
".git/objects/ed/418147aec5c9ddd8134877eb35e978d67cdfed": "725b53ec518fc772a09521c7f400d8d3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/5b4fd520cc7291a54ee1e4ca2786e0239c73d7": "5ae179eceb66cd556c9f9e978ff75d66",
".git/objects/f1/bcc7c444c7c29fd20396cfd304980fafc86b22": "0682e2b99aed0bdbb1f2be5cb93d72f3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/c225c23beb7c82a8fb02560e7be94ed5baaccd": "ee77b04b0df110414b2a5d3d317161d6",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/fa736299c8e27b0b5454d072dcece56e9acc57": "15ff55d288d7b9c3dbccdce70aa5eac0",
".git/objects/f7/41580e1a340b7e13b8ab3c172cb6164fada74c": "8e1af7d396157100317b849bc848e720",
".git/objects/f7/5e0c6b1b768ca8db366bf82857eb42ac5c135b": "ad6a011a3dc0d0d5940c729a902c8df3",
".git/objects/fa/13fa729c296e664a33dee3be330b88ffe41235": "c31c6eaa166f9e45644adbf5cd2a5f1e",
".git/objects/fb/824f03cb6ae80ba1446f3a907489fb715961f8": "5ed419af1471681f55ecddc1f4741720",
".git/ORIG_HEAD": "6415e10da939366a988bc65d595a53a0",
".git/refs/heads/main": "f2d8b6abba58677d10342a7c68061287",
".git/refs/heads/v1": "c49d8e927c787521c01954d62fb7280d",
".git/refs/remotes/origin/main": "bedd672394446a532e4dabe753a0ca71",
".git/refs/remotes/origin/master": "423163867e1eab4140e84f569efa8095",
".git/refs/remotes/origin/v1": "c49d8e927c787521c01954d62fb7280d",
"assets/AssetManifest.bin": "e247c8296de835b2a9aa07afe31b9ad2",
"assets/AssetManifest.bin.json": "454a72b75d535202a07d93e1342a17c2",
"assets/AssetManifest.json": "893a8ec67910703c4f78a44a028756fc",
"assets/assets/translations/ar-SA.json": "ce0e7da9daa5afa54fa2441299eafd95",
"assets/assets/translations/en-US.json": "448b5ab857d80f10990e7185ce9f1ecb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e8e6e55f31af31ba9948ad8981e46cd",
"assets/NOTICES": "d523403dcddef9599e294725be703f71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "788c4afc246c5f41fa52735b30d971e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef03351e77aab09642de0667b3f1546a",
"/": "ef03351e77aab09642de0667b3f1546a",
"main.dart.js": "20e2d4b3a1ec3456c6a6c013ffc5d15b",
"manifest.json": "0d3ceceee1e9cc91146c90f467bf8470",
"version.json": "3b32f3dcafaecd8bcd4bcc2af3633222"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
