const server=require('http').createServer()
const io=require('socket.io')(server,{
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
})

let clients=new Set();

io.on('connection',socket=>{
    socket.on('local-code',data=>{
        const obj={}
        let ret=[...clients].find(item=>{
            return item[data]
        })
        if(!ret){
            obj[data]=socket;
            clients.add(obj)
        }
        socket.emit('local-code',data)
    })
})

server.listen(9000,()=>{
    console.log('server running at port 9000')
})