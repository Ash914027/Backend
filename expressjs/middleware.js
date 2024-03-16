///middleware
///it acts as a bridge between request and response that is client and  server
//use-authentication , debugging,logging, error handling,compression,etc
const express=require('express');
const app=express();
//middleware function
app.use((req,res,next)=>{
    console.log('this a middleware function');
    next();
});
//route handler
app.get('/',(req,res)=>{
    res.send('hello worlsd!');
});
app.listen(4000,()=>{
    console.log('server is running on port 3000');
});
//multiple  middleware
