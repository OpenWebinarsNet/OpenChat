import React from 'react'
import ReactDOM from 'react-dom'

import SendBox from './components/SendBox/index.jsx'

class App extends React.Component {
    render() {
        return(
            <div className="react">
                <h1>Hello from React</h1>
                <SendBox />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementsByClassName('App')[0])