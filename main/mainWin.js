const {BrowserWindow}=require('electron')

let win;
function create(){
    win=new BrowserWindow({
        width:400,
        height:300,
        show:false,
        webPreferences:{
            nodeIntegration:true 
        }
    })
    win.on('close',(e)=>{
        win=null;
    })
    win.on('ready-to-show',()=>{
        win.show()
    })
    win.loadURL('http://localhost:8080')
}

function close(){
    win.close()
}
function send(channel,args){
    win.webContents.send(channel,args)
}

module.exports={
    create,
    close,
    send
}