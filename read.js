// const http = require("http");
// const fs = require("fs");
// const server=http.createServer((req,res)=>{
//     if(req.url=='/')
//     {
//        fs.readFile("./data.json","utf-8",function(err){
//         if(err)
//         {
//             console.log(err);
//             res.writeHead(404,{'Content-Type':'text/plain'});
//             res.end('Internal Server Error');
//             return;
//         }
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(data);
//         else{
//             res.writeHead(200,{'Content-Type':'application/plain'});
//             res.end('not found');
//         }
//     });
  
    // const port=3000;
    // server.listen(port,()=>{
    //     console.log(`Server is listening on port ${port}`);
    // });
////read file
const  http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        fs.readFile("./index.html","utf8",(err,data)=>{
            if(err)
            {
                console.log(err);
                return;
            }
        
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('file Content:'+data);
        })
    }
    
 });
const port=3000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});
