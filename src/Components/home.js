import React, {Component} from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import welcome from '../assets/welcome.png'



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
                        <img src={welcome}
                             className="girlreading" />
                        <h3 className="welcometext">Welcome {this.props.username}</h3>
                    </div>
                    <div className="choices">
                        <h5>Would you like to add a book to sell or search through our library of books?</h5>

                        <button className="test">
                            <Link to="/addBook" style={{ textDecoration: 'none', color: 'white' }}>Add Book</Link>
                        </button>
                        <button className="test">
                            <Link to="/browseBook" style={{ textDecoration: 'none', color: 'white' }}>Browse Book</Link>
                        </button>

                    </div>
                </div>
            </div>
        )
    }


}

export default Home


