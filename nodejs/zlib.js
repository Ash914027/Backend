//compressing and decompressing files using zlib
const zlib = require("zlib");
const input= "Hello world";
zlib.gzip(input,(err,compressedData)=>{
    if(err)
    {
        console.error('Errror compressing data:',err);
        return;
    }

    zlib.gunzip(compressedData,(err,decompressedData)=>{
        if(err)
        {
            console.error(err);
            return;
        }
        console.log('decompressed data:',decompressedData.toString());
    
    });
});