if(!self.define){let n,a={};const e=(e,i)=>(e=new URL(e+".js",i).href,a[e]||new Promise((a=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=a,document.head.appendChild(n)}else n=e,importScripts(e),a()})).then((()=>{let n=a[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(i,s)=>{const d=n||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let o={};const r=n=>e(n,d),c={module:{uri:d},exports:o,require:r};a[d]=Promise.all(i.map((n=>c[n]||r(n)))).then((n=>(s(...n),o)))}}define(["./workbox-a91ef639"],(function(n){"use strict";n.setCacheNameDetails({prefix:"cma-adhan-pwa"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/adhan/css/444.a1050438.css",revision:null},{url:"/adhan/css/app.31d6cfe0.css",revision:null},{url:"/adhan/css/vendor.3277c068.css",revision:null},{url:"/adhan/favicon.ico",revision:"de949d19bc58aa6e138349e5165535ae"},{url:"/adhan/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/adhan/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/adhan/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/adhan/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/adhan/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/adhan/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/adhan/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/adhan/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"/adhan/icons/apple-icon-120x120.png",revision:"6b0dff9b418dd831465189922f522d7f"},{url:"/adhan/icons/apple-icon-152x152.png",revision:"6edbf5d4fb4036e5437388d36d98c0e1"},{url:"/adhan/icons/apple-icon-167x167.png",revision:"aebc71f59bcd75fe7641a60a88981c43"},{url:"/adhan/icons/apple-icon-180x180.png",revision:"8c35f18e133cbbfe572d4bb3b7ad92e7"},{url:"/adhan/icons/favicon-128x128.png",revision:"a55e7d4aa6734c70cf2db58a52275696"},{url:"/adhan/icons/favicon-16x16.png",revision:"66bebfe66b60d4eb967f8556a2410011"},{url:"/adhan/icons/favicon-32x32.png",revision:"859fdd7110ba29d0389f9cf92addc68e"},{url:"/adhan/icons/favicon-96x96.png",revision:"7d8c6ae91c8981601b187de76f10e3f2"},{url:"/adhan/icons/icon-128x128.png",revision:"634a95bddd51d1e79cad574df6c3ea60"},{url:"/adhan/icons/icon-192x192.png",revision:"831339b30075fdf719157fac4c23aaf4"},{url:"/adhan/icons/icon-256x256.png",revision:"0e7a82612ec4c773d646b950234ade95"},{url:"/adhan/icons/icon-384x384.png",revision:"d7076753f7f9dea2a21076bf17777ba5"},{url:"/adhan/icons/icon-512x512.png",revision:"db54c74984196cc064a3e740d5dfa702"},{url:"/adhan/icons/ms-icon-144x144.png",revision:"102d4ab1956cb0cd800cd76ddf1b8006"},{url:"/adhan/icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"/adhan/index.html",revision:"27dbe620dcf5ef1d87a163ef35197fa3"},{url:"/adhan/js/444.0d966003.js",revision:null},{url:"/adhan/js/452.5fca917b.js",revision:null},{url:"/adhan/js/99.781c7cbd.js",revision:null},{url:"/adhan/js/app.1f798ae3.js",revision:null},{url:"/adhan/js/vendor.38e3e630.js",revision:null},{url:"/adhan/manifest.json",revision:"73c94e94d76da3bd4ef0869a583eea78"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/adhan/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
