import React from 'react'

function Message(props) {
    if(props.message.message.type == 'image') {
        return(
            <div className="Message row">
                <img src={props.message.userURL} className="large-2 columns"/>
                <div className="large-10 columns">
                    <b>{props.message.userName}</b>
                    <img src={props.message.message.value} />
                </div>
            </div>
        )
    } else {
        return(
            <div className="Message row">
                <img src={props.message.userURL} className="large-2 columns"/>
                <div className="large-10 columns">
                    <b>{props.message.userName}</b>
                    <p>{props.message.message.value}</p>
                </div>
            </div>
        )
    }
}

export default Message