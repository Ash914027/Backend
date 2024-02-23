//reading and writing to other file using pipe
const fs = require("fs");
const readStream = fs.createReadStream("example.txt");
const writeStream = fs.createWriteStream("example2.txt");
readStream.pipe(writeStream);



