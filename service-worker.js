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
    "url": "404.html",
    "revision": "88398d439881755fc2c9762dbb3f54fe"
  },
  {
    "url": "assets/css/0.styles.5d6d926c.css",
    "revision": "d2e23cf9040cf9895723b5ced456f4f0"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "873e67143dd8c1f1cc90b16f701cf972"
  },
  {
    "url": "assets/img/android-chrome-512x512.png",
    "revision": "0b83926b56ee9e9147dfdb3b1564483a"
  },
  {
    "url": "assets/img/apple-touch-icon-152x152.png",
    "revision": "1ce7ab88c0ffd5423e1a19b8dc85b867"
  },
  {
    "url": "assets/img/favicon.svg",
    "revision": "a3d5434e6c56e19b109bbdd50a42382e"
  },
  {
    "url": "assets/img/head.svg",
    "revision": "a3d5434e6c56e19b109bbdd50a42382e"
  },
  {
    "url": "assets/img/msapplication-icon-144x144.png",
    "revision": "30ba2d17567ae1f4d258a2a750f54c2e"
  },
  {
    "url": "assets/img/safari-pinned-tab.svg",
    "revision": "a3d5434e6c56e19b109bbdd50a42382e"
  },
  {
    "url": "assets/js/1.8aa38ccd.js",
    "revision": "53b08983cc73bb78c7ee105f5ad8dd60"
  },
  {
    "url": "assets/js/10.a8ac6fc0.js",
    "revision": "6661bc4694f5440dd40de20286fabea0"
  },
  {
    "url": "assets/js/100.533979c9.js",
    "revision": "e66a6eb0a128ea2c229bb56c4a2a338b"
  },
  {
    "url": "assets/js/101.d5ecd282.js",
    "revision": "ead1ab75d58803add5cd5008ae942c70"
  },
  {
    "url": "assets/js/102.db1cec4e.js",
    "revision": "0095eac520960dbecbd3d120f7c46ed7"
  },
  {
    "url": "assets/js/103.cac32383.js",
    "revision": "bbd1ce08866d16f6e8b246859a6a2429"
  },
  {
    "url": "assets/js/104.ed83477a.js",
    "revision": "091be24e873005758fe4ef112422e56a"
  },
  {
    "url": "assets/js/105.ddf7edfb.js",
    "revision": "fd610786d93e045931ae44f26b6dbd00"
  },
  {
    "url": "assets/js/106.9c207f6f.js",
    "revision": "8d6bb4b8a6edb22ce4ea2eea6f484f3f"
  },
  {
    "url": "assets/js/107.edd90e6a.js",
    "revision": "62eb9ddf7a619ae58943e502e50dcff0"
  },
  {
    "url": "assets/js/108.1a029910.js",
    "revision": "d374044f831507d27bf18bb3bcb26178"
  },
  {
    "url": "assets/js/109.ee54ef13.js",
    "revision": "b8a62805a67bbf7e25d1aca3a8445240"
  },
  {
    "url": "assets/js/11.b065ac06.js",
    "revision": "44d3452b37a6d4e7e84285c16df09943"
  },
  {
    "url": "assets/js/110.69352451.js",
    "revision": "e0b5b553553cab6187e0f03e7f746080"
  },
  {
    "url": "assets/js/111.31f6eaf6.js",
    "revision": "d014050a0cd2bcace12ca768aa642097"
  },
  {
    "url": "assets/js/112.609bb3e9.js",
    "revision": "48e2eb096860ea6428b51a6c4aa2cb10"
  },
  {
    "url": "assets/js/113.c0e7dd12.js",
    "revision": "0084e785120c0991d83d83e4934f67aa"
  },
  {
    "url": "assets/js/114.04149242.js",
    "revision": "28acc9bc5e4a20f2e2c370d522c3d1a6"
  },
  {
    "url": "assets/js/115.3b8142cf.js",
    "revision": "7a99bb63109c2d65364a6ed7d950c732"
  },
  {
    "url": "assets/js/116.3370e45b.js",
    "revision": "2cbc82a8363e74571a546a2dfc609628"
  },
  {
    "url": "assets/js/117.dc59d786.js",
    "revision": "3b040a02028364b1b5fd46f62ae21bf8"
  },
  {
    "url": "assets/js/118.c8340703.js",
    "revision": "44d9bd3d243e2d1b3ab75cfb4c04dbdb"
  },
  {
    "url": "assets/js/119.acbeeab6.js",
    "revision": "e46125ab90ba88b66d9f9f52a6ce51ea"
  },
  {
    "url": "assets/js/12.c6b9fb10.js",
    "revision": "c8ff81dced75dadf0d3a0fc6ea3cca5a"
  },
  {
    "url": "assets/js/120.f4bb581c.js",
    "revision": "153d14afdf63821e19d95bb48649ba84"
  },
  {
    "url": "assets/js/121.b6e47c7c.js",
    "revision": "a460b81df37a8989c0441e1d252505af"
  },
  {
    "url": "assets/js/122.4142e7d8.js",
    "revision": "5af914e048398e6744594d564992216e"
  },
  {
    "url": "assets/js/123.e20a721c.js",
    "revision": "c8d6412f41a45e7aa70e0971dff788f6"
  },
  {
    "url": "assets/js/124.066c5409.js",
    "revision": "b7782716600bf7e81d91b1ef7f0852cb"
  },
  {
    "url": "assets/js/125.945eef74.js",
    "revision": "40ea7c128935fbefe16b5b212108c7dc"
  },
  {
    "url": "assets/js/126.a3401a0f.js",
    "revision": "2f8b1c8f321e7d0f2732f5a275d298b2"
  },
  {
    "url": "assets/js/127.89f83744.js",
    "revision": "9692c86fde94172b86a5a40c20a018f2"
  },
  {
    "url": "assets/js/128.77e46df8.js",
    "revision": "eceeebfc0335cefc4273a7a96e8f47b0"
  },
  {
    "url": "assets/js/129.ed04dbae.js",
    "revision": "93800ecc97b95b62be92826d39c93bc8"
  },
  {
    "url": "assets/js/13.1d21af37.js",
    "revision": "31187ad9b0c809e6a956287d72048cd4"
  },
  {
    "url": "assets/js/130.3ea4b4c1.js",
    "revision": "bb1838692e67dba723f4041cdbf1d88f"
  },
  {
    "url": "assets/js/131.8e21c082.js",
    "revision": "6d12a3969ab4052ccb8f5552f345c05a"
  },
  {
    "url": "assets/js/132.650034e9.js",
    "revision": "ac741d41ca8fccffda41a30bad75d005"
  },
  {
    "url": "assets/js/133.5943da33.js",
    "revision": "195130497505928e51e466e9576ea947"
  },
  {
    "url": "assets/js/134.1e2f8eda.js",
    "revision": "2073c173dfd4904192822693c84fc154"
  },
  {
    "url": "assets/js/135.102fe717.js",
    "revision": "6db36560e0bc8bcd247ae02986894442"
  },
  {
    "url": "assets/js/136.a42e823a.js",
    "revision": "559f1058cb643e3fb7099262cd3be6cc"
  },
  {
    "url": "assets/js/137.c9a5175e.js",
    "revision": "e6f75d5d8895ed24264f65dc0544a9e9"
  },
  {
    "url": "assets/js/138.4a90dec1.js",
    "revision": "814067e98e998b3ead822b3ee602eb11"
  },
  {
    "url": "assets/js/139.8c333319.js",
    "revision": "873f45b0e959ed0b05e2cb393ba7cca8"
  },
  {
    "url": "assets/js/14.78fa9c8e.js",
    "revision": "27d8af9fab1c73c8ca9a55e1164e3d47"
  },
  {
    "url": "assets/js/140.65d13485.js",
    "revision": "66a3d90e556bd9c7fdd9527b51fc991e"
  },
  {
    "url": "assets/js/141.d34d9447.js",
    "revision": "07f4a7bbde317c1ec6dd425c99025823"
  },
  {
    "url": "assets/js/142.3ca6ef23.js",
    "revision": "cfcc8fbd9134167a804af8f59d507ad5"
  },
  {
    "url": "assets/js/143.5acf06b5.js",
    "revision": "ac6a014c13af7d221628baac3c1f64ac"
  },
  {
    "url": "assets/js/144.8ac656c1.js",
    "revision": "8e9aa2c08c209d74f18339c671aa9beb"
  },
  {
    "url": "assets/js/145.24f72acc.js",
    "revision": "f11fcc5e804fea7627f92fbf0ff621c6"
  },
  {
    "url": "assets/js/146.e0331760.js",
    "revision": "ddf08ad5553defa2202799ab0dae9807"
  },
  {
    "url": "assets/js/147.8ddaed8b.js",
    "revision": "99ed77f5d6a4067ad2190107ec6a2c56"
  },
  {
    "url": "assets/js/148.dbe54781.js",
    "revision": "45db0ff74bd20533fec6ea2be7f1b33a"
  },
  {
    "url": "assets/js/149.51747d84.js",
    "revision": "c93c248f0509860574d31d372e9856ac"
  },
  {
    "url": "assets/js/15.bbe76529.js",
    "revision": "29dc237ff4ef18593434056268637cc4"
  },
  {
    "url": "assets/js/150.b65d075f.js",
    "revision": "e03f34b9a5f28c6f1edf3e310b5748ec"
  },
  {
    "url": "assets/js/151.c13e6d63.js",
    "revision": "73b9e08acc0095011c9967368dc57591"
  },
  {
    "url": "assets/js/152.1d0c6051.js",
    "revision": "d1b81d34d0094932a57670a46895ad2c"
  },
  {
    "url": "assets/js/153.523f1aa2.js",
    "revision": "24580cf5c812c701618530cd7efa88ed"
  },
  {
    "url": "assets/js/154.a092edef.js",
    "revision": "6369d70825c615c36b6c70bf92e6ff0b"
  },
  {
    "url": "assets/js/155.e0d25221.js",
    "revision": "86c44507d4ea303d52ac9fc244bdb1e7"
  },
  {
    "url": "assets/js/156.65057774.js",
    "revision": "b95fbb3883b55c85f0c5a2398da948ad"
  },
  {
    "url": "assets/js/157.f408ce47.js",
    "revision": "d12d084d5f14dbeed7453b816418ce46"
  },
  {
    "url": "assets/js/16.75a313f5.js",
    "revision": "7dc0edcfb66bc28fc1382dbec814c89c"
  },
  {
    "url": "assets/js/17.4fb0a655.js",
    "revision": "b7166ea3b4111768acadb35861036c31"
  },
  {
    "url": "assets/js/18.31ec25c3.js",
    "revision": "39af6fecfda285051cae357c5cf846f1"
  },
  {
    "url": "assets/js/19.b095ded8.js",
    "revision": "0ddd6864199aa24404ea92dd9ccb98b7"
  },
  {
    "url": "assets/js/20.5dc71a23.js",
    "revision": "3d74e6cb57dfc4a3f286ef6c867c4c67"
  },
  {
    "url": "assets/js/21.7380ef59.js",
    "revision": "ade84ba9655cee0cdfa221bfb7e97cb6"
  },
  {
    "url": "assets/js/22.3d7b1421.js",
    "revision": "41d1ddfa1b3a1f87a831045b834aa4f9"
  },
  {
    "url": "assets/js/23.c5e91e61.js",
    "revision": "2766562507fe44e63816022cf8c72ec3"
  },
  {
    "url": "assets/js/24.f671cbb2.js",
    "revision": "e5e96a042370ef3b4d9fd24a67d0d8cc"
  },
  {
    "url": "assets/js/25.c31993b5.js",
    "revision": "c62468ee0e846f3bf4aaf7b7b81149ad"
  },
  {
    "url": "assets/js/26.3f9675db.js",
    "revision": "8010ca0f02ef76a8613b9727e4dda365"
  },
  {
    "url": "assets/js/27.a5b0a37f.js",
    "revision": "2923ad7de82f1e5443e34c517d77bfde"
  },
  {
    "url": "assets/js/28.fe761871.js",
    "revision": "a2bf30e97ffb63919718edac507fc962"
  },
  {
    "url": "assets/js/29.8651764f.js",
    "revision": "6fc2b60ac8daf003d08d916e0bd724db"
  },
  {
    "url": "assets/js/30.ce1ab3e5.js",
    "revision": "cee74afa3d403b444d52d879328e7b2f"
  },
  {
    "url": "assets/js/31.c068015c.js",
    "revision": "82a6f17339150b35579300d770657e5c"
  },
  {
    "url": "assets/js/32.7832ee65.js",
    "revision": "c172a8997d7aa351a3884da3a119d0d5"
  },
  {
    "url": "assets/js/33.382ee512.js",
    "revision": "1f5a82d8377956df56913f49298d0e71"
  },
  {
    "url": "assets/js/34.8fe9cb6e.js",
    "revision": "fa412553ca31f95517aad41710ad9f89"
  },
  {
    "url": "assets/js/35.bbe41bdf.js",
    "revision": "35e0b440f3128bfd6e0960bd4ff007de"
  },
  {
    "url": "assets/js/36.216593c1.js",
    "revision": "7630db8fe8d85d29b2ff697b203765ee"
  },
  {
    "url": "assets/js/37.b9b337ab.js",
    "revision": "2e897e2850f38a3e7310adf65ecc0b1a"
  },
  {
    "url": "assets/js/38.55ec358f.js",
    "revision": "b0530965586975128a3a5d47be73266c"
  },
  {
    "url": "assets/js/39.fa6bd2be.js",
    "revision": "4fd70efa839820d0d2a7a1ac26e500c2"
  },
  {
    "url": "assets/js/4.ab46edbe.js",
    "revision": "664bcd4581b4ce4c39c94fd153a634c5"
  },
  {
    "url": "assets/js/40.107bd26d.js",
    "revision": "3fe3667a4494513722a6397635abe727"
  },
  {
    "url": "assets/js/41.55160358.js",
    "revision": "453b3d8d3fa789b24a1fa27466249c6a"
  },
  {
    "url": "assets/js/42.7c9b39a4.js",
    "revision": "33bdc6ba9ffdcdd09913e8afac0a25bf"
  },
  {
    "url": "assets/js/43.51d06851.js",
    "revision": "ca474e927abce8de54fc8348611d638e"
  },
  {
    "url": "assets/js/44.0201a0f2.js",
    "revision": "688cd112f767d90cb8a00a6364c240d0"
  },
  {
    "url": "assets/js/45.02c0e06f.js",
    "revision": "b328868d1939076f169ff03e19fcb2c3"
  },
  {
    "url": "assets/js/46.278ea480.js",
    "revision": "0ff755fa030e5e05fb7e95459260a96a"
  },
  {
    "url": "assets/js/47.e999d777.js",
    "revision": "ab2a76d04864885e43032dc66ec5326c"
  },
  {
    "url": "assets/js/48.eb778301.js",
    "revision": "91b66ec7e0602a8b4f67aeba5faec8e8"
  },
  {
    "url": "assets/js/49.8b17a4c2.js",
    "revision": "a9b0e339a2146a77d13c27656f574643"
  },
  {
    "url": "assets/js/5.bea0c15d.js",
    "revision": "09ad015cb101eb8f0325f78dfc5d92d1"
  },
  {
    "url": "assets/js/50.a2718ab9.js",
    "revision": "4ca96ca3dacbf64866b4090a11c87982"
  },
  {
    "url": "assets/js/51.873e182f.js",
    "revision": "d6fd163074b7474945719366102934fa"
  },
  {
    "url": "assets/js/52.509b7abe.js",
    "revision": "3af327afa269b483f80df31492cbd439"
  },
  {
    "url": "assets/js/53.9feec24f.js",
    "revision": "b83597898255a49f2215300967eb6cce"
  },
  {
    "url": "assets/js/54.62e05e7a.js",
    "revision": "f41827128c137c7933462d073af0e9a8"
  },
  {
    "url": "assets/js/55.f9bd803c.js",
    "revision": "f2bcd609fdf794677aa8c58802f83e2a"
  },
  {
    "url": "assets/js/56.fe1570a8.js",
    "revision": "8dd99530a99b69f41b9d2324be2e2d0f"
  },
  {
    "url": "assets/js/57.9549f4e5.js",
    "revision": "10999a8bf807305481100dfb4ce9094e"
  },
  {
    "url": "assets/js/58.0c153749.js",
    "revision": "6cf9eb32365ea42500df63be75140d4c"
  },
  {
    "url": "assets/js/59.949a1e41.js",
    "revision": "b834ea058354869769e6a607fd5527ad"
  },
  {
    "url": "assets/js/6.8a581767.js",
    "revision": "fe80697e29416353e9f9593ba488e792"
  },
  {
    "url": "assets/js/60.b046cd5b.js",
    "revision": "cf9515f10a5b2d1799496f9185b29bf6"
  },
  {
    "url": "assets/js/61.0c1e466e.js",
    "revision": "50670e211479b1a70aed231bb0afca15"
  },
  {
    "url": "assets/js/62.5834387c.js",
    "revision": "e5297d1db183507d34c3d259b0ab64af"
  },
  {
    "url": "assets/js/63.bf2f2f2e.js",
    "revision": "92b08025ece21e8d7672ea6b3e45da76"
  },
  {
    "url": "assets/js/64.58f331ac.js",
    "revision": "453790e2f3fa8457f0501d01e19cdfbd"
  },
  {
    "url": "assets/js/65.e1449240.js",
    "revision": "adfe56297f2e1f833146164c2d873006"
  },
  {
    "url": "assets/js/66.c6c34a27.js",
    "revision": "6895d7a68f01f1a2b1b2005f9554502e"
  },
  {
    "url": "assets/js/67.5ecf80dd.js",
    "revision": "0cca100cad898cb07daab0af2bf58da7"
  },
  {
    "url": "assets/js/68.518d9520.js",
    "revision": "315222726b227a5625d88c92de12b6c4"
  },
  {
    "url": "assets/js/69.381dbaee.js",
    "revision": "a4ce8e7015722e798e3c4540aca24d6b"
  },
  {
    "url": "assets/js/7.2efaa976.js",
    "revision": "f1c0720290cf7e54e3c6c21a42a21343"
  },
  {
    "url": "assets/js/70.b8c271c0.js",
    "revision": "81528e77760851401cb034fd89fe78b0"
  },
  {
    "url": "assets/js/71.3a0a173b.js",
    "revision": "fb035c3567da1a4687e4a5133993233a"
  },
  {
    "url": "assets/js/72.d104a1a3.js",
    "revision": "1181bf31b4ab0541a09400cc9496e518"
  },
  {
    "url": "assets/js/73.11fa4e5f.js",
    "revision": "22f0f1b381d7d9efb2ca4c6ff134c151"
  },
  {
    "url": "assets/js/74.c8097e27.js",
    "revision": "0b303bb195ee7f1026d65611469accde"
  },
  {
    "url": "assets/js/75.d3e364a4.js",
    "revision": "7a9352df8f20d0cd98d16a24ffc2f69c"
  },
  {
    "url": "assets/js/76.2db9b8ff.js",
    "revision": "59332af346a9bfa81b44f0f6b6172594"
  },
  {
    "url": "assets/js/77.e4ed0390.js",
    "revision": "6f9e2c8e61a20f6efc9558b9f3c098d3"
  },
  {
    "url": "assets/js/78.64cf5654.js",
    "revision": "7c8e0e485be809796684b2785062409b"
  },
  {
    "url": "assets/js/79.86c5e074.js",
    "revision": "f88a4541a65c579c3a32aaafbd1534bb"
  },
  {
    "url": "assets/js/8.f7e38a0d.js",
    "revision": "e4a42fd475999b66956b78f5dc4cbbc3"
  },
  {
    "url": "assets/js/80.f2824b14.js",
    "revision": "f935dae8d3992843f23420061c3db60d"
  },
  {
    "url": "assets/js/81.76476f98.js",
    "revision": "d469f3e7c2a420d7e1cad6e511103cc1"
  },
  {
    "url": "assets/js/82.6e77780e.js",
    "revision": "190a6f07c01729ebd6643f4c3c779fd1"
  },
  {
    "url": "assets/js/83.7063c708.js",
    "revision": "189cd74194a50a41f732c97bfa870577"
  },
  {
    "url": "assets/js/84.0b8c2a34.js",
    "revision": "3bbb37c1886f3e836251eb1d1a9fc515"
  },
  {
    "url": "assets/js/85.14fefdf4.js",
    "revision": "0d78e79d0b482142a7605b576e13d1e8"
  },
  {
    "url": "assets/js/86.af6ddbc1.js",
    "revision": "55cf95703e82927d63cac32c887c1f63"
  },
  {
    "url": "assets/js/87.2de822b8.js",
    "revision": "0538b8c6aea76b460d9969224f8f7a88"
  },
  {
    "url": "assets/js/88.ba17c6a3.js",
    "revision": "cf1768fc42d3b76b83cfc32e51626460"
  },
  {
    "url": "assets/js/89.d51e1f26.js",
    "revision": "427a5370abe9790e139d5b7a11c20f35"
  },
  {
    "url": "assets/js/9.40511abe.js",
    "revision": "6921f1a8eb410288e9e67008fb6b47b5"
  },
  {
    "url": "assets/js/90.e589086e.js",
    "revision": "ed79516a426aac7550d6c726278da6c8"
  },
  {
    "url": "assets/js/91.ce22dcb5.js",
    "revision": "020d73b1ca5d97225a4b44e7c04351bc"
  },
  {
    "url": "assets/js/92.d745ea40.js",
    "revision": "9a4e8f7631287c2bc113ef8f86900621"
  },
  {
    "url": "assets/js/93.769545bc.js",
    "revision": "b9afd836644f0cc75d8c731d69aa5fe3"
  },
  {
    "url": "assets/js/94.8cc5ca0e.js",
    "revision": "40b0039c39e453419fe9806b7433d7c3"
  },
  {
    "url": "assets/js/95.cbfcf43d.js",
    "revision": "cbd8ecfa8d6a2825cdf17c0f45c44546"
  },
  {
    "url": "assets/js/96.d763f581.js",
    "revision": "f8762666111c0f1d9cc8cbe2d422c7b5"
  },
  {
    "url": "assets/js/97.1b28ca86.js",
    "revision": "c9b9f6278e38d4c09f0d591e4f4d02a0"
  },
  {
    "url": "assets/js/98.ae95d8a3.js",
    "revision": "34fd498a8bec290e569832bcd3a44cc6"
  },
  {
    "url": "assets/js/99.6817a84f.js",
    "revision": "d0100a60a8868415b8aaa07647753f37"
  },
  {
    "url": "assets/js/app.42770c2e.js",
    "revision": "ac10375e93632a437dab831f5c126c31"
  },
  {
    "url": "assets/js/count.js",
    "revision": "90ca8a7e958a43f5813a6b51cc422ec3"
  },
  {
    "url": "assets/js/vendors~flowchart.4ba8361d.js",
    "revision": "e376c449a5ae807b47f086c575f96673"
  },
  {
    "url": "index.html",
    "revision": "6aa00812828acdf597c6ccf8c1e8f519"
  },
  {
    "url": "posts/197001011.html",
    "revision": "0a26ea67c2cdba8933d3aad5a5935ae8"
  },
  {
    "url": "posts/201905131.html",
    "revision": "941cc1c4cd77c98709228cf3c1e0c610"
  },
  {
    "url": "posts/201905161.html",
    "revision": "20277edad3b115b6042a16fcf76f7cb3"
  },
  {
    "url": "posts/201905181.html",
    "revision": "df1629b286051f19f302ac44fc107967"
  },
  {
    "url": "posts/201905182.html",
    "revision": "092f6327cc34e1812191ba65c092ee2f"
  },
  {
    "url": "posts/201905201.html",
    "revision": "c798ddb86b62cf48f077424b9d3efad3"
  },
  {
    "url": "posts/201905221.html",
    "revision": "7b2d08d1c46d0c8e8eba8b5111a31ffb"
  },
  {
    "url": "posts/201905251.html",
    "revision": "b8be9a3974158669b6996329a97a421c"
  },
  {
    "url": "posts/201905261.html",
    "revision": "d60b924ba43a3bc4c88b67c1b62c4dd8"
  },
  {
    "url": "posts/201905271.html",
    "revision": "54f889718594c32b341c98ca1826144a"
  },
  {
    "url": "posts/201905281.html",
    "revision": "638e176a0d8d71bb8550cb72a287e4ca"
  },
  {
    "url": "posts/201905291.html",
    "revision": "0bdad62f14a27db8e08bd485b79757df"
  },
  {
    "url": "posts/201906011.html",
    "revision": "3babd8b53f57404f5890c6f0e76b6bda"
  },
  {
    "url": "posts/201906012.html",
    "revision": "bf6ae24c4b1c21e13a81476309ed541d"
  },
  {
    "url": "posts/201906041.html",
    "revision": "9746092532e4694c8b9bc7727d2aa7a2"
  },
  {
    "url": "posts/201906111.html",
    "revision": "1019d6ebe3b17b642f9b2a08c2acb0d0"
  },
  {
    "url": "posts/201906161.html",
    "revision": "22840140f93199112c78edde21c41dc4"
  },
  {
    "url": "posts/201907041.html",
    "revision": "2f6c528b08306a495b1b6c889790d5ad"
  },
  {
    "url": "posts/201907071.html",
    "revision": "1967e53d5439c3439d10027e52189129"
  },
  {
    "url": "posts/201907131.html",
    "revision": "e0d4dcd8915c52bea6a3fe47265988db"
  },
  {
    "url": "posts/201907161.html",
    "revision": "35a8337109ff98a20c3647b2dbd057b3"
  },
  {
    "url": "posts/201907241.html",
    "revision": "0e88ae279c128b01b7932ce7927431e5"
  },
  {
    "url": "posts/201908031.html",
    "revision": "5ce6286b24f2bb22302dd94681152816"
  },
  {
    "url": "posts/201908061.html",
    "revision": "fd8f436522305ea5a03c719ff5de3d9b"
  },
  {
    "url": "posts/201908101.html",
    "revision": "18cb332f87b98f4b83ae2d0f42da4011"
  },
  {
    "url": "posts/201908121.html",
    "revision": "df66d5a4351c71dda9d0e802faec946f"
  },
  {
    "url": "posts/201908241.html",
    "revision": "07a99c19fdcc7310df5c4f1e9a47d7a4"
  },
  {
    "url": "posts/201908271.html",
    "revision": "cf82c232f07fc2637faeefca44ae4c7f"
  },
  {
    "url": "posts/201908301.html",
    "revision": "4bca1c31c321e299249cf3785e07e953"
  },
  {
    "url": "posts/201908311.html",
    "revision": "3b55d7df0aebab13ff27e06e84302705"
  },
  {
    "url": "posts/201909231.html",
    "revision": "0896954558685e178b5f7457b50a9803"
  },
  {
    "url": "posts/201909281.html",
    "revision": "7d1715d54324dfdf5175b52d8a096213"
  },
  {
    "url": "posts/201909291.html",
    "revision": "d5aa158ee6a50fa9b8f3271a78076a1e"
  },
  {
    "url": "posts/201909301.html",
    "revision": "9e3bd651683505cfc4e97ed6df312e81"
  },
  {
    "url": "posts/201910031.html",
    "revision": "e153c7b79c14f4e6daf632b3b5df0446"
  },
  {
    "url": "posts/201910041.html",
    "revision": "215ea5f2af4afdb0b30ce16d0ca09a8a"
  },
  {
    "url": "posts/201910061.html",
    "revision": "edb77e1e72cb651dcb5a1364f8e12985"
  },
  {
    "url": "posts/201910071.html",
    "revision": "7886f7aaa1af2aae3f7f5c07b40bb89d"
  },
  {
    "url": "posts/201910111.html",
    "revision": "caf8f1e74a632ccbd062e5ad28891687"
  },
  {
    "url": "posts/201910151.html",
    "revision": "2ec381632b49d2915eddfb13775b2b6e"
  },
  {
    "url": "posts/201910161.html",
    "revision": "7b7e3d5379d3a7394d675624db3a28e4"
  },
  {
    "url": "posts/201910281.html",
    "revision": "af61e075dc1a031f0bba7ad4acfb00c0"
  },
  {
    "url": "posts/201911121.html",
    "revision": "56a7b791b0ff600ba9ea814faec117d0"
  },
  {
    "url": "posts/201911171.html",
    "revision": "8f19f52e1606ca637a897d33035db211"
  },
  {
    "url": "posts/201911251.html",
    "revision": "fdb70ea9c470263eec77f1b1b3a9440e"
  },
  {
    "url": "posts/201911281.html",
    "revision": "acbc498d492798801dd14a13e6837ac9"
  },
  {
    "url": "posts/201912011.html",
    "revision": "21b2897885b9e7bacded4ed57c815fb7"
  },
  {
    "url": "posts/201912151.html",
    "revision": "f2bf365b00b6bc45abc34da0110a9423"
  },
  {
    "url": "posts/201912311.html",
    "revision": "a9fcfb4d28f8b2d21fc40e97f6f371b4"
  },
  {
    "url": "posts/202001191.html",
    "revision": "a6cec28689af5a6f706118eeb489499e"
  },
  {
    "url": "posts/202001241.html",
    "revision": "536730971b030b837e08e08da0d716c9"
  },
  {
    "url": "posts/202001271.html",
    "revision": "8d91c9bc026b1b0e1d5f314e9d74e86a"
  },
  {
    "url": "posts/202001301.html",
    "revision": "2fcab8bb115574c9f055531c310703be"
  },
  {
    "url": "posts/202002011.html",
    "revision": "35a7d509487bb57188d63bbd17637cd7"
  },
  {
    "url": "posts/202002041.html",
    "revision": "eff0404cc79bc066ba043a79867a0166"
  },
  {
    "url": "posts/202002061.html",
    "revision": "f0d5608611c8843f9d4cfda7519e6ebc"
  },
  {
    "url": "posts/202002062.html",
    "revision": "835516046dd8dd8d4a51fb4adf193ba1"
  },
  {
    "url": "posts/202002063.html",
    "revision": "2bd746309c68e4dae16be259251ca2e4"
  },
  {
    "url": "posts/202002071.html",
    "revision": "4d1f321d85ecb07863b5d1563505b361"
  },
  {
    "url": "posts/202002101.html",
    "revision": "5a9f1d0e22f4efedd8472ac9281bab16"
  },
  {
    "url": "posts/202002111.html",
    "revision": "d885b348e24da6b5865d47d741624111"
  },
  {
    "url": "posts/202002131.html",
    "revision": "31541326753eae20ae3237dac57db271"
  },
  {
    "url": "posts/202002161.html",
    "revision": "9489a95dcda1a78c3cd7fbc29ad67e91"
  },
  {
    "url": "posts/202002162.html",
    "revision": "5cd29979e9c9449eb43e1ded6b0b9153"
  },
  {
    "url": "posts/202002163.html",
    "revision": "0dfc2081d892bb0f320f8951029d1349"
  },
  {
    "url": "posts/202002164.html",
    "revision": "47fb4dcae00627ccfe9b6f1bf7260068"
  },
  {
    "url": "posts/202002171.html",
    "revision": "29bc25db53ba38e0612ff7b8a0fbacba"
  },
  {
    "url": "posts/202002172.html",
    "revision": "67047b10126c14bca2fc3db20a6cd1fa"
  },
  {
    "url": "posts/202002221.html",
    "revision": "6ffe8ecc432fb391bb748b1e5e55590b"
  },
  {
    "url": "posts/202002241.html",
    "revision": "afa20b0da1f1e020d6b9d16f055bde98"
  },
  {
    "url": "posts/202002271.html",
    "revision": "1dda8712cb64262de58117057637ee7b"
  },
  {
    "url": "posts/202003011.html",
    "revision": "9a56c92772b6fb1c7ba6bf5ff31265b4"
  },
  {
    "url": "posts/202003021.html",
    "revision": "af3dbe65d33dde4b4e297c9678ae1672"
  },
  {
    "url": "posts/202003061.html",
    "revision": "b5c49032eb4c4e300bc5ef3d8013c542"
  },
  {
    "url": "posts/202003071.html",
    "revision": "4ebe34f566cee97bef9ce942f62b8873"
  },
  {
    "url": "posts/202003072.html",
    "revision": "eecf42a73a05309b8bb1c3a7d41568b9"
  },
  {
    "url": "posts/202003081.html",
    "revision": "3d7edbdbcc534f80329fb647fc08736a"
  },
  {
    "url": "posts/202003111.html",
    "revision": "3ec1a9a395323ef200ff4f120400f17e"
  },
  {
    "url": "posts/202003141.html",
    "revision": "8cad22b6b8337c87eb3ca1309fb1dae7"
  },
  {
    "url": "posts/202003161.html",
    "revision": "9593068ca8da29bba30d5f91f9eca146"
  },
  {
    "url": "posts/202003181.html",
    "revision": "bbfbfb3c3055d3d512135c14da858227"
  },
  {
    "url": "posts/202003211.html",
    "revision": "2ff47f2e78acf484b2536dc21a1c3f0d"
  },
  {
    "url": "posts/202003212.html",
    "revision": "d5ece963a6a80af6c31723174e1d8105"
  },
  {
    "url": "posts/202003231.html",
    "revision": "cd97136c5e208c7f52347d70b5032c68"
  },
  {
    "url": "posts/202003241.html",
    "revision": "fadb169fb330512f87a4a97ad2c5560f"
  },
  {
    "url": "posts/202003271.html",
    "revision": "50ebaa93eb5cc180832a1fffdb3c563d"
  },
  {
    "url": "posts/202003281.html",
    "revision": "198b0ca6b4a806423e1538a3f2f8e581"
  },
  {
    "url": "posts/202003311.html",
    "revision": "44c43c4a9e5183bafd56cb3e23aff58f"
  },
  {
    "url": "posts/202004031.html",
    "revision": "8809ae287164db5d92b810a24fe03d84"
  },
  {
    "url": "posts/202004051.html",
    "revision": "478b731d2f987e26519cb904d5fbf166"
  },
  {
    "url": "posts/202004071.html",
    "revision": "a03e5a97a40263efb81a913223bc9cdb"
  },
  {
    "url": "posts/202004091.html",
    "revision": "d58bd1c8b04b6cdd889f472ec543eeab"
  },
  {
    "url": "posts/202004141.html",
    "revision": "ed7aa87295349ade08e674877a2a67bd"
  },
  {
    "url": "posts/202004151.html",
    "revision": "9c2275e42a9be0a8aff83e0661965baa"
  },
  {
    "url": "posts/202004181.html",
    "revision": "33aa8a3ced065c4709121bc5f950ed1c"
  },
  {
    "url": "posts/202004221.html",
    "revision": "b233aad1c4c18db819878108f6fa2af0"
  },
  {
    "url": "posts/202004241.html",
    "revision": "bd19288798eea905272e23df58efd1a2"
  },
  {
    "url": "posts/202004261.html",
    "revision": "1aee0c3468543d7336a9febf2db2614c"
  },
  {
    "url": "posts/202004271.html",
    "revision": "27a258c26a6e6d26c3d0124afd6825c6"
  },
  {
    "url": "posts/202004291.html",
    "revision": "f352efe9b809d6a238fedcf9310ce623"
  },
  {
    "url": "posts/202005031.html",
    "revision": "4986e719e398e8a054cc965704e64ba9"
  },
  {
    "url": "posts/202005032.html",
    "revision": "54e3dc5cf2cf873b8ec3790180792be5"
  },
  {
    "url": "posts/202005051.html",
    "revision": "cce0468fb38c92b52da686a41cdbeb00"
  },
  {
    "url": "posts/202005052.html",
    "revision": "470315d5416db8a94045dc0cfdfe04cd"
  },
  {
    "url": "posts/202005061.html",
    "revision": "790dc373dde0c39b4d42efe7af3bb7c5"
  },
  {
    "url": "posts/202005091.html",
    "revision": "1b8963a324f6f9def415cbe1f7f47dba"
  },
  {
    "url": "posts/202005111.html",
    "revision": "cd0fc37a2be9311a9067359296aa474c"
  },
  {
    "url": "posts/202005121.html",
    "revision": "88d1b522f582bf6ddc4dca6dbe5490b2"
  },
  {
    "url": "posts/202005141.html",
    "revision": "75f551d739bdcd47317a612c2286aa8a"
  },
  {
    "url": "posts/202005181.html",
    "revision": "1c6244798a8e5016d958403e967ea64c"
  },
  {
    "url": "posts/202005211.html",
    "revision": "593a59419c49f4688676b961484c2031"
  },
  {
    "url": "posts/202005231.html",
    "revision": "62b38000f1933f5ad37606476fe3cdb5"
  },
  {
    "url": "posts/202005251.html",
    "revision": "f6ccfb3c6aa190a4b357d9e8a53c42b7"
  },
  {
    "url": "posts/202005291.html",
    "revision": "ed8f71e29678b5ea8064b09ac2bcb13b"
  },
  {
    "url": "posts/202006011.html",
    "revision": "1250722af404772cd6ae107a374a4ed1"
  },
  {
    "url": "posts/202006031.html",
    "revision": "745a5ce847ceb7f94fb27633d855733d"
  },
  {
    "url": "posts/202006061.html",
    "revision": "d300f2db42b1cb574d395528456e4985"
  },
  {
    "url": "posts/202006091.html",
    "revision": "ac313fed8c05bddf8a7f5b29c1f55b54"
  },
  {
    "url": "posts/202006121.html",
    "revision": "1f3bee76175f25fb575e8ef62a0d8e23"
  },
  {
    "url": "posts/202006171.html",
    "revision": "2dfd8ed6726483cb8fc3e32b67033fd9"
  },
  {
    "url": "posts/202006191.html",
    "revision": "7a6ac7c9ab0bf6ca545e0ff5e8ee03a0"
  },
  {
    "url": "posts/202006221.html",
    "revision": "895698c782fe9989842b10f9155e896e"
  },
  {
    "url": "posts/202006281.html",
    "revision": "77c4bc5490f0b8cf6025fe54d350d3d1"
  },
  {
    "url": "posts/202007031.html",
    "revision": "de4d22caa291fa3f1b53ef7f916655da"
  },
  {
    "url": "posts/202007061.html",
    "revision": "bc00f00ddd5d60bbe297944256b849e7"
  },
  {
    "url": "posts/202007111.html",
    "revision": "f7230eb367d95c2253ca9a153e022b75"
  },
  {
    "url": "posts/202007161.html",
    "revision": "ade4584b44a4f810addbbe4fa18662de"
  },
  {
    "url": "posts/202007191.html",
    "revision": "2f3c6999409b2c0b7f05ef91c57ce663"
  },
  {
    "url": "posts/202007221.html",
    "revision": "cc4c9badc54d2e6da8ae4c462b9ac0cf"
  },
  {
    "url": "posts/202007241.html",
    "revision": "8a9192d9f637668bf2750ed76d43f1cc"
  },
  {
    "url": "posts/202007281.html",
    "revision": "0f319fcaa7268371c5b84eae885b6675"
  },
  {
    "url": "posts/202008091.html",
    "revision": "8dc7777445f32abeddd7db5475704960"
  },
  {
    "url": "posts/202008131.html",
    "revision": "6f8b76876d41b888c063ca731bfacd80"
  },
  {
    "url": "posts/202008191.html",
    "revision": "6cc9e881bb1eded35c2da757e442cddd"
  },
  {
    "url": "posts/202008201.html",
    "revision": "bd878ecbbf4e60dbb1136d375df71029"
  },
  {
    "url": "posts/202008231.html",
    "revision": "01d98068099026b96c28445ce23932e4"
  },
  {
    "url": "posts/202008281.html",
    "revision": "621e36cf8c5d68facbe15f24af8936e3"
  },
  {
    "url": "posts/202009021.html",
    "revision": "183fce29c792dbda4b47f3f8535236aa"
  },
  {
    "url": "posts/202009061.html",
    "revision": "eb26e90fd1d24005199fc782523ada10"
  },
  {
    "url": "posts/202009091.html",
    "revision": "d731c8987bea9693546be44f4b512f71"
  },
  {
    "url": "posts/categories/Algorithm.html",
    "revision": "d0a4c0e4ac46e8b2804f82172a611d71"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "0d47e896248624c016db92b795618570"
  },
  {
    "url": "posts/categories/Java.html",
    "revision": "8d105857b21624cf777074b7d19cb14b"
  },
  {
    "url": "posts/categories/Life.html",
    "revision": "4507a6bc6279456d02a50be7c657516f"
  },
  {
    "url": "posts/categories/Note.html",
    "revision": "804eb0da7537b5ac207923a93b6fd94b"
  },
  {
    "url": "posts/categories/Other.html",
    "revision": "68edd4dcfb88933d9c15665d091d892b"
  },
  {
    "url": "posts/index.html",
    "revision": "f61038452871d1a60d5b83f3b2f19fe1"
  },
  {
    "url": "posts/tags/Android.html",
    "revision": "2d451aa23a3bdb70d35822692a1f2bfe"
  },
  {
    "url": "posts/tags/bfs.html",
    "revision": "adfb9ac9c47e5804f8ac335a22e5ec95"
  },
  {
    "url": "posts/tags/form表单.html",
    "revision": "bed1c96825f87198093e433d6cb24e0c"
  },
  {
    "url": "posts/tags/from.html",
    "revision": "32376f3e85f33a0fb2d4ac8eea036e6b"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "d39fa41a04bacd56e2301a1e6a02bee8"
  },
  {
    "url": "posts/tags/java.html",
    "revision": "bace3e6d39aa70eaebf2be2fa622d841"
  },
  {
    "url": "posts/tags/Markdown语法.html",
    "revision": "380c5855d852627ed1ab831b937e84ac"
  },
  {
    "url": "posts/tags/maven.html",
    "revision": "0cdea47943816a901781b2fe29ebb924"
  },
  {
    "url": "posts/tags/mybatis.html",
    "revision": "2eeab830646399a639668bb4a0b90c5c"
  },
  {
    "url": "posts/tags/mysql.html",
    "revision": "68093aec8191757b57a370b7341b877b"
  },
  {
    "url": "posts/tags/PHP.html",
    "revision": "ae5123f1939fde70bc047de46de2f6fc"
  },
  {
    "url": "posts/tags/PWA.html",
    "revision": "5e182ace8bea03981485f67daf7ae407"
  },
  {
    "url": "posts/tags/spring.html",
    "revision": "0f1d47b1293596bc4bfdd4ed392c51e7"
  },
  {
    "url": "posts/tags/Spring.html",
    "revision": "d8dfe9004e69027ed6b9fb116b6daad3"
  },
  {
    "url": "posts/tags/ssh.html",
    "revision": "6ae167b479fb86d60d1be5694e37e01b"
  },
  {
    "url": "posts/tags/ssm.html",
    "revision": "02f46f2acb47ee5b206d8086f37d3141"
  },
  {
    "url": "posts/tags/token.html",
    "revision": "d9db2ffdf99b9cbd50ee6214781bb4ab"
  },
  {
    "url": "posts/tags/ubuntu.html",
    "revision": "c592b00d713bbf0bec72ac686d0473cf"
  },
  {
    "url": "posts/tags/UML.html",
    "revision": "fc1c89f39994a65577b2098ecb40c833"
  },
  {
    "url": "posts/tags/web.html",
    "revision": "513285cdbef46d65665967fec58ae556"
  },
  {
    "url": "posts/tags/二叉树.html",
    "revision": "25fe283d491ae743eeeac018951af1f8"
  },
  {
    "url": "posts/tags/优化.html",
    "revision": "51214110b7c01b80a6920bb9445782b6"
  },
  {
    "url": "posts/tags/作业.html",
    "revision": "689c20a53a4e45b001cad8ca0a3b6523"
  },
  {
    "url": "posts/tags/最小生成树.html",
    "revision": "9ab70f579b3f00bbca2ea3073ee330e3"
  },
  {
    "url": "posts/tags/动态规划.html",
    "revision": "b234fb44f2b6c07ccce1bf8a8fe9f9ae"
  },
  {
    "url": "posts/tags/动规.html",
    "revision": "3f8d47775a2f08b5cc5e2fb75f35f1b3"
  },
  {
    "url": "posts/tags/博客.html",
    "revision": "7a0561b56e10b835dd6faddef078208a"
  },
  {
    "url": "posts/tags/友链.html",
    "revision": "2197921b28dccbc9a5d7adaf856b44cb"
  },
  {
    "url": "posts/tags/名单.html",
    "revision": "a2fb8133fa171f8542e79d4810ec719c"
  },
  {
    "url": "posts/tags/回溯.html",
    "revision": "c0af8239216af0b136b2b088a9044551"
  },
  {
    "url": "posts/tags/图论.html",
    "revision": "c834a65915e15767ddbf90808df16eb2"
  },
  {
    "url": "posts/tags/安装系统.html",
    "revision": "499e5a8719aea732d168e6aa2313f682"
  },
  {
    "url": "posts/tags/小项目.html",
    "revision": "0581b8a027c0c36ac4de163c0263a730"
  },
  {
    "url": "posts/tags/心话.html",
    "revision": "68a023ec9bbfa5305220542340598273"
  },
  {
    "url": "posts/tags/想法.html",
    "revision": "870b9df70ab3716c17fd2faa3754736e"
  },
  {
    "url": "posts/tags/感悟.html",
    "revision": "11ee1258dd96387b4ddb1e126ceba722"
  },
  {
    "url": "posts/tags/感想.html",
    "revision": "3f289159b78a96cafd11dfb3fb37c048"
  },
  {
    "url": "posts/tags/数据库.html",
    "revision": "17d4eb8b0ee93e37696bcb315b38402d"
  },
  {
    "url": "posts/tags/日记.html",
    "revision": "a83dc0977ba457cf81e76ad3a4a46d65"
  },
  {
    "url": "posts/tags/流程图.html",
    "revision": "52561de02033e20f4a039456d20991e8"
  },
  {
    "url": "posts/tags/测试.html",
    "revision": "9d05a63321fb9de20f651f4a1172e1cd"
  },
  {
    "url": "posts/tags/爬虫.html",
    "revision": "a7dab0aa8d78ced8017ebe7a995639f1"
  },
  {
    "url": "posts/tags/画图.html",
    "revision": "4952ca3bbccd32fbc08b2e84497a4d6c"
  },
  {
    "url": "posts/tags/疑惑.html",
    "revision": "c0a491aefeddb0020fd2f50800877f86"
  },
  {
    "url": "posts/tags/疑问.html",
    "revision": "684ce38bbc502f0cb8254a97c383a5a8"
  },
  {
    "url": "posts/tags/系统.html",
    "revision": "4f475eddc17c2ad2b6dce7784d22e289"
  },
  {
    "url": "posts/tags/网盘.html",
    "revision": "fbd6242b50352d7623f66bb222082d88"
  },
  {
    "url": "posts/tags/背包.html",
    "revision": "92a3657d4cc82dbd2702805aa72d832d"
  },
  {
    "url": "posts/tags/蓝桥杯.html",
    "revision": "976485eee0441e4c0acc4acac0119100"
  },
  {
    "url": "posts/tags/设计模式.html",
    "revision": "342737a9089c408094f5282485ef56bc"
  },
  {
    "url": "posts/tags/话流年.html",
    "revision": "7fd3263c7623fadc430e95a02cad6cfc"
  },
  {
    "url": "posts/tags/贪心算法.html",
    "revision": "85af2ccffc376014551bc1b69b526451"
  },
  {
    "url": "posts/tags/软件工程.html",
    "revision": "09b38aee8ed00a7a60a735e872e1aa04"
  },
  {
    "url": "posts/tags/软考.html",
    "revision": "857ba695ee6c4608778c126ad8321a88"
  },
  {
    "url": "posts/tags/进程.html",
    "revision": "91a0d62a8d629bf6c61e80694e8eacd7"
  },
  {
    "url": "posts/tags/通信.html",
    "revision": "bf2ce86d916de8be20e2f286d1e316b9"
  },
  {
    "url": "posts/tags/问题.html",
    "revision": "15a33996455ce4cb5e4adfaf7c52bf23"
  },
  {
    "url": "posts/tags/闲谈.html",
    "revision": "a69dcc74d7e94aee192297fc514e8ff7"
  },
  {
    "url": "posts/tags/面试.html",
    "revision": "25525b4ae1d541160b6612bfa30f5281"
  },
  {
    "url": "posts/tags/高性能.html",
    "revision": "61aabe8490ab1721e090e14da50a2d12"
  },
  {
    "url": "share/index.html",
    "revision": "3aae66d8c015b179cab8e6a3ee23c8c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
