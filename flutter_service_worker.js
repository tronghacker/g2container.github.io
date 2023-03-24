'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9af4287b1fadce88a171b4eaef29b657",
"assets/assets/icons/Bell.svg": "f9a892e2f89ca5dae066a4a7869eb0c2",
"assets/assets/icons/BlogPost.svg": "939f9fb6cd26d3cbda222efc588109c8",
"assets/assets/icons/Comments.svg": "143a3d52dffc4e48fc5a91d95f0b3dc0",
"assets/assets/icons/Dashboard.svg": "76143897d92103aa1a722a8a935c180f",
"assets/assets/icons/Dribbble.svg": "498fb76de8c7319c101cea72ba949d45",
"assets/assets/icons/Facebook.svg": "540cdcfff64442a60ea6a639827e6f5a",
"assets/assets/icons/Linkedin.svg": "e29b9c1efa3c6d212c4e1862126b0807",
"assets/assets/icons/Logout.svg": "cc8c02a3992f5c79a727174c41cdf9df",
"assets/assets/icons/Message.svg": "9dc649696d3907e25f5a2f3410fed494",
"assets/assets/icons/Pages.svg": "7afb8a5289f1e1cf9858b70a8a239700",
"assets/assets/icons/Post.svg": "f7de05f5c7937dcf5ac9211460e1549e",
"assets/assets/icons/Setting.svg": "fa19f55ba5bb75150a93264dbb456c87",
"assets/assets/icons/Statistics.svg": "70d980e389901023c21fdbf751c5d5d7",
"assets/assets/icons/Subscribers.svg": "a086f90bff322d22e27a96d166681ccf",
"assets/assets/icons/Twitter.svg": "3c43caf125b9400f0d7bd12e0ace53de",
"assets/assets/images/AUCTION.png": "dd433a84e164b6c8efe6d897d71cebba",
"assets/assets/images/call.svg": "4be40dcb55a1a260cf5f627bd87cd74f",
"assets/assets/images/Dispatch_peration.png": "a86a69c81eb04fe72a579c62223a5e5b",
"assets/assets/images/Driver.png": "e0feade4c5f4aa317613b30e90c2fca6",
"assets/assets/images/edit.svg": "4718b2f05c00470f121a636dfbb66908",
"assets/assets/images/emoji-happy.svg": "0f10b651f14ff0e32fa3e88794f15f04",
"assets/assets/images/Financial.png": "ed9d7f2c733a635ec906233401628651",
"assets/assets/images/Fleet%2520Activity%2520Map.png": "77985db567d28eea0d5629babfe72621",
"assets/assets/images/Fleet2.png": "5ea302ff56f673063248db94c1f98c63",
"assets/assets/images/Fuels.png": "50fcaed28b4b4b4401edd5c55a48c8e4",
"assets/assets/images/History.png": "e6328fc73b807b3280372eb962c8e313",
"assets/assets/images/info-circle.svg": "06712db917669ed5c28ad93c4fd17bdf",
"assets/assets/images/item01.svg": "a270de93c981fbb2ef0dcc331192ea1f",
"assets/assets/images/item02.svg": "e580a745df4ffca7072a74d163d6358e",
"assets/assets/images/item03.svg": "336d5aa9da6ca9c8923d4538936625cd",
"assets/assets/images/loading.png": "1e35796665cadc663a94de1f5e17510a",
"assets/assets/images/logo.png": "aa188180323bdfff41e25141606894a0",
"assets/assets/images/logo70.png": "556a24ffcc5a0355381f9d8f1868c752",
"assets/assets/images/logo700.png": "abeadac1e4c38f40a8f1e89bf7704b19",
"assets/assets/images/logoTruksea.svg": "4b47868fc31ee908e9638ac1e8e0b1e2",
"assets/assets/images/logowithtext.png": "954fb979bd2b0dfd1476b0758fd014cb",
"assets/assets/images/map.png": "5df7283a63619d43921b103fc0a351b1",
"assets/assets/images/menu02.svg": "27084d7a570b165bb0c763be33f3ebc5",
"assets/assets/images/menu1.svg": "f84fee9ab54a2af68d778ac15aece255",
"assets/assets/images/menu2.svg": "3bfc540729d909db77756108ba2c235f",
"assets/assets/images/menu3.svg": "0f6417220cc421b2725f86619ed35b32",
"assets/assets/images/menu4.svg": "5540d86210ffa2d38ab5cd8d8d1a6345",
"assets/assets/images/menu5.svg": "acb7e27de384889ec5e34efc3b67c588",
"assets/assets/images/menu6.svg": "71522ef314429203de97feea49ce0899",
"assets/assets/images/menu7.svg": "2aa180ad18433f3800407c43092bc8ed",
"assets/assets/images/menu8.svg": "7e612d079493b34a9b11f411160b015a",
"assets/assets/images/menu9.svg": "fcfca95b8ba85162bf5256dcd293d5e3",
"assets/assets/images/message-text.svg": "f06def8d6abaf6e3fa217dd1527fbb85",
"assets/assets/images/more.svg": "1a3f56b2cd5980e5a8cfd7e7c9f00862",
"assets/assets/images/more_horizontal.svg": "5e07f94277d7ac56e9113bba88a150dd",
"assets/assets/images/notification.svg": "69db0f9dea58992abb88674307a6b0d5",
"assets/assets/images/paperclip.svg": "2b85b6b56b203c8287e54a499e1bbf55",
"assets/assets/images/photo1.jpg": "8919c83cfb6ca5a6106c2841ae065056",
"assets/assets/images/photo2.jpg": "8b69cc14acbdd21b279403cbcfa37ac2",
"assets/assets/images/photo3.jpg": "e15fc31e4ed05eb4370c40f1e765131e",
"assets/assets/images/photo4.jpg": "28b8b952e3faf30125d56b8c5f47c532",
"assets/assets/images/photo5.jpg": "4415164461b5175e14d55b6f40470faa",
"assets/assets/images/photo6.jpg": "fcc4a2d57e985be46673cc5107ed39ef",
"assets/assets/images/Plan.png": "4532fb296a161c802d337638b63fea66",
"assets/assets/images/Record.png": "d007556e81988deedcf108322c043f78",
"assets/assets/images/Reminders.png": "b3a67b760d1b115c66835a1e6c5d249f",
"assets/assets/images/rotate-right.svg": "da99c855b637c6b291e4edd41ad84e43",
"assets/assets/images/search-normal.svg": "f11b4f5f4ccfa37b8d8e774b887a4421",
"assets/assets/images/send-2.svg": "1ecbb5105db4e1b404b2872691accab1",
"assets/assets/images/setting-2.svg": "3bba7efbacbbe5b2535dc88e3b03054f",
"assets/assets/images/sms.svg": "e51417ad3560232e19e0b7aa876a0fdb",
"assets/assets/images/Spare%2520Part%2520Inventory.png": "958b99090aa15928152eae8e7361e31c",
"assets/assets/images/total_revenure.png": "f0097f111121a1e183bbc5b312df312b",
"assets/assets/images/Trips.png": "86689bb0599488fb431d26ba460a6c70",
"assets/assets/images/trip_by_weekday.png": "1243d0c1d0478edfa17b178a478cf085",
"assets/assets/images/Vehicle%2520Assets.png": "0573b44312b0f0edd92162d5c608e872",
"assets/assets/images/Vehicle%2520Reporting.png": "5a81235ed37f187a89cb1a19fdb9e052",
"assets/assets/images/vehicle.png": "13981d8998b2560ac22d5a8b1f9eb0c3",
"assets/assets/images/Vehicles.png": "159199b55907028672d449956eade61d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2707630aab0c01bdcc1e8a2a89a99537",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3caa2c5f0fa95cd3a1c7b56343ca5509",
"/": "3caa2c5f0fa95cd3a1c7b56343ca5509",
"main.dart.js": "97bf9bf7b117455c64a67c62e0a98afd",
"manifest.json": "42b62e4e7ac9187d2b03dc5c45d88ba1",
"version.json": "3e5ea4415d186ea42afa566d1610b46e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
