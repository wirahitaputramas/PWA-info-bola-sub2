//menyimpan aset ke cache
const CACHE_NAME = "football_info";
var urlsToCache = [
  "/",
  "/back.jpg",
  "/detailmatch.html",
  "/detailplayer.html",
  "/detailtim.html",
  "/icon.png",
  "/index.html",
  "/nav.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/pages/favorit.html",
  "/pages/home.html",
  "/pages/matches.html",
  "/css/materialize.min.css",
  "/image/notif.png",
  "/js/api.js",
  "/js/database.js",
  "/js/helper.js",
  "/js/idb.js",
  "/js/indexeddb.js",
  "/js/main.js",
  "/js/matches.js",
  "/js/matchFav.js",
  "/js/materialize.js",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/js/playerFav.js",
  "/js/standings.js",
  "/js/teamFav.js",
  "/js/teams.js",
  "/manifest.json"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

//menggunakan aset dari cache
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function(response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }
 
        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url
        );
        return fetch(event.request);
      })
  );
});

//mekanisme penghapusan cache lama
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

//siapkan dulu service worker untuk menerima datanya
self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: 'image/notif.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});