const EventEmitter=require('events');
const myEmitter=new EventEmitter();
const eventHandler=  (arg1,arg2)=>{
    console.log('event occured with arguments:',arg1,arg2);
};
myEmitter.on('Firstevent',eventHandler);
for(let i=0;i<3;i++){
    myEmitter.emit('Firstevent','Hello','World');
    if(i==2){
        myEmitter.removeListener('Firstevent',eventHandler);
    }
}
// // The removeListener() method removes the specified listener from the listener array for the specified event.
// if(i==2){
//     myEmitter.removeListenerall('Firstevent',eventHandler);
// }