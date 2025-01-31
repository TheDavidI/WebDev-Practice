const fs = require("node:fs");

console.log("First");
const fileContents = fs.readFileSync("./File.txt", "utf-8");
console.log(fileContents);

console.log("Second");

//препоръчано е този метод с readfile вместо readfileSync
fs.readFile("./File.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log("Third");

fs.writeFileSync("./greet.txt", "Hello World");

fs.writeFile("./greet.txt", " Hello David!", { flag: "a"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written");
    }
});