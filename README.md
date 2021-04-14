# ZRAPi

`Z-RAPi` is made to help. Hopefully this module is useful for developer friends, you can request next scraping or features.

<b>Requires Node >= 12</b>

#### [Documentation](https://github.com/ZefianAlfian/z-rapi-module)

## Installation

```
npm i zrapi
```

## Example TextMaker

```js
const zrapi = require("zrapi");

//TextPro
zrapi
  .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    "teks",
  ])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//TextPro with 2 text
zrapi
  .textpro(
    "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
    ["teks", "teks 2"]
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Photooxy
zrapi
  .photooxy(
    "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
    ["teks"]
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Photooxy with 2 text
zrapi
  .photooxy(
    "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
    ["teks", "Teks 2"]
  )
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Example Paste

```js
const zrapi = require("zrapi");
zrapi
  .pastegg("you code, console.log('hi')", {
    title: "ZRapi",
    description: "Source code",
    nameFile: "hasil.txt",
  }) //optional
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//or

let options = {
  title: "ZRapi",
  description: "Source code",
  nameFile: "hasil.txt",
};

zrapi
  .pastegg("you code, console.log('hi')", options) //options is optional
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//or

zrapi
  .pastegg("you code, console.log('hi')") //options is optional
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Example Downloader

```js
const zrapi = require("zrapi");

// KeepTiktok
zrapi
  .keeptiktok("https://vt.tiktok.com/khpq9t")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Snaptik
zrapi
  .snaptik("https://vt.tiktok.com/khpq9t")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## &#x1F919; Connect With Me

[![Facebook](https://img.shields.io/badge/Facebook-%234267B2.svg?&style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/zefian.zefian.98)
[![Telegram](https://img.shields.io/badge/Telegram-%230088cc.svg?&style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Zefiann)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/zefianalfian)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/6289630171792)
