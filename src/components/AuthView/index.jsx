import React from 'react'
import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyBkcMbFekdtvPm7JUELHDYHTfP1mQenRLE',
    authDomain: 'openchat17.firebaseapp.com',
    databaseURL: 'https://openchat17.firebaseio.com',
    projectId: 'openchat17',
    storageBucket: 'openchat17.appspot.com',
    messagingSenderId: '491849616261'
  }

class AuthView extends React.Component {
    constructor(props) {
        super(props)

        this.logUser = this.logUser.bind(this)
    }
    logUser() {
        const email = document.getElementsByClassName('the_email')[0].value
        const pass = document.getElementsByClassName('the_pass')[0].value

        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(result => this.props.setUser(result.toJSON()))
            .catch(err => console.log(err.code))
    }
    componentDidMount() {
        firebase.initializeApp(config)
    }
    render() {
        return(
            <div className='Auth'>
                <label>Dirección de email
                    <input type="text" placeholder="alumno@openwebinars.net" className="the_email" />
                </label>
                <label>Contraseña
                    <input type="password" aria-describedby="@elmejoralumn#89" className="the_pass" />
                </label>
                <button className='button expanded hollow secondary' onClick={this.logUser}>Iniciar sesión con usuario y contraseña</button>
            </div>
        )
    }
}

export default AuthView