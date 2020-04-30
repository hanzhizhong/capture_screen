const {app,BrowserWindow}=require('electron')
const path=require('path')

const {create:createWin}=require('./main/mainWin')
//const {close:closeControlWin}=require('./main/controlWin')
const handleIPC=require('./main/ipc')

app.on('ready',()=>{
    createWin();
    handleIPC()
})
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        console.log('window quit now')
        app.quit()
    }
})