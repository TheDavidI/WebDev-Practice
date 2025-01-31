const http = require("node:http");
const fs = require("node:fs")

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});

 fs.createReadStream(__dirname + "./HTML.html").pipe(res);

  //използва много рам
  //const html = fs.readFileSync("./HTML.html", "utf-8");
  //res.end(html);
});

const PORT = 1212;
server.listen(PORT, () => {
  console.log("Server running at http://localhost:${PORT}/");
});