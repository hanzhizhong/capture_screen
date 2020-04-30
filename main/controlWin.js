const {BrowserWindow}=require('electron')

let win;
function create(){
    win=new BrowserWindow({
        width:1000,
        height:800,
        show:false,
        webPreferences:{
            nodeIntegration:true 
        }
    })
    win.on('close',()=>{
        win=null;
    })
    win.on('ready-to-show',()=>{
        win.show()
    })
    win.loadURL('http://localhost:8080/control')
}
function close(){
    win.close()
}
module.exports={
    create
}