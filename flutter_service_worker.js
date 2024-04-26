'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ac4b2ebb67323afa0f8d2a3d0ffcde9d",
"assets/AssetManifest.bin.json": "18287ccd218f6c105f492d8626c93939",
"assets/AssetManifest.json": "7581fc7802559288a1603ba735c05e28",
"assets/assets/%25E2%2580%2594Pngtree%25E2%2580%2594whatsapp%2520mobile%2520software%2520icon_8704828.png": "037ed6a95edf1ac70b3933f35f582728",
"assets/assets/0314ac45-6f63-43f2-bbbe-89cf72abf005.jpg": "d87590d192467234abd8e035e78b1846",
"assets/assets/10.png": "a9bedc7aca58de4f5cac924d15295554",
"assets/assets/11038.jpg": "25299caf6cfbc170121fcffb8249e68b",
"assets/assets/12.png": "e9e6e8596ef2ebf8dc6074a6606ce15d",
"assets/assets/13.png": "eefd8f239abcb5658940d849ebf2fbb0",
"assets/assets/14.png": "d22eea35a90c02e85ea6238eb1e85752",
"assets/assets/17.png": "5b0734528eb4e70a979e57faae2e5367",
"assets/assets/2.png": "3c4b55f5227c52fdc6d4c10b1402d278",
"assets/assets/21.png": "e6542e044d113a0d3bbf91549ea75e39",
"assets/assets/21404.jpg": "eb6024555cf8b49b3ebbac2e2769d774",
"assets/assets/22.png": "f34f29a09fc4786ad742333e3caf01e5",
"assets/assets/23.png": "21d1c676e306ea0cb763e0521e4ffdaa",
"assets/assets/32443.png": "6c5895b2c0596125a1bfa3eb3bfee1d3",
"assets/assets/335d1753-a5f0-4ebc-a41a-44b734556e58.jpg": "ddadfa040d5154d94fc27ebd8d6b620e",
"assets/assets/3ca0f393-001e-49c6-89b9-1f2feaab67f7.jpg": "b1609fed2e7718044342e1a18167c52a",
"assets/assets/4696637d-04bd-47b5-9439-eb6aaff3b61a.jpg": "04c03d27043eeead84e78734993f8317",
"assets/assets/47590.jpg": "bce5863b08d12e16608199ebfca0aca4",
"assets/assets/47792455-9dad-4325-8e31-dbc023d5931e.jpg": "4121c1fd8ae2c95422b44aeac5ccedd0",
"assets/assets/4872663.jpg": "8c2c325273d14663c2e1bb9137a35034",
"assets/assets/5%2520(1).png": "7f62f351f8742aa7d55aee05dcd13883",
"assets/assets/5%2520(2).png": "a29d9f49151206037e4c78f692285aa2",
"assets/assets/6.png": "d6e5a683e8fd146869598f511ab0b110",
"assets/assets/7%2520(1).png": "f66f4ef15d795c92260cff9e81000a29",
"assets/assets/8%2520(1).png": "4e8e4d269d1258d75bdaa66a4e9d38c2",
"assets/assets/8%2520(2).png": "4f46e35408f3ca1dee697574fb4561bf",
"assets/assets/8%2520(3).png": "e741c96c65e0a7c8c3660eb011f2cc38",
"assets/assets/8.png": "3045c6020d33d0dd69005366fad9b58d",
"assets/assets/9%2520(1).png": "857fd56e3b9028e3eb2a778c07137365",
"assets/assets/9.png": "ff6c63fc5119863118f285bfa94b94ed",
"assets/assets/app%2520(1).png": "80c1d987e040a321d5349ba9265afeb0",
"assets/assets/app%2520(2).png": "ddffa4faa684f85545ff3d5afd02370c",
"assets/assets/app%2520sign%2520up.jpg": "57831e0dee9812577d1c1cf39efc9a79",
"assets/assets/apple.jpg": "a09fe4b9eb0e1a68544ae99ce47bbba5",
"assets/assets/ards.png": "883f50231ce3750111b7e47385c46997",
"assets/assets/AutoWheel%2520Logo.jpg": "be0b792266cb9ce622541c25f1fb7182",
"assets/assets/autowheel.png": "c4a81594a61979a3c05f910ab9cdf5a8",
"assets/assets/car-insurance_8431038.png": "a28ea331066ba9456a87905b8ec34878",
"assets/assets/car.webp": "25544237d93d96da9966768018534fe4",
"assets/assets/channels4_profile.jpg": "b8c02a3e11dc69ac1959bdd8af0c5ab5",
"assets/assets/chassisno.png": "cbcccdb282e776c5d576b1e488ae9d6b",
"assets/assets/clock%2520(2).png": "5d0ccdc43a23656e236aa24ff4c64965",
"assets/assets/comapny.png": "71583867c02466cfa8e9950e4dbb9ddb",
"assets/assets/d0dca193-6334-4809-ba1b-2483686b20fb.jpg": "d432e14dc250732a78ddeb9e597c3d15",
"assets/assets/delivery_7322896.png": "ca09adbe5392d669970d09f4b94832d3",
"assets/assets/docnumbar.png": "1674e12954bbb826609c8bf87b88fb57",
"assets/assets/download%2520(1).png": "d830e2b509c49355da695a62fe96b1a9",
"assets/assets/download.jpeg": "6d199d6738855dbcfb2ecfb399e1dd50",
"assets/assets/download.jpg": "1688299d59557ec6fdd0256b980fc8cb",
"assets/assets/download.png": "06a27139799a9e46906d7986a9d65625",
"assets/assets/draftd.png": "7389b3b19d5c2dff37ff128f42fe903f",
"assets/assets/enginno.png": "c1ef4ddbd8794a6e84a4949687efc71f",
"assets/assets/estmiteate.png": "016f267f6b18d8c01392e2f1cdafc28e",
"assets/assets/Expens.png": "de686d8e3380c9f850038b7262c5d44f",
"assets/assets/facebookimage.png": "8497d4ca3a35a13a1f54454590e5ae52",
"assets/assets/gas-station_10301155.png": "2814c6447feba717e45b8e5548a84434",
"assets/assets/hand.png": "d414f4ebe31ce683c8817e111133d0bb",
"assets/assets/IMAGE.png": "ecad99be92180a9a0302dc24a9efe4ce",
"assets/assets/images.jpg": "365429b908bdbadc72846d73b372f954",
"assets/assets/invoice.png": "3970978de94247feedd6df33fd301d90",
"assets/assets/invoicenumbar.png": "d012205e1a0e394fc04f784c6c267645",
"assets/assets/jobcard.png": "e1e7a8c877fb9830861c7db4c48efa7f",
"assets/assets/jobcardnumbar.png": "4947339ac6555775776fc1abbaa8fa56",
"assets/assets/ladgerviwe.png": "bd9de55508856c9bdb7de6c8ad24ddbd",
"assets/assets/ledger.png": "77c7495437b7419c8d0f0cb84c85bd95",
"assets/assets/loction.png": "40c449e9f08dbcaec05d722e0330c676",
"assets/assets/Loctionaddress.png": "3d24baf5d05f24c77cb7954dac062e78",
"assets/assets/materialeissu.png": "ec9959c31cbd23b52584d1582e2f9965",
"assets/assets/mechanic_8598997.png": "53dff6e85741bb4d755ff1fcde708ee3",
"assets/assets/mobilenumbar.png": "3fd745737a0a3dd7cfb2303ffcb4ca92",
"assets/assets/movie_10589326.png": "8a4d17b5d9a9bfcc380a56af6b24d89c",
"assets/assets/NA_SEP._29.jpg": "43927abb28ef0d04978d5e3ca4157706",
"assets/assets/Numbarplate.png": "09c07b4e7300b78564a49285b3e2fd21",
"assets/assets/original-b794142546c3de42ba3045da64d0286c.jpg": "89d1ad439b939d1027dd0112a8151e69",
"assets/assets/otp.jpg": "6b17131c712e74c8e9dae73f21b0cc25",
"assets/assets/outsidework%2520numbar%2520.png": "8224dc86984901b0a46606129e811b75",
"assets/assets/outsidework.png": "16af8376be4174ce640a15192839e74c",
"assets/assets/parts%2520(1).png": "a8bcabfafce4a248fe9e0420fc7b4b65",
"assets/assets/payment.png": "5c51e85848e12415792ba5a8235b2888",
"assets/assets/png-transparent-flag-of-india-flag-of-india-national-flag-flag-of-the-united-states-indian-flag-thumbnail.png": "4a0d2f383989c2de7158e3d5d65543d9",
"assets/assets/productive_8521551.png": "d9fd92ed13a8454effa0a279762d61a0",
"assets/assets/purchase.png": "d9b7689ee37d40682a207327020dc3bf",
"assets/assets/rady.png": "ab950b44b9262728a6105912143ce07e",
"assets/assets/recipt.png": "aa880b9b9fd0de6f86778687b00c5a39",
"assets/assets/rrrr.png": "db59f10dca67bbf212f6fe7240297beb",
"assets/assets/Salsman.png": "ccd7313d9c4f2a8f82c9432637d82dbf",
"assets/assets/Screenshot%25202023-08-21%2520154947.png": "21812fe45ccc354bd6f3aebf42091056",
"assets/assets/searvice.png": "419f84258d2756ec3145d6531dfcb1de",
"assets/assets/spare.png": "ccd3311fe1c0c803e0d685f587902167",
"assets/assets/staff.png": "aaf30b4affcfca966968ffe8fe3ba324",
"assets/assets/user-512.webp": "8aa7400768154dade79c0a54e17514ef",
"assets/assets/vichal.png": "54f22b64cf88e1d7892519ea1d56fdf8",
"assets/assets/WhatsApp%2520Image%25202023-08-28%2520at%25204.44.21%2520PM(1).jpeg": "f467b5b10981e7a83bc26b9cf02cce31",
"assets/assets/WhatsApp%2520Image%25202023-11-22%2520at%252010.41.21_606a9877.jpg": "27a8c37a80d5d1cb6398e51c48e25174",
"assets/assets/WhatsApp%2520Image%25202023-11-22%2520at%252010.51.39_e8c99b43.jpg": "79ffa7edd170e441ef0191ff9c463c7a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "910ed7ad6969e493e96bb25fc8a8ad52",
"assets/NOTICES": "2d3efdbb12f93db2d84febc403ae83ff",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bd928fd2f40531945055a1ba064fb17c",
"/": "bd928fd2f40531945055a1ba064fb17c",
"main.dart.js": "89a7dd326d462a2c11900b2eaeb5f632",
"manifest.json": "bdc0f80f591de64374fdfbccf1779e6c",
"version.json": "897c3f1e56ef2aaffe2df78b0b32e360"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
