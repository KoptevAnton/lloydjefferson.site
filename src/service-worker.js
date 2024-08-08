const CACHE_NAME = 'my-cache-v30';
const urlsToCache = [
  './img/header/logo.webp',
  './img/header/logo.jpg',
  './css/fonts/InterTight-Medium.ttf',
  './css/fonts/InterTight-SemiBold.ttf',
];

// Установка кешу
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Обробка запитів
self.addEventListener('fetch', event => {
  // Перевірте, чи запит на один з файлів, що потрібно кешувати
  if (urlsToCache.includes(new URL(event.request.url).pathname)) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
    );
  } else {
    // Для всіх інших запитів - не кешувати
    event.respondWith(fetch(event.request));
  }
});

// Оновлення кешу
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
