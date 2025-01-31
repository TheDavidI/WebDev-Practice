const http = require("http");

// Създаваме HTTP сървър
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

// Логваме, когато сървърът бъде затворен
server.on("close", () => {
    console.log("Close Queue: Server has been closed");
});

// Стартираме сървъра
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000/");
});

// Затваряме сървъра след 5 секунди
setTimeout(() => {
    console.log("Closing server...");
    server.close(); // Това събитие ще активира Close Queue
}, 5000);

// Демонстрираме други фази на Event Loop
setImmediate(() => {
    console.log("Check Queue: setImmediate executed");
});

setTimeout(() => {
    console.log("Timer Queue: setTimeout executed");
}, 0);

process.nextTick(() => {
    console.log("Microtask Queue: process.nextTick executed");
});