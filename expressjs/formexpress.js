//Build a simple express.js server to show the file  perform write operations with inputs from the form
const express=require('express');
const fs=require('fs');
const app=express();
app.get('/form',(req,res)=>{
    fs.readFile('./form.html','utf-8',(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        return res.status(500).send('error reading from file');
        
            res.send(data);
        
    });
});
app.get('/submit',(req,res)=>{
    const name=req.query.name;
    const email=req.query.email;
    fs.writeFile('./example2.txt',`Name: ${name},Email: ${name}\n'`,err=>{
        if(err){
            console.error('error saving data');
        }
        res.send('data saved sucessfully');
    });
});
app.listen(2000,()=>{
    console.log('server is on port 3000');
})