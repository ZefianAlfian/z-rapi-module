/*
	Photooxy By NaufalCream
*/
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const FormData = require("form-data");

async function photooxy(url, text) {
  if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url))
    throw new Error("Invalid URL");
  let nomor = 0;
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) {
    nomor += 1;
    form.append(`text_${nomor}`, texts);
  }
  form.append("login", "OK");
  let cari = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "/",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  let html = await cari.text();
  let $ = cheerio.load(html);
  const hasil = $('a[class="btn btn-primary"]').attr("href");
  return hasil;
}

module.exports = photooxy;
