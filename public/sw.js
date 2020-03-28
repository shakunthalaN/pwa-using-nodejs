const staticCacheName="site-static";
const assets=[
'/',
'/index.html',
'/js/app.js',
'/images/img-01.png',
'../fonts/poppins/Poppins-Regular.ttf'
];


//install service
self.addEventListener('install',evt=>{
    //console.log('service worker has been installed')
    evt.waitUntil(
    caches.open(staticCacheName).then(cache=>{
        console.log("catching shell assests")
        cache.addAll(assets);
    })
    );
});

//service activated
self.addEventListener('activate',evt=>{
    //console.log("service worker activated")
});
// fetch event
self.addEventListener('fetch',evt=>{
  // console.log("fetch evet",evt)
   evt.respondWith(
       caches.match(evt.request).then(cacheRes=>{
           return cacheRes || fetch(evt.request);
       })
   );
});