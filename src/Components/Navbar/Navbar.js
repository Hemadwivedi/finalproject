import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import './Navbar.css'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout=()=>{
        axios.get('/api/logout').then(response=> {
            this.props.updateUser({loggedIn:false})
        })
    }


    render() {
        const loggedIn = this.props.loggedIn;

        if(!loggedIn){
            return <Redirect to="/" push={true}/>;
        }
        return (
            <div>
                <header>
                    <div>
                        {
                            loggedIn ? (
                                    <section className="navbarall">
                                        <Link to="/home">
                                            <span className="navlinks">Home</span>
                                        </Link>
                                        <Link to="/profile">
                                            <span className="navlinks">Profile</span>
                                        </Link>
                                        <Link to="/browseBook">
                                            <span className="navlinks">Library</span>
                                        </Link>
                                        <Link to="/cart">
                                            <span className="navlinks">Cart</span>
                                        </Link>
                                        <Link to="/blog">
                                            <span className="navlinks">Blog</span>
                                        </Link>

                                        <Link to="/about">
                                            <span className="navlinks">About</span>
                                        </Link>

                                        <Link onClick={this.logout} >
                                            <span className="navlinks" >Logout</span></Link>
                                    </section>) :
                                (
                                    <section>


                                    </section>
                                )
                        }
                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar

