 const fs=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        const message="Hello World,this is appended using callback function";
        fs.appendFile("./example.txt",message+"\n","utf-8",(err)=>{
        if(err){
               console.log(err);
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end('Internal Server Error');
            
            }
            {
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end('File content appendes:'+message);
            }
          } );
        }
      
    });
    

    const port=3000;
    server.listen(port,()=>{
        console.log(`Server is listening on port ${port}`);
    });