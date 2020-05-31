import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state= {}
        this.logout = this.logout.bind(this);
    }
    onSubmit(e){
        e.preventDefault();

        axios.get('/api/logout').then(res=>{
            if(res){
                this.setState({
                    redirectTo: '/'
                })
            }
        })
    }

    logout(event) {
        event.preventDefault();
        axios.get('/api/logout').then(response=> {

                this.props.history.push('/');

        } )
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
                                        <Link to="/browseBook">
                                            <span>Library</span>
                                        </Link>
                                        <Link to="/cart">
                                            <span>Cart</span>
                                        </Link>

                                        <Link onClick={this.onSubmit}>
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

