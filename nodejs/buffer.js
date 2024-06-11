//creating a buffer
const buffer=Buffer.alloc(4)
// console.log(buffer);

// //writing data to buffer
buffer.write('Hello','utf-8');
console.log(buffer);

// // //reading from buffer
const data =buffer.toString('utf-8');
console.log(data);

////concatenating buffer
const buffer1=Buffer.from('Hello', 'utf-8');
const buffer2=Buffer.from('World', 'utf-8');
const buffer3=Buffer.concat([buffer1,buffer2]);
console.log(buffer3.toString('utf-8'));
