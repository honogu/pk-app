if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const o=e=>n(e,s),t={module:{uri:s},exports:d,require:o};i[s]=Promise.all(c.map((e=>t[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-WkWh4rCa.js",revision:null},{url:"index.html",revision:"e9dc3e06dd07712eb814b4befb60d0e8"},{url:"registerSW.js",revision:"4fa65b0b7ca6dac7df25aad8858d7313"},{url:"favicon.ico",revision:"995f4df27a6cc59377222763387b7bea"},{url:"apple-touch-icon.png",revision:"c9d21789d3c17407df3d3752d3d1f7d6"},{url:"mask-icon.png",revision:"800dac92d85f96e912e6dd508eed9c25"},{url:"pwa-192x192.png",revision:"f90cfc23ef768c15c3fc313e8213ba09"},{url:"pwa-512x512.png",revision:"12f4f54f684cd403ec4ec8e1f240d99e"},{url:"manifest.webmanifest",revision:"ec71c76112d4de7493c2d057ac30aee0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));