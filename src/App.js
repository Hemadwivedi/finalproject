import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import home from './Components/home'
import Profile from './Components/User/Profile'
import './App.css';
import {Redirect} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: null
        }

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    getUser() {
        axios.get('/api/user/').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    redirect() {
        if (this.state.loggedIn) {
            return <Redirect to='/home'/>
        }
    }

    render() {
        return (
            <Router>
                <div className="App">

                    <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
                    <div className='container'>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/home' component={home}/>
                    </div>
                </div>
                {this.redirect()}
            </Router>

    )
    }

}

export default App;
