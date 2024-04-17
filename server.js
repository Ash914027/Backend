//code to create a server
const  http=require('http');
const server=http.createServer((req,res)=>{
    res.end('Hello World');
});
const port=3000;
server.listen(port,()=>{
    console.log(`Server is listening on http://localhost:port ${port}`);
});
/////////////////////////////////////////////////////////////////

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
/write file Aschrochrous
const fs=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        const message="Hello World";
       fs.writeFile("./example.txt",message,"utf8",function(err){
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/plain'});
            console.log(err);
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200,{'Content-Type':'text/plain'});
        console.log("File Content:"+message);
    });
    }

    });
    const port=3000;
    server.listen(port,()=>{
        console.log(`Server is listening on port ${port}`);
    });
    /////////////////

 const fs=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        const message="Hello World";
        try{

                fs.writeFileSync("./example.txt",message,"utf-8");
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end('File content:'+message);
                return;
            }
            catch(err)
            {
            res.writeHead(500,{'Content-Type':'text/plain'});
            
            console.log(err);
            res.end('Internal Server Error');
            }
        }
      
    });
    

    const port=3000;
    server.listen(port,()=>{
        console.log(`Server is listening on port ${port}`);
    });
