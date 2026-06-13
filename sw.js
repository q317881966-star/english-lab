// English Lab — Service Worker（离线缓存 + PWA）
const CACHE = 'english-lab-v2';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './css/style.css',
  './js/voice.js',
  './js/app.js',
  './data/patterns.js',
];

// 安装：预缓存所有核心文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// 激活：清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// 请求：网络优先（保证最新），缓存兜底（离线可用）
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;
  if (url.hostname !== self.location.hostname) return;

  event.respondWith(
    fetch(event.request).then(response => {
      // 网络成功 → 更新缓存 + 返回
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => {
      // 网络失败 → 缓存兜底
      return caches.match(event.request);
    })
  );
});
