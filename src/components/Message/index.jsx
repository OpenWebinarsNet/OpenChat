import React from 'react'

function Message(props) {
    return(
        <div className="Message row">
            <img src={props.message.userURL} className="large-2 columns"/>
            <div className="large-10 columns">
                <b>{props.message.userName}</b>
                <p>{props.message.message}</p>
            </div>
        </div>
    )
}

export default Message