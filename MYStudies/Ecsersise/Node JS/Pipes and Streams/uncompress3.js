const fs = require("node:fs");
const zlib = require("node:zlib");

const unzipStream = zlib.createGunzip();
const input = fs.createReadStream("data3.txt.gz");
const output = fs.createWriteStream("uncompressed-data3.txt");

input.pipe(unzipStream).pipe(output).on("finish", () => {
    console.log("✅ Файлът е успешно разархивиран!");
});