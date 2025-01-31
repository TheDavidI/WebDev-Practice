const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("data3.txt");

const writableStream = fs.createWriteStream("data3.txt.gz");

const gZip = zlib.createGzip();

readableStream
    .pipe(gZip)
    .pipe(writableStream)
    .on("finish", () => {
        console.log("✅ Файлът е успешно компресиран!");
    });