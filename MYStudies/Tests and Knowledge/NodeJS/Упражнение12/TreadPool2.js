
const crypto = require("node:crypto");
process.env.UV_THREADPOOL_SIZE = 4;
const MAX_CALLS = 8;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - start);
    });
}

//pbkdf2 = password based key derivation function 2
//const start = Date.now();
//crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
//console.log("Hash; ", Date.now() - start);