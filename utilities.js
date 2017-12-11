const { ipcMain } = require('electron')

const Storage = require('@google-cloud/storage')
const fs = require('fs')
const { db } = require('./firebase')

const sendMessage = function(message) {
    const docRef = db.ref('messages')
    
    docRef.push(message)
}

const uploadImage = function(ev, imageDir) {
    const storage = new Storage({
        projectId: 'openchat17',
        keyFilename: './firebase_key.json'
    })
    const bucket = storage.bucket('openchat17.appspot.com')

    bucket.upload(imageDir, (err, file) => {
        if(err) throw err

        file.getSignedUrl({
            action: 'read',
            expires: '12-31-2999'
        },)
            .then(urls => {
                const messageObject = {
                    message: 
                    {
                        type: 'image',
                        value: urls[0]
                    },
                    userURL: 'https://avatars.slack-edge.com/2017-11-27/279122939639_c199c00a34366734b118_72.jpg',
                    userName: 'Miguh Ruiz'
                }
                sendMessage(db, messageObject)

            })
    })
}

module.exports = {
    uploadImage,
    sendMessage
}