const fs = require("fs");

console.log("Синхронен код: Старт");

// Четене на файл (I/O Operation)
fs.readFile(__filename, "utf-8", () => {
    console.log("I/O Queue: Четене на файл завърши");
});

// Таймери
setTimeout(() => {
    console.log("Timer Queue: setTimeout изпълнено");
}, 0);

setImmediate(() => {
    console.log("Check Queue: setImmediate изпълнено");
});

// Microtask
process.nextTick(() => {
    console.log("Microtask Queue: process.nextTick изпълнено");
});

console.log("Синхронен код: Край");
