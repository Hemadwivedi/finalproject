import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="membercontent">
                    <div className="imageandwelcome">
                        <img src="/assets/images/welcome.png"
                             className="girlreading" alt="welcome"/>
                        <h3 className="welcometext">Welcome {this.props.username}</h3>
                    </div>
                    <div className="choices">
                        <h5>Would you like to add a book to sell or search through our library of books?</h5>

                        <button className="test">
                            <Link to="/addBook">Add Book</Link>
                        </button>
                        <button className="test">
                            <Link to="/browseBook">Browse Book</Link>
                        </button>

                    </div>
                </div>
            </div>
        )
    }


}

export default Home


