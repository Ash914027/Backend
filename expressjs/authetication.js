

const express=require('express');
const fs=require('fs');
const app=express();
const port=3000;
app.use(express.urlencoded({body:true}));
app.get('/login',(req,res)=>{
    const readStream=fs.createReadStream('form.html');
    readStream.pipe(res);
});
app.post('/submit',(req,res)=>{
    const formData=req.body;
    console.log(formData);
    res.send('Form data received');
});
