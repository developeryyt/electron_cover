const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const AllModule = require('./utils')
const { System, TraySystem, Test } = AllModule

app.whenReady().then(async () => {

    /*TODO:: CORS 보안 비활성화를 위한 플래그*/
    // app.commandLine.appendSwitch('disable-web-security')
    // app.commandLine.appendSwitch('allow-running-insecure-content')

    System.Shared
        .createWin()
        .showView('http://front.patrick1009.net', 'url');

    await TraySystem.init()

    app.on('window-all-closed', () => {
        if(process.platform !== 'darwin') app.quit()
    })

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {

        }
    })


})

