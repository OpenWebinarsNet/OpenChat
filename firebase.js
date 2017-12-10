const admin = require('firebase-admin')

let serviceAccount = require('./firebase_key.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://openchat17.firebaseio.com'
})

let db = admin.database()

module.exports = {
    db
}