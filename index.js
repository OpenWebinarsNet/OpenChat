const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const admin = require('firebase-admin')
const { uploadImage } = require('./utilities')

let win
let serviceAccount = require('./firebase_key.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://openchat17.firebaseio.com'
})

let db = admin.database()

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

ipcMain.on('newMessage', (ev, objectMessage) => {
    const docRef = db.ref('messages')

    docRef.push(objectMessage)
})

ipcMain.on('requestMessages', (ev) => {
    const docRef = db.ref('messages')

    docRef.on('value', snapshot => {
        let messages = []
        snapshot.forEach(message => {
            messages.push(message.val())
        })
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
        uploadImage(dir[0])
    })
})