///first install express by npm install express
//express is a web application framework for node.js
//it is used to build web applications and APIs 
//it can uses node js features also
const express=require('express');
const express = require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("hello world");
});
app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`);
});
//get method

