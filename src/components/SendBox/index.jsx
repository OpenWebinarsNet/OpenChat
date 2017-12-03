import React from 'react'

class SendBox extends React.Component {
    constructor(props) {
        super(props)

        this.sendMessage = this.sendMessage.bind(this)
    }
    sendMessage() {
        const messageObject = {
            message: document.getElementById('send-message').value
        }
    }
    render() {
        return(
            <div className="grid-x grid-margin-x">
                <input type="text" id="send-message" class="large-11 cell" placeholder="Escribe tu mensaje aqui" />
                <a className="button success large-1 cell" onClick={this.sendMessage}>Enviar</a>
            </div>
        )
    }
}

export default SendBox