const CACHE='attendly-shell-v13';
const FILES=['./','./index.html','./style.css','./app.js','./manifest.json'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==location.origin)return;
  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached)return cached;
    try{
      const response=await fetch(request);
      if(response&&response.ok&&!response.bodyUsed){
        try{
          // Clone before any asynchronous cache work. If a browser/runtime has
          // already consumed the body, skip caching instead of throwing.
          const cacheCopy=response.clone();
          await caches.open(CACHE).then(cache=>cache.put(request,cacheCopy));
        }catch(cacheError){
          // Caching is optional; never fail the page response because of it.
        }
      }
      return response;
    }catch(networkError){
      return (await caches.match('./index.html'))||Response.error();
    }
  })());
});
