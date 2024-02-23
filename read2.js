const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
http
  .createServer((req, res) => {
    if ((req =="/")) {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          console.error(err);
          res.end("Hey you are having error");
        } else {
          res.end(data);
        }
      })
    } else if (req.url== "./save.json") {
      let body = "";
      req.on('data', (chunk) => {
        body = body + chunk;
      });
      req.on('end', () => {
        const jsondata = queryString.parse(body).jsonData;
        const jsonStrings = JSON.stringify(jsondata);
        fs = writeFile("save.json", jsonStrings, 'utf-8',(err) => {
          if (err) {
            console.error(err);
            res.end("check controls");
          } else {
            res.end("Operation was sucessfull");
          }
        });
      });
    }
  })
  .listen(3000);
