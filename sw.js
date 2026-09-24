var CACHE = "hospitationen-v3";
var FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); })
    .then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Eigene Dateien und die Schriften von Google werden nach dem ersten
   erfolgreichen Abruf zwischengespeichert, damit die App offline laeuft. */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = e.request.url;
  var cachebar = url.indexOf(self.registration.scope) === 0
              || url.indexOf("fonts.googleapis.com") > -1
              || url.indexOf("fonts.gstatic.com") > -1;
  if (!cachebar) return;

  e.respondWith(
    caches.match(e.request).then(function (treffer) {
      var ausDemNetz = fetch(e.request).then(function (res) {
        if (res && (res.ok || res.type === "opaque")) {
          var kopie = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, kopie); });
        }
        return res;
      }).catch(function () { return treffer; });
      /* Schriften zuerst aus dem Cache, eigene Dateien zuerst aus dem Netz */
      var schrift = url.indexOf("fonts.g") > -1;
      return schrift ? (treffer || ausDemNetz)
                     : ausDemNetz.then(function (r) { return r || treffer; })
                                 .catch(function () { return treffer || caches.match("./index.html"); });
    })
  );
});
