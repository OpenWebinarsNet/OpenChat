import React from 'react'
import { ipcRenderer } from 'electron'

import Message from '../Message/index.jsx'

class MessagesBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    componentDidMount() {
        ipcRenderer.send('requestMessages')

        ipcRenderer.on('receiveMessages', (ev, messages) => {
            this.setState({ messages })
        })
    }
    render() {
        if(this.state.messages.length > 0) {
            return(
                <div>
                    {
                        this.state.messages.map((message) => (
                            <Message message={message} />
                        ))
                    }
                </div>
            )
        } else {
            return(
                <h4 className="text-center subheader">Que bien sabe un café mientras los mensajes cargan...</h4>
            )
        }
    }
}

export default MessagesBox