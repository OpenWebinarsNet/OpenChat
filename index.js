const { app, BrowserWindow } = require('electron')

let win

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            devTools: true
        }
    })

    win.loadURL(`file://${__dirname}/build/index.html`)
})