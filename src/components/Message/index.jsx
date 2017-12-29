import React from 'react'

function Message(props) {
    let messageUserPhoto = {
        borderRadius: '3px',
        height: '50px',
        width: '50px'
    }

    let photoStyle = {
        border: '1px solid #DCDCDC',
        borderRadius: '3px',
        display: 'block',
        height: '25%',
        margin: '0 auto',
        padding: '.5em',
        width: '25%'
    }

    let marginFromPhoto = {
        marginLeft: '.5em'
    }
    if(props.message.message.type == 'image') {
        return(
            <div className="Message row">
                <div className="grid-x">
                    <img src={props.message.userURL} className="large-2 columns" style={messageUserPhoto}/>
                    <b style={marginFromPhoto}>{props.message.userName}</b>
                </div>
                <div className="large-10 columns">
                    <img src={props.message.message.value} style={photoStyle}/>
                </div>
            </div>
        )
    } else {
        return(
            <div className="Message grid-x">
                <img src={props.message.userURL} className="columns" style={messageUserPhoto}/>
                <div className="large-10 columns" style={marginFromPhoto}>
                    <b>{props.message.userName}</b>
                    <p>{props.message.message.value}</p>
                </div>
            </div>
        )
    }
}

export default Message