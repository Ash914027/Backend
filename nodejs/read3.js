// Purpose: read data from json file and display it in html form
const http=require('http');
const fs=require('fs');
const path=require('path');
const querystring=require('querystring');
const url=require('url');

const server=http.createServer((req,res)=>{
  // Assuming req is your request object
    const parsedUrl = url.parse(req.url, true);
    

// You can now access different parts of the URL
let x=parsedUrl.pathname;
    if(x=="/")
    {
        fs.readFile("./form.html","utf-8",(err,data)=>{
            if(err)
            {
                console.error(err);
                res.end('their is an error');
                return;
            }
        
            res.end(data);
        })
    }else if(x=="/submit" && req.method=="GET")
    {
        let writableStream=fs.createWriteStream("./index.html");
        let  query=parsedUrl.query;
        writableStream.write(JSON.stringify(query));
        writableStream.on()=>{
            res.end("Data has been written to the file");
        };
    }
    else if(x=="/submit" && req.method=="GET")
    {
        fs.readFile("./data.json","utf-8",(err,data)=>{
            if(err)
            {
                console.error(err);
                res.end('their is an error');
                return;
            }
        
            res.end(data);
        });
    }
});
const port=3000;
server.listen(port,()=>{
    console.log(`Server is listening on http://localhost:port ${port}`);
});






// //get data from html form and save it to json file
//  const http=require('http');
//   const fs=require('fs');
//     const queryString=require('querystring');
//     http.createServer((req,res)=>{
//         if(req.url=="/")
//         {
//             fs.readFile("./index.html",(err,data)=>{
//                 if(err)
//                 {
//                     console.error(err);
//                     res.statusCode=500;
//                     res.end("An error occurred while reading the file");
//                 }
//                 else
//                 {
//                     res.writeHead(200,{'Content-Type':'text/html'});
//                     res.end(data);
//                 }
//             });
//         }
//         else if(req.url=="/save.json" && req.method==="POST")
//         {
//             let body="";
//             req.on('data',(chunk)=>{
//                 body+=chunk;
//             });
//             req.on('end',()=>{
//                 const jsondata=queryString.parse(body).jsonData;
//                 const jsonStrings=JSON.stringify(jsondata);
//                 fs.writeFile("save.json",jsonStrings,'utf-8',(err)=>{
//                     if(err)
//                     {
//                         console.error(err);
//                         res.statusCode=500;
//                         res.end("An error occurred while writing to the file");
//                     }
//                     else
//                     {
//                         res.end("Operation was successful");
//                     }
//                 });
//             });
//         }
//         else
//         {
//             res.statusCode=405;
//             res.end("Method Not Allowed");
//         }
//     }).listen(3000);


