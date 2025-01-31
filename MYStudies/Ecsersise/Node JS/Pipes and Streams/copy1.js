const fs = require("fs");

const redableStream = fs.createReadStream("source1.txt" , {
    encoding: "utf-8"
});

const writeableStream = fs.createWriteStream("destination1.txt");
redableStream.pipe(writeableStream);

writeableStream.on("finish", () => {
    console.log("✅ Съдържанието на файла беше успешно копирано!");
});

redableStream.on("error" , (err) => {
    console.error("⚠️ Грешка при четенето на файла:", err.message);
});
writeableStream.on("error" , (err) => {
    console.error("⚠️ Грешка при писането във файла:", err.message);
});