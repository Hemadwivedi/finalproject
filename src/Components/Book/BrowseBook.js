import React, {Component} from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import "./browsBook.css"

import BrowseBookFunction from "./BrowseBookFunction";


class BrowseBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.renderBooks = this.renderBooks.bind(this);
    }


    componentDidMount() {
        BrowseBookFunction().then(response => {
            console.log("Search Response: " + response);
            this.setState({
                books: response.data

            })
        });
    }

    updateBook(bookId) {
        const updatedBook = this.state.books.filter(book => book.id !== bookId);
        this.setState({books: updatedBook})
    }

    renderBooks = () => {
        return this.state.books.map(book => {
            return (<div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src={book.jpegImg} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{book.title}</h4>
                        <p className="card-text">By: {book.author}</p>
                        <p className="card-text">{book.description}}</p>
                        <p className="price-text">Price: {book.price}}</p>
                        <Book updateBook={this.updateBook} bookId={book.id} isNotOwn={book.isNotOwn}/>
                    </div>
                </div>
            </div>)

        });
    };

    render() {
        return (
            <div className="availablecontent">
                <div className="imagebrowse">
                    <img className="broseBookImg"/>
                </div>
                <div id="search">
                    <form id="myform">
                        <div className="input-field">

                        </div>
                        <button className="btn btn-search1" id="addBook" type="button"> Add Another Book</button>
                        <h5 className="linktoapi">If you don't find the book you are looking for, we got you!</h5>
                        <Link to="/api-search">Click here!</Link>
                    </form>
                </div>
                <div className="allbooksdisplayed">
                    {this.renderBooks()}
                </div>
            </div>
        )

    }


}

export default BrowseBook;
