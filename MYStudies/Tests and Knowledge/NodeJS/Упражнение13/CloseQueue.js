const fs =require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("this is from redableStream close event callback");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
// това е Cheker с I/O Poling то проверява Checker и подминава I/O защото то има нужда от време да зареди 
setImmediate(() => console.log("this is setImmediate 1"));