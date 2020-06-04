import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/home';
import Profile from './Components/Profile/Profile';
import AddBook from './Components/Book/AddBook';
import BrowseBook from './Components/Book/BrowseBook';
import CartItem from "./Components/Cart/Cart";
import ExternalSearch from "./Components/SearchBook/ExternalSearch"
import './App.css';
import {Redirect} from 'react-router-dom';
import Blog from './Components/blog/Blog';
import TeamPage from './Components/About/TeamPage';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            user:{},
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
                    user: response.data.user
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    user: {}
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
                        <Route exact path='/register'
                               render={() => <Register updateUser={this.updateUser}/>}
                        />
                        <Route exact path='/'
                               render={() => <Login updateUser={this.updateUser}/>}/>
                        <Route
                            path='/home'
                            render={() => <Home username={this.state.user.username}/>}
                        />

                        <Route exact path='/profile'
                               render={() => <Profile user={this.state.user} updateUser={this.updateUser}/>}/>

                        <Route exact path='/addBook' component={AddBook}/>
                        <Route exact path='/browseBook' component={BrowseBook}/>
                        <Route exact path='/cart' component={CartItem}/>
                        <Route exact path='/api-search' component={ExternalSearch}/>
                        <Route exact path='/blog' component={Blog}/>
                        <Route exact path='/about' component={TeamPage}/>
                    </div>
                </div>
                {this.redirect()}
            </Router>

        )
    }

}

export default App;
