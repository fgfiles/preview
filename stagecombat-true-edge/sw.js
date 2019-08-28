/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/styles.css",
    "revision": "2a81b9d92c1a60d4aa33e19cd96678d3"
  },
  {
    "url": "img/resize.gif",
    "revision": "b16c4fb4875cd2e4ceec8f4e18b60a49"
  },
  {
    "url": "img/rotate.gif",
    "revision": "d12298c6715450b7d15dd330a63e5893"
  },
  {
    "url": "img/trueedge__soundbar_transparent.gif",
    "revision": "166615a27a7bb82ac2e00f12a8e9ebbf"
  },
  {
    "url": "img/trueedge__soundbar-disable_transparent.gif",
    "revision": "98ddab8cdb949fcb5b58272b93d62aca"
  },
  {
    "url": "index.html",
    "revision": "2bf8d79f4da3646dc8dcb5f24a0168bb"
  },
  {
    "url": "js/scripts.js",
    "revision": "2ef47634e9a5c5a1ed8c8ba84ac6d887"
  },
  {
    "url": "js/vendors.js",
    "revision": "dfa2436286e001c1c29a9252d86518a0"
  },
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
