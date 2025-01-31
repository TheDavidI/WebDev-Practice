const fs = require("fs")

console.log("Синхронно: Първи лог");
// то е второто от тези 4 защото е timer queue те се изпълняват първи след проверката на microtask.
setTimeout(() => {
    console.log("Timer Queue: setTimeout");
}, 0);
// то е третия от 4-те защото след като readfile бива преместен в следващия loop check queue са следващите по ред в Loop-а
setImmediate(() => {
    console.log("Check Queue: setImmediate");
});
// то е първо от тези 4 защото е microtask queue а те винаги се изпълняват първи.
process.nextTick(() => {
    console.log("Next Tick Queue: process.nextTick");
});
// то е последно защото I/O Poling то бива преместен и приготвян да следващия loop защото не е готов в първия loop.
fs.readFile(__filename, () => {
    console.log("I/O Queue: fs.readFile callback");
});

