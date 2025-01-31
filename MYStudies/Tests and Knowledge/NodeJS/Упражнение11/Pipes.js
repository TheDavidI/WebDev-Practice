const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const redableStream = fs.createReadStream("./File3.txt", {
    encoding: "utf-8",
    // това ще го направи на 2 бита, всеки бит е 1 буква на ред
    highWaterMark: 2,
});

redableStream.pipe(gzip).pipe(fs.WriteStream("./File3.txt.gz"));

const writeableStream = fs.createWriteStream("./File4.txt");

//Pipe работи като траба която свързва redableStream и writeableStream
redableStream.pipe(writeableStream);



// redableStream.on("data", (chunk) => {
  //  console.log(chunk);
  //  writeableStream.write(chunk);
// });