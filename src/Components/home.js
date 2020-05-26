import React, {Component} from 'react';

import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedPost: ''
        }

    }



    render() {
        return (
            <div>
                <div className="membercontent">
                    <div className="imageandwelcome">
                        <img src="/assets/images/welcome.png"
                             className="girlreading"/>
                        <h3 className="welcometext">Welcome {this.props.username}</h3>
                    </div>
                    <div className="choices">
                        <h5>Would you like to add a book to sell or search through our library of books?</h5>
                        <button type="button" className="btn btn-primary btn-lg" ><Link to="/addBook"></Link>Add Book
                        </button>
                        <button type="button" className="btn btn-primary btn-lg">Browse Library</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default Home


