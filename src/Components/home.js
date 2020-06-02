import React, {Component} from 'react';
<<<<<<< HEAD
import './home.css';
import { Link } from 'react-router-dom';
import welcome from '../assets/welcome.png'

=======

import {Link} from 'react-router-dom';
import './home.css'
>>>>>>> 91b644abce05f9e3338a36604e199ae0459f9065


class Home extends Component {
    render() {
        return (
            <div>
                <div className="membercontent">
                    <div className="imageandwelcome">
<<<<<<< HEAD
                        <img src={welcome}
                             className="girlreading" />
                        <h3 className="welcometext">Welcome {this.props.username}</h3>
=======
>>>>>>> 91b644abce05f9e3338a36604e199ae0459f9065
                    </div>
                    <h3 className="welcometext">Welcome {this.props.username}</h3>
                    <div className="choices">
                        <h5>Would you like to add a book to sell or search through our library of books?</h5>

<<<<<<< HEAD
                        <button className="test">
                            <Link to="/addBook" style={{ textDecoration: 'none', color: 'white' }}>Add Book</Link>
                        </button>
                        <button className="test">
                            <Link to="/browseBook" style={{ textDecoration: 'none', color: 'white' }}>Browse Book</Link>
=======
                        <button className="homebuttons">
                            <Link to="/addBook">Add Book</Link>
                        </button>
                        <button className="homebuttons">
                            <Link to="/browseBook">Browse Books</Link>
>>>>>>> 91b644abce05f9e3338a36604e199ae0459f9065
                        </button>

                    </div>
                </div>
            </div>
        )
    }


}

export default Home