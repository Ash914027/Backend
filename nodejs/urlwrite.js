const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let x = parsedUrl.pathname;

    if (x === "/") {
        fs.readFile("./form.html", "utf-8", (err, data) => {
            if (err) {
                console.error(err);
                res.end('There is an error');
                return;
            }
            res.end(data);
        });
    } else if (x === "/submit" && req.method === "POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            let jsonData = JSON.parse(body);
            fs.writeFile("data.json", JSON.stringify(jsonData), 'utf-8', (err) => {
                if (err) {
                    console.error(err);
                    res.end("An error occurred while writing to the file");
                } else {
                    res.end("Data has been written to the file");
                }
            });
        });
    } else if (x === "/submit" && req.method === "GET") {
        fs.readFile("./data.json", "utf-8", (err, data) => {
            if (err) {
                console.error(err);
                res.end('There is an error');
                return;
            }
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
