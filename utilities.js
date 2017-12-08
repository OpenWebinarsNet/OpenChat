const Storage = require('@google-cloud/storage')
const fs = require('fs')

const uploadImage = function(imageDir) {
    const storage = new Storage({
        projectId: 'openchat17',
        keyFilename: './firebase_key.json'
    })
    const bucket = storage.bucket('openchat17.appspot.com')

    bucket.upload(imageDir, (err, file) => {
        if(err) throw err
    })
}

module.exports = {
    uploadImage
}