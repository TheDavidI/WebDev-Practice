const fs = require("node:fs/promises");

async function readFile() {
    try {
        const data = await fs.readFile("File2.txt", "utf-8");
        console.log(data);
    }   catch(err) {
        console.log(err);
    }
};

readFile();



//console.log("first");

//fs.readFile("File2.txt", "utf-8")
//.then(data => console.log(data))
//.catch(error => console.log(error));

//console.log("second");