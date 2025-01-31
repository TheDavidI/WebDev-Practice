const fs = require("node:fs");
const { Transform } = require("node:stream");

const redableStream = fs.createReadStream("input2.txt", {
    encoding: "utf-8"
});
const writeableStream = fs.createWriteStream("output2.txt");

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const upperCaseData = chunk.toString().toUpperCase();
      callback(null, upperCaseData);
    },
  });

redableStream
    .pipe(upperCaseTransform)
    .pipe(writeableStream)
    .on("finish", () => {
        console.log("✅ Преобразуването е успешно завършено!");
});