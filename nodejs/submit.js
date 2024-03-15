//to perfrom form action read from html and write it in text file
const http=require('http');
const fs=require('fs');
const path=require('path');
const  server=http.createServer((req,res)=>{
    if(req.method==='/GET'&& reqUrl.pathname==='/')
    {
        fs.readFile('./form.html','utf-8',(err,data)=>{
            if(err)
            {
                console.error(err);
                res.end('Internal server error');
                return;
            }
            else if (req.method === 'POST' && reqUrl.pathname === '/submit') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
               req.on('end', () => {
                    const formData=queryString.parse(body);
                    res.end('Form data received',formData);
                    const {name, email, message} = formData;
                });
            
           
        
        });
    