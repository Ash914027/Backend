//Design a Node js server   using Http and Fs modules to efficiently read the contents of file('example.txt') and stream it to another file(example2.txt) 
// acess the server root url('/');
//using pipe method
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const readStream = fs.createReadStream('example.txt',{highWaterMark:8});
    const writeStream = fs.createWriteStream('example2.txt',{highWaterMark:8});

    readStream.pipe(writeStream);

    readStream.on('close', () => {
      res.end('File streaming completed!');
    });

    readStream.on('error', (err) => {
      console.error(err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
///without pipe///////
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     const readStream = fs.createReadStream('example.txt');
//     const writeStream = fs.createWriteStream('example2.txt');

//     readStream.on('data', (chunk) => {
//       writeStream.write(chunk);
//     });

//     readStream.on('end', () => {
//       writeStream.end();
//       res.end('File streaming completed!');
//     });

//     readStream.on('error', (err) => {
//       console.error(err);
//       res.statusCode = 500;
//       res.end('Internal Server Error');
//     });
//   } else {
//     res.statusCode = 404;
//     res.end('Page not found');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
