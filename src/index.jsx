import React from 'react'
import ReactDOM from 'react-dom'

import SendBox from './components/SendBox/index.jsx'
import MessagesBox from './components/MessagesBox/index.jsx'

class App extends React.Component {
    render() {
        return(
            <div className="react">
                <MessagesBox />
                <SendBox />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementsByClassName('App')[0])