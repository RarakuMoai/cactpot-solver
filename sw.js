// 定義快取名稱與版本 (如果要強制更新，只需修改這裡的版本號)
const CACHE_NAME = 'ff14-cactpot-v2-5-offline';

// 這裡列出所有「必須」存到硬碟的檔案
// 包含您的 HTML, Manifest, Icon 以及所有原本透過網路讀取的 CDN
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  // 外部依賴 (必須與 HTML 內的版本一致)
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js',
  // 字體 (注意：Google Fonts 有時會變動，這裡快取 CSS，字體檔本身依賴瀏覽器快取或系統字型)
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&display=swap'
];

// 1. 安裝事件：當瀏覽器發現新版 sw.js 時觸發
self.addEventListener('install', (event) => {
  // 強制跳過等待，讓新版 Service Worker 立刻接管
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching all assets...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. 啟用事件：清理舊的快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[SW] Removing old cache:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  // 讓 Service Worker 立刻控制所有頁面
  return self.clients.claim();
});

// 3. 攔截請求：這是離線功能的關鍵
// 當網頁要讀取任何東西時，優先問倉庫 (Cache)，沒有才去網路 (Network)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 如果倉庫有貨，直接給貨 (秒開)
      if (cachedResponse) {
        return cachedResponse;
      }
      // 如果倉庫沒貨，去網路抓
      return fetch(event.request);
    })
  );
});
