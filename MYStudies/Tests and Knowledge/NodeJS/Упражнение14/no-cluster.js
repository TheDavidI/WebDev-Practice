const http = require("node:http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain"});
        res.end("Home page");
    } else if (req.url === "/slow-page") {
        for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
        res.writeHead(200, { "Content-Type": "text/plain"});
        res.end("Slow Page");
    }
});

server.listen(8001, () => console.log("Server is running at http://localhost:8001/"))