self.addEventListener('fetch', () => void 0);

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('pwageo1').then(function(cache) {
     return cache.addAll([
       '/pwa-apps/Geometrie/',
       '/pwa-apps/Geometrie/index.html',
	   '/pwa-apps/Geometrie/rechtDreieck.html',
	   '/pwa-apps/Geometrie/kreis.html',
	   '/pwa-apps/Geometrie/dreieck.html',             
       '/pwa-apps/Geometrie/logo192.png',
       '/pwa-apps/Geometrie/logo512.png',
       '/pwa-apps/Geometrie/logo624.png',       
	   '/pwa-apps/Geometrie/kreis.png',
	   '/pwa-apps/Geometrie/rechtDreieck.jpg',
	   '/pwa-apps/Geometrie/dreieck.png',
	   '/pwa-apps/Geometrie/favicon.ico'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});


