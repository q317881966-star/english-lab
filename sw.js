// English Lab — Service Worker（离线缓存 + PWA）
const CACHE = 'english-lab-v1';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './css/style.css',
  './js/sm2.js',
  './js/storage.js',
  './js/voice.js',
  './js/app.js',
  './data/vocabulary.js',
  './data/phrases.js',
  './data/dialogues.js',
  './data/patterns.js',
  './data/studyPlan.js',
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

// 请求：缓存优先（静态文件），网络优先（外部 API）
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 跳过非 GET 请求
  if (event.request.method !== 'GET') return;

  // 跳过外部 API（Edge TTS / Google TTS / OpenAI TTS / Google Fonts）
  if (url.hostname !== self.location.hostname) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      // 缓存命中直接返回，同时后台更新
      const fetched = fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
      return cached || fetched;
    })
  );
});
