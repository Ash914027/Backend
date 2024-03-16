//q2 write a middleware function in express.js that logs the timestamp,http methodand url of every incoming request to a file is created if it is doesn't exist and that new log entries appended to it
const express=require('express');
const app=express();
const fs=require('fs');

///handling  function 
app.use((req,res,next)=>{
    fs.appendFile('example22222222.txt',`${new Date().toString()}:${req.method} ${req.url}\n`,(err)=>{
console.log('eror');
    } );
    next();
});
//route handler /-home route
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.listen(7000,()=>{
console.log('server is running http://localhost:7000');
});