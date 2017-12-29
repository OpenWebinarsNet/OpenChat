import React from 'react'
import ReactDOM from 'react-dom'

import SendBox from './components/SendBox/index.jsx'
import MessagesBox from './components/MessagesBox/index.jsx'
import AuthView from './components/AuthView/index.jsx'

let appPadding = {
    padding: '1em'
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }

        this.setUser = this.setUser.bind(this)
    }
    setUser(user) {
        this.setState({ user })
    }
    render() {
        if(this.state.user == null) {
            return(
                <div className="react">
                    <AuthView setUser={this.setUser}/>
                </div>
            )
        } else {
            return(
                <div className="react" style={appPadding}>
                    <MessagesBox />
                    <SendBox />
                </div>
            )
        }
    }
}

ReactDOM.render(<App />, document.getElementsByClassName('App')[0])