const fs=require('fs');
//create a writable stream
const writeStream=fs.createWriteStream('./example2.txt');
//write to the stream
const data=['first chunk','second chunk','third chunk'];

//write data in chunks
data.forEach(chunk => {
    writeStream.write(chunk);
    
});
//end the writable stream
writeStream.end();
//listen to finish event
writeStream.on('finish',()=>{
    console.log('finished writing to file');
});
//listen to 'error' event incase of any error
writeStream.on('error',(err)=>{
    console.error('Error writing to file:',err);
});