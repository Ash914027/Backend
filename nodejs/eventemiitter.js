const EventEmitter=require('events');
const myEmitter=new EventEmitter();
myEmitter.on('Firstevent',(arg1,arg2)=>{
    console.log('event occured with arguments:',arg1,arg2);
});
///once event to occur
myEmitter.once('Firstevent',(arg1,arg2)=>{
    console.log('event occured once');
});
for(let i=0;i<2;i++){
    myEmitter.emit('Firstevent','Hello','World');
}
