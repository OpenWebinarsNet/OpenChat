const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const { uploadImage, sendMessage, notifyMessage } = require('./utilities')
const { db } = require('./firebase')

let win
let sendNotification = false

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

ipcMain.on('newMessage', (ev, message) => sendMessage(message))

ipcMain.on('requestMessages', (ev) => {
    const docRef = db.ref('messages')

    docRef.on('value', snapshot => {
        let messages = []
        snapshot.forEach(message => {
            messages.push(message.val())
        })
        let lastmsg = messages[messages.length - 1]
        notifyMessage(sendNotification, lastmsg)
        sendNotification = true
        ev.sender.send('receiveMessages', messages)
    })
})

ipcMain.on('upload-dialog', (ev) => {
    dialog.showOpenDialog(win, {
        title: 'Elige la imagen que deseas subir',
        properties: [
            'openFile'
        ],
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
        ]
    }, (dir) => {
        uploadImage(ev, dir[0])
    })
})