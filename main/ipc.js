const {ipcMain}=require('electron')
const {send:sendMainWin,close:closeMainWin}=require('./mainWin')
const {create:createControlWin}=require('./controlWin')

const myEvents=require('./signal')

module.exports=function(){
    ipcMain.on('login',()=>{
        //向login页面发送消息 本地随机生成的控制密码 主进程向子进程发消息 使用 webContents.send
        let localcode=Math.random().toString().slice(-6);
        //告诉数据服务器向房间里添加用户
        //sendMainWin('local-code',localcode)
        myEvents.send('local-code',localcode)
    })

    ipcMain.on('control-page',(e,remotecode)=>{
        /* createControlWin()
        closeMainWin() */
        //向客户端发送链接请求，链接成功后打开新的页面
        myEvents.send('control-client',remotecode)
    })
}