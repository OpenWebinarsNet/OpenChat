import React from 'react'
import { ipcRenderer } from 'electron'

class SendBox extends React.Component {
    constructor(props) {
        super(props)

        this.sendMessage = this.sendMessage.bind(this)
        this.postImage = this.postImage.bind(this)
    }
    sendMessage() {
        const messageObject = {
            message: document.getElementById('send-message').value,
            userURL: 'https://avatars.slack-edge.com/2017-11-27/279122939639_c199c00a34366734b118_72.jpg',
            userName: 'Miguh Ruiz'
        }

        ipcRenderer.send('newMessage', messageObject)
    }
    postImage() {
        ipcRenderer.send('upload-dialog')
    }
    render() {
        return(
            <div className="grid-x grid-margin-x">
                <a className="button warning large-1 cell" onClick={this.postImage}>Foto</a>
                <input type="text" id="send-message" className="large-10 cell" placeholder="Escribe tu mensaje aqui" />
                <a className="button success large-1 cell" onClick={this.sendMessage}>Enviar</a>
            </div>
        )
    }
}

export default SendBox