import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class Book extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this.props.bookId)
        axios.post('/api/cart/add/' + this.props.bookId)
            .then(response => {
                console.log(response);
                this.props.updateBook(this.props.bookId)
            })
    }

    render() {
        return (
            <div>
                {this.props.isNotOwn ?
                    (<button onClick={this.handleClick}>Add to cart</button>)
                    :
                    (
                        <button className="test">
                            <Link to={{
                                pathname:"/addBook",
                                state : {
                                    bookId: this.props.bookId
                                }}}>Edit</Link>
                        </button>
                    )
                }

            </div>
        )
    }

}

export default Book;