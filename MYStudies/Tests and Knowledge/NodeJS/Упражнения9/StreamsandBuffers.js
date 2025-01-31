const buffer = new Buffer.from("David");

buffer.write("Codevolution");
//buffer.write("Code");

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());
