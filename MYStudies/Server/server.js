const http = require("node:http");
const fs = require("node:fs")

const server = http.createServer((req, res) => {

   if (req.url === "/") {
      res.writeHead(200, {"content-type": "text/plain"});
      res.end("Home page");
   } else if (req.url === "/about") {
      res.writeHead(200, { "content-type": "text/html"});
      res.end("About page");
   } else if (req.url === "/api") {
      res.writeHead(200, { "content-type": "application/json"});
      res.end(JSON.stringify({
         FirstName:"John",
         LastName: "117"
      }));
   } else {
      res.writeHead(404)
      res.end("Page not found");
   }
});


server.listen(1212, () => {
   console.log("Server running at http://localhost:1212/");
});