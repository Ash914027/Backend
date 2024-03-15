const fs=require('fs');
const readStream=fs.createReadStream('./example.txt',{encoding:'utf8',highWaterMark:64});
//listen to data event
readStream.on('data',(chunk)=>{
    console.log('-------------------new chunk-------------------');
    console.log(chunk);
});
//listen to 'end' event,which is called when the stream is finished reading
readStream.on('end',()=>{
    console.log('finished reading file');
});
//listen to 'error' event,which is called when an error occurs
readStream.on('error',(err)=>{
    console.log('Erorr reading file:',err);
});