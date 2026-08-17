// English Lab — Service Worker(离线缓存 + PWA)
const CACHE = 'english-lab-v3';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './css/style.css',
  './js/voice.js',
  './js/storage.js',
  './js/study.js',
  './js/app.js',
  './data/patterns.js',
  './data/screws.js',
  './data/course.js'
];

// 安装:预缓存所有核心文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// 激活:清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 请求:网络优先(保证最新),缓存兜底(离线可用)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;
  if (url.hostname !== self.location.hostname) return;

  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => {
      return caches.match(event.request);
    })
  );
});
