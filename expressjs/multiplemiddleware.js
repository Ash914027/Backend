///multiple middleware
const express=require('express');
const app=express();
///handling  function 
app.use((req,res,next)=>{
    console.log(`${new Date().toString()}:${req.method} ${req.url}`);
    next();
});
//route handler
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.listen(3000,()=>{
    console.log(`server is running http://localhost:3000`);
})
