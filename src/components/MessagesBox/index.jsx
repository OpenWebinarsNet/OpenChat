import React from 'react'

class MessagesBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: null
        }
    }
    render() {
        if(this.state.messages != null) {
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