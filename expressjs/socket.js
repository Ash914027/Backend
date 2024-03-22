const app=express();
const server=app.listen(3000);
const io=socketIO(server);
app.use(express.static(path.join(__dirname,'public')));
app.on('connection',(socket)=>{
        console.log('A user connection to the server');
        socket.on('chat message',(msg)=>{
            //console.log('Message:',msg);
            socket.emit('message',msg);
        });
        socket.on('join',msg=>{
            io.emit('join',msg);
        })
        socket.on('disconnect',()=>{
            console.log('A user disconnected');
        });
    });
