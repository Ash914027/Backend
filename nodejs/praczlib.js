//how can create Nodejs server that serves a specific text file, compresses it with gzip encoding dynamically responds to Http requests?
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
  const filePath = './example.txt';
  const readStream=fs.createReadStream(filePath);
  

      res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Encoding': 'gzip'
      });
      //compressing the file and sending it to the client
      readStream.pipe(zlib.createGzip()).pipe(res);
      readStream.on('error', (err) => {
        console.error(err);
        res.statusCode=500;
        res.end('Internal server error');
      });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
