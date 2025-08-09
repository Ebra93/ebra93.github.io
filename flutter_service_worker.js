'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e30260020baeb0398ff07b37dd33ed16",
".git/config": "1fdb675f7366416e922c8ffefd46f47a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8d8877f16faea80176139f4e7fb43b77",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "f9dd6e6faa7caedacb390318e5d07276",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72e5bab8340769037ff73fa32876b261",
".git/logs/refs/heads/main": "19595cc23a9df1d1c06f08827df045ed",
".git/logs/refs/heads/master": "fb4b3c8df03345753a5858677c70f4b8",
".git/logs/refs/remotes/origin/main": "a91e4bea61131bfc0d801d7811123171",
".git/logs/refs/remotes/origin/master": "ddc7f8f39dba8c108cf82824fab583eb",
".git/objects/00/0c084c16d3361c4ab4ce7421a788d3eda4ffdd": "66ce4e76672853f2e34f7a1cf5d64ed4",
".git/objects/00/3a7d30da3633c2f24c906bfa65a0c97b1f475c": "b8e703685891f99f8124020bc9583d61",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/ef678f70cb0db0fc60de048eeea26224e5799b": "57a3673fb4945106c132a202fd43d8e2",
".git/objects/0e/76ec78954d8534c4a57cf8086cc9dc25450262": "d8ac272085a560b0dead519b191add64",
".git/objects/11/66741a599297ca4f24a8cc469cc5832a840517": "7d29c715018470cb1eecfa4a158f0183",
".git/objects/17/9fdaac6741e1e8ebf04c9897988562f624c025": "356826a8731fc2096b53107159b41f3e",
".git/objects/19/f08c2b2d4f9f041ff6f030deddb43c29174e77": "d98aaf52daa79d5e513f6b0a34022e7a",
".git/objects/24/e545c8273aa9e12459a287919c14b35e1198fd": "7808d87c1336fbd209726476fb8ea6c3",
".git/objects/24/ed93461cf16c82cfc95f24882b481190e439f4": "11290c0ef4a136cbd2f33475c310a3f0",
".git/objects/2e/a977b6556ea4e7b13f0609f4b4c8b7fe99269d": "c9fd315fa539540b6f2dae2d6f182f8f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/1ff6a8dfc4ee7f91324f38046a20b3b9226af1": "c4a1be26eb6646f9b24edea3af716782",
".git/objects/35/711c8a8b99c16f400260957f38b710099b693e": "0bbafadb21291772d8d1a9521e74a5e2",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/be416e3f41660ad0f1b033fae8d63aa75ee44f": "2e95f7fdfb6583b80af85471b009a8e9",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/aaca42bd77e4ff95a2f35c79761e1b34c6d19f": "f66efbfe08383c7d9fb697012250ad51",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6f78edebb8532d4dcbb2d50c4b927bd9bc70dd": "659b77f7b01e8ccbacdc8f42c45ffe48",
".git/objects/48/e95578ac5dd8d8d28bec196e2eaf15342763f6": "26bb4e68744304aa44a5c7bc94c120d9",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/08ae321988132db3cff983044fa45b941855ac": "eaa5aa544fe53a6f103c311e494848c7",
".git/objects/50/566915838d215d3dbe37b35c1ef4405a66ee54": "6e455d72d8195b0cbc067004c1c38efc",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/4a6735f73fce1acaf5b809551854709da9bb68": "ae55de0b095884c8f363550a215803c9",
".git/objects/5e/81a8da3f4b51106cd2794be953b1d6de233b9e": "05aee2377612206b174c2a9b1b62004d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/cc90f0f4f10ac0bce48a69e1041e5a40a8cea8": "2d5afdda5ad92b933be79fa84f24e208",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/7e/926107c47fbe8e42be18a3be95879b2b01d599": "2a3d859c58b61a3a1cf1376aff8b5ce4",
".git/objects/84/54652d4f471001f25abfcff619661c3907a5b6": "2aa371f90a423abafe34b03efa94b763",
".git/objects/85/1c27077b41d49b77ef31c8c6ed23d276094b59": "ebb0d28371f4a3aa78d3416b6226e946",
".git/objects/85/3745769c3aef3eb87d2a1cb79665333f4a7667": "ab75106a166fd06e176f6ed44ec66670",
".git/objects/87/8e4fe9c16bd6dead16071bd18e4fdd36ffea21": "a700eb50329461583460d64dcd5e1402",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/da68af131f46805bf2f8b94ad79530d0ef3d6b": "62f730fca793a0fd6353c85118cff202",
".git/objects/8f/d5421ecc2bd90752b8b6501ff04ae6d40f6ffa": "31a142baa44e0e3ed292baa770de7451",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/a1d73a3f193cfaaad631451eafa240aafff01f": "9538c13b975506bba087bf7c06d44d16",
".git/objects/9e/bc4ab71ff6c85a034a267180109479ab942a56": "9731ac1ae4e59d86664e9cec1b04ad4b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b2/816aa7c728182d83718b3b985c9fa327cbfe22": "b902bddf634ff2de100934a86ec2c96c",
".git/objects/b5/5dda4335f5361564487ac9d48167030b2b74e7": "33c8da475e2b1b32eb9336b7a07d0e5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cd2ebf447ea14f915debd858e619047bb520b2": "16aec60854d6ac49002c2591559837d5",
".git/objects/bd/2e967d21281d4e6087ee401247c47f10ad6cbd": "4bcfbb1ba989faa1f27a76c1448ba39b",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d1/9aec045e328abd09f3e3c89cced61bbd9cd9d0": "ccc3aea5ca0ed545ea4eb13c8964921c",
".git/objects/d1/b7886805d43d5277eb7b73eaf6340c9875b514": "d86c6417cfaa85a282926af52a95fc65",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
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
".git/objects/f0/8008bb3936b11526b6a82d081b1751541055ce": "6d775ca28022e5a20c2b99ec659aa5b9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/c225c23beb7c82a8fb02560e7be94ed5baaccd": "ee77b04b0df110414b2a5d3d317161d6",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/fa736299c8e27b0b5454d072dcece56e9acc57": "15ff55d288d7b9c3dbccdce70aa5eac0",
".git/objects/f7/41580e1a340b7e13b8ab3c172cb6164fada74c": "8e1af7d396157100317b849bc848e720",
".git/objects/fa/13fa729c296e664a33dee3be330b88ffe41235": "c31c6eaa166f9e45644adbf5cd2a5f1e",
".git/ORIG_HEAD": "a2fb0bc292ca15a5b189e51ab6201b77",
".git/refs/heads/main": "bedd672394446a532e4dabe753a0ca71",
".git/refs/heads/master": "a2fb0bc292ca15a5b189e51ab6201b77",
".git/refs/remotes/origin/main": "bedd672394446a532e4dabe753a0ca71",
".git/refs/remotes/origin/master": "a2fb0bc292ca15a5b189e51ab6201b77",
"assets/AssetManifest.bin": "e247c8296de835b2a9aa07afe31b9ad2",
"assets/AssetManifest.bin.json": "454a72b75d535202a07d93e1342a17c2",
"assets/AssetManifest.json": "893a8ec67910703c4f78a44a028756fc",
"assets/assets/translations/ar-SA.json": "ce0e7da9daa5afa54fa2441299eafd95",
"assets/assets/translations/en-US.json": "448b5ab857d80f10990e7185ce9f1ecb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0ad34c1f0990acc218154dc7b0781c75",
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
"flutter_bootstrap.js": "eebf258da03dbc85b6f4a9c7ecb0c7aa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef03351e77aab09642de0667b3f1546a",
"/": "ef03351e77aab09642de0667b3f1546a",
"main.dart.js": "ddffc5237294bb557fdb3d6917504a11",
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
