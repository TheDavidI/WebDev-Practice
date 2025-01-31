const fs = require("node:fs");

const redableStream = fs.createReadStream("./File3.txt", {
    encoding: "utf-8",
    // това ще го направи на 2 бита, всеки бит е 1 буква на ред
   
});

const writeableStream = fs.createWriteStream("./File4.txt");

redableStream.on("data", (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
});