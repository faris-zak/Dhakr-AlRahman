self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('platform-25-static-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/about.html',
        '/adhkar.html',
        '/terms-of-use.html',

        '/assets/js/aboutScript.js',
        '/assets/js/adhkarScript.js',
        '/assets/js/indexScript.js',
        '/assets/js/touScript.js',
        '/assets/js/script.js',
        '/serviceworker.js',

        '/manifest.json',

        '/assets/css/aboutStyle.css',
        '/assets/css/adhkarStyle.css',
        '/assets/css/indexStyle.css',
        '/assets/css/touStyle.css',
        '/assets/css/style.css',

        '/assets/css/images/dhakr-alrahman-logo.png',
        '/assets/css/images/palestineflag.png'
      ]).catch((error) => {
        console.error('Failed to cache', error);
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return new Response('Network error occurred', {
          status: 408,
          statusText: 'Network error',
        });
      });
    })
  );
});