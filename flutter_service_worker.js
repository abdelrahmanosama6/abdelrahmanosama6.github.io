'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "05fbb05dfe4372c0e4d95e0b3b0d1e11",
".git/config": "cd06e21bceae21787efb0246a676e597",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "1ffc1c0f04576a8ec82050aeb84a3961",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb1c592b0c5bffda5f6300b32dee493e",
".git/logs/refs/heads/main": "9c30b9153c2b09b7ec0abdc8ea4b2eda",
".git/logs/refs/remotes/origin/main": "e26aa0920864402e21b44fc68753a2e5",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/4a41db1d173b7dd236100450bac7cc397227c9": "2ed6f33baac711d9dfe03fee9bb9cb7a",
".git/objects/05/0e3d6361d40eded4f79c7ab988346eb0f7d400": "b48626241b642f694cac81e110438888",
".git/objects/06/f890f6cb90aa564f8de8657a58a314d35f9fe1": "36f34b5decf59d4fda097ff3826e87b2",
".git/objects/0a/7ff1e04fafddcadff3248ba887a9be6de9cbdd": "9e16757d489c7e0e47f0de005f4c421a",
".git/objects/0e/7e3ec5fb935225617da9b0b5253595dc265a72": "4909c38af1ccd42a8e47b20d55b324ea",
".git/objects/11/b8944cc84f97389f16e668160ca0d0445a5e74": "4a7fed88c64d7ecf11f0bc95779e7efd",
".git/objects/12/65dfd3748669e54195070812734fb348a99f79": "a1b903fea9478fde3e6117b005f244ae",
".git/objects/14/74a86e12108fe4dc71379fcd68c80f5c77d3d3": "dc11075865514f82362714c725f3921b",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1d/7f81784e6ae4c2501a8e14baf5a765fb1797fa": "ffa457d45a4d565326a2334748b1ccd1",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1e/d5af335079515e9dfed7c2d3e85d6549f3ef9f": "a5c9ec3df0469273f7f0fe6fc1cd6874",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/db9a052ee36ffc2eb5960527adc7e6c3bb7374": "b5d2d30cdb219ee82e3956a96a4c18b5",
".git/objects/23/5d4ff4d0a53130710aa7dee0768b8cf3cbcb17": "34e80b0bcb5601e8f73cd9366047856e",
".git/objects/28/72b4786aea5efbbdc9e843e4bcdcddf52794e2": "f588ff4e5f1f1f36c33fa37f650cedd3",
".git/objects/2a/3f95138864eb2a3fc4312fa6702e110899c246": "eb1584651930990040a6c670b571587a",
".git/objects/2d/7412d580c0a72b40d41259a1ccefd30a8b3d0f": "2f4b47504969000614729419d361c8b2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/1fadaee950534d649d94ffb4c2e4ecbf7bec62": "ba5003f627d3398101dd818fea2d4254",
".git/objects/3a/05fe05b40b287df611636c1b657cb97b63fea1": "93afc7dd6e0476f9c291238ceaa757ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/44/5c35748cb733a383fa0ef0a9be4e59ed384c9c": "a25476b09f283089bfe5479bcd61cf74",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/4f/d660210f33dea7cac6e9b9df6908f2e2477451": "605e26637c81c7d2eeac7cd406e5febc",
".git/objects/56/15445724662e368c87c5575a80194224dc1b17": "2160d3e1845702b3864bdfa176eb62bd",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/d6d239e7df65cb773cf2312a1c98fdbc0ddb0f": "c61c8a200fba4a2d2fee0941e6814369",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/65/ee6cd939eb0fd46061b5a1c6f23a49db4c574e": "703da58fa16d6538ae1595d37f076d59",
".git/objects/6b/36063e0ff21129b569667faa177dac765df2d9": "d7574b0256355b06ceda954b096a6b73",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/812edb1ccf2756b4c155cff0e88a787e0621d6": "8ca81aadbf494a7ed8c91e2782f3cafe",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/77/eb3f68e800e1b02c842ea38ba516c24a8592a6": "4e4698e0d5c9b505e35cd9139d6c9767",
".git/objects/7f/b8e75b3ec7480320c94b7973f7e0feaaa1974b": "c0b683eaa7bf736d546237ab9699cadf",
".git/objects/81/aa742133ccdf446af01ec4cb8cc120244c278f": "996431b73a4d42d65944dae6e2223af3",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/87/ae5ae716d9dcf3f3691c805eb73a183ae9733f": "13c37e11caedc7c8736ec77327f174cd",
".git/objects/89/180a2bfccf47b88efad9697fc4cda2db0f5f1f": "8a1a3c590651dfc7d04cd889e8113835",
".git/objects/90/a81257a8142e0718004dbdd7c0c237864598b3": "184374c78f35800d1b626e53bfd434b3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/54f009fc1420aca4aaac07a5d07078923883e4": "5012943ff11ae3a19e31ee604785b066",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a4/d131c5b1b98a58bf4c7601e9007497beb217a1": "14410dc286414f9abac738d913cd60c0",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/ad/5def9d7814853224ec787a152d3bcd8c6b1a44": "d4ed0c5c5fe5286b158ece9ca1e1bfe6",
".git/objects/ad/656dcd0bad0837400e17b2416cdca161f0d3ef": "76dcf4869853a25a540364eb9f08d6d0",
".git/objects/ad/9c3d1c524e94092f626efa4fb2dca6dc35381f": "7ac14507a3429fdead6a842a2a9d6268",
".git/objects/b5/1a37330b9edafab9edd49207a374fff30d52c9": "8e7043ff99f42e01ed2b409dfea2524e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/2c2d3db3736584752c2c65636882edb48a4be7": "1327713fcbf9ff0fa9da5dd8fcc2c34f",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/c4/fa7a1a3175a13797309366d058245f054b1c86": "09828bf0548889c4c5f8c8fd220d7995",
".git/objects/c7/4da257d388223c5e760b604071220b6fc57dc0": "396da133b0959da35d12c297df1adf0b",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/cc/70e3151eb5fe7906ae7bdeb4696a05f1482878": "8119af49677862f4bff50fff8d42c4a6",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/369b65d58c85f618286f5f664a04eea5a7faa7": "159ae3fb4e288062eba90affef695aec",
".git/objects/d8/53eb06acdc305452aa908c28be5384af37ae7c": "d4acba54427cad62162452780100577e",
".git/objects/dd/f1a81bfe178470605ce8fefb66ea6867464ddc": "b3d4f8c3f4639d6b2304c19418660050",
".git/objects/ea/94a20351bfa6a5a496e644641f2d253a71c38b": "c09acfa0fb51dadc1cd4fb9962a13a0a",
".git/objects/ec/82be44f0c2a04a24219df512583e7f5e55eb9f": "7dd1418a93bb31ffc792669fa7c42546",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f7/b99bf80312ccc74f52bd5827799d53d86cbdd5": "d2dc6de47b04210becf5d55410703056",
".git/objects/f8/b26a660f6e6506fdc9dcb3cfe0a4d38b54dfad": "e61e3287e34e7de3e07905be2c4e8a23",
".git/objects/fb/2e597a627099997541e63447ebe7e5fb09de30": "a20f9f3322b9376b48aa079e5d68a6cd",
".git/objects/fe/a8a140b74b9620f4d11096a5245026ad94cbcb": "86448c4b805c6f6684e4b71cfaa70c2a",
".git/refs/heads/main": "f02f37ac0bf1db631b76599b25211cf4",
".git/refs/remotes/origin/main": "f02f37ac0bf1db631b76599b25211cf4",
"assets/AssetManifest.bin": "161978cdbe9417d2add48e0821987989",
"assets/AssetManifest.bin.json": "baf8577557bea0b6819dbe120a4764a1",
"assets/AssetManifest.json": "ccd9ddb70820356f6fbc14f0bec84ce9",
"assets/assets/config.env": "25075d21979a612a550d52b69e13ef83",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/afro.png": "5caa49d632b05e6635fafd77493d8e9c",
"assets/assets/images/analysis1.svg": "3037422793c08b9e1becd8d5cf295788",
"assets/assets/images/analysis2.svg": "f389b6feead90631006264f5a94b1f53",
"assets/assets/images/article.jpg": "9434102a12c5a74f762bce1bb3f2d5df",
"assets/assets/images/Centercover.png": "4cf52fbdd608be481f2f22181b8bdcc2",
"assets/assets/images/Darelsokar.png": "136fb3938762f50c5849329fa0d98402",
"assets/assets/images/dev_img.png": "cdba446f38ea2de3eae502724f16e0d2",
"assets/assets/images/midlink.png": "3a8484db992557b6d47cc2b1fad7f2b1",
"assets/assets/images/Pharmahup.png": "478e740aef165c53c593d21fe6e4af28",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/prorotype.svg": "858a3ed2ffebb1a1f3d742a433e4bfbc",
"assets/assets/images/Rentverse.jpg": "d66ccb9a953a0f7c18acf5578de8ca64",
"assets/assets/images/research.svg": "8ee841c940aa7a978e7b547a9a971f47",
"assets/assets/images/ruler.svg": "823f016d6be3604c32e861dbd1c862ce",
"assets/assets/images/slider.svg": "15778d585c86bb87026e3c6ad548ef50",
"assets/assets/images/uifirst.svg": "619c134a5d38e26705578f37f64ef3ac",
"assets/assets/images/uisecond.svg": "a0056b36e20fdc7bb92f33d4d4982584",
"assets/assets/images/wireframe.png": "9d4bcf9b1abe1852949309f41f7abe3d",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/fonts/MaterialIcons-Regular.otf": "19a4d413f5b6107b5e8ab5371477bb3d",
"assets/images/Center%2520cover.png": "4cf52fbdd608be481f2f22181b8bdcc2",
"assets/images/Dar%2520elsokar.png": "136fb3938762f50c5849329fa0d98402",
"assets/images/Pharmahup.png": "478e740aef165c53c593d21fe6e4af28",
"assets/images/Rentverse.jpg": "d66ccb9a953a0f7c18acf5578de8ca64",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "a07f1b61196e5b37e2fd0cbf835c6993",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6b5527633ccbff3228cad695c875f915",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "32f4de11407f71d55813f9b1bfdf97b7",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"index.html": "99ae01d1f78547b700bce2210af2e141",
"/": "99ae01d1f78547b700bce2210af2e141",
"main.dart.js": "e8fca05fe396ac3ec128064083486ffd",
"manifest.json": "42362928197703932fd372056eff9425",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
