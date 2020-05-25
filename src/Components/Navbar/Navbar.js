import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    logout(event) {
        event.preventDefault();
        localStorage.removeItem('userToken');
        this.props.history.push('/')
    }


    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ');
        console.log(this.props);

        return (
            <div>
                <header>
                    <div>
                        {
                            loggedIn ? (
                                    <section>
                                        <Link to="/home">
                                            <span>Home</span>
                                        </Link>
                                        <Link to="/register">
                                            <span>Profile</span>
                                        </Link>
                                        <Link to="/library">
                                            <span>Library</span>
                                        </Link>
                                        <Link to="/logout">
                                            <span>Log out</span>
                                        </Link>
                                        <Link onClick={this.logout}>
                                            <span>logout</span></Link>
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

