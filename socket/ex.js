//probelms by http
// 1. http module is not secure
// 2. http module is not easy to use
// 3. Unidirectional-real time updates from server to client
// 4.Polling-requesting server for new data at regular intervals
// 5.Latency- time delay between the cause and effect of some physical change in the system being observed
// 6.Scalibility-ability of a system to handle a growing amount of work
//Socket.io is a library that enables real-time, bidirectional and event-based communication between web clients and servers
// const express=require('express');
// const SocketIO=require('socket.io');
// const path=require('path');
// const app=express();

// app.use(express.static(path.join(__dirname,'public')));

// const server=app.listen(3000,()=>{console.log('Server is running at port 3000')});
// const io=SocketIO(server);

// app.on('connection',(socket)=>{
//     console.log('A user connection to the server');
//     socket.on('chat message',(msg)=>{
//         //console.log('Message:',msg);
//         socket.emit('message',msg);
//     });
//     socket.on('disconnect',()=>{
//         console.log('A user disconnected');
//     });
// });
const express=require('express');
const socketIO=require('socket.io');
const path=require('path');
const app=express();
const server=app.listen(4000,()=>{
    console.log("server started on port 3000");
});
const io=socketIO(server);
io.on('connection',(socket)=>{
    console.log("A user connected to the server");
    socket.on('chat message',(msg)=>{
        io.emit('chat recieved',msg);
        console.log("a user connected");
    });
});

// app.listen(3000,()=>{
//     console.log('Server is running at port 3000');
// });

