import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import './home.css'


class Home extends Component {
    render() {
        return (
            <div>
                <div className="membercontent">
                    <div className="imageandwelcome">
                    </div>
                    <h3 className="welcometext">Welcome {this.props.username}</h3>
                    <div className="choices">
                        <h5>Would you like to add a book to sell or search through our library of books?</h5>

                        <button className="homebuttons">
                            <Link to="/addBook">Add Book</Link>
                        </button>
                        <button className="homebuttons">
                            <Link to="/browseBook">Browse Books</Link>
                        </button>

                    </div>
                </div>
            </div>
        )
    }


}

export default Home


