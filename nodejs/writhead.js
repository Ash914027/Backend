const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/writefile' && req.method === 'GET') {
        const content = 'Hello, this is the content to be written to the file.';
        
        fs.writeFile('example.txt', content, (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error writing to file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File written successfully');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Path: writhead.js