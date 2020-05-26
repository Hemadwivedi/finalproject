import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/home'
import Profile from './Components/User/Profile'
import AddBook from './Components/Book/AddBook'
import Library from './Components/Library'
import './App.css';
import { Redirect } from 'react-router-dom';
import BookContext from "./utils/bookContext.js";
import Cart from './Components/Cart/cart'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userId: null,
            username: null,
            books: []
        }

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.addBookToCart = this.addBookToCart.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    addBookToCart(newBook) {
        console.log('this is our new book', newBook)

        var oldBooks = this.state.books
        console.log('this is our old books this.state.books', oldBooks)

        var newBooks = oldBooks.concat(newBook)
        console.log('here is new books!! ewith the ne wone added!!', newBooks)
        this.setState({ books: newBooks })
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
                    userId: response.data.user.id,
                    username: response.data.user.username
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    user: null
                })
            }
        })
    }

    redirect() {
        if (this.state.loggedIn) {
            return <Redirect to='/home' />
        }
    }

    render() {
        return (
            <BookContext.Provider value={this.state}>
                <Router>
                    <div className="App">
                        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
                        <div className='container'>
                            <Route exact path='/' component={Login} />
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/addBook' component={AddBook} />
                            <Route exact path='/library' render={() => <Library addBookToCart={this.addBookToCart} />} />
                            <Route exact path='/cart' component={Cart} />
                            <Route
                                path='/home'
                                render={() => <Home updateUser={this.updateUser} userId={this.state.userId} username={this.state.username} />}
                            />
                        </div>
                    </div>
                    {/*this.redirect()*/}
                </Router>
            </BookContext.Provider>

        )
    }

}

export default App;
