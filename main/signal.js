const EventEmitter=require('events')
const io=require('socket.io-client')

const myEvents=new EventEmitter()
const socket=io.connect('http://localhost:9000')

socket.on('connect',()=>{
    console.log('connect successful')
})

function send(event,data){
    //向客户端发送数据
    socket.emit(event,data)
}


myEvents.send=send;
module.exports=myEvents