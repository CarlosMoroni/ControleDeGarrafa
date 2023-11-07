const {app, BrowserWindow} = require('electron')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 380,
        resizable: false,
        x: 0,
        y: 0,
        alwaysOnTop: true,
        show: false,
    });
    
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    })
    
    mainWindow.setMenu(null);
})