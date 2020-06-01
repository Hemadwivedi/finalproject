import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./browsBook.css"
import Book from './Book';
import BookService from "./BookService";
import CartService from "../Cart/CartService";


class BrowseBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.renderBooks = this.renderBooks.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }


    componentDidMount() {
        BookService.searchBook().then(response => {
            console.log("Search Response: " + response);
            this.setState({
                books: response.data

            })
        });
    }


    addToCart = (bookId) => {
        CartService.addToCart(bookId)
            .then(response => {
                console.log(response);
                this.updateBook(bookId)
            })
    };


    updateBook = (bookId) => {
        const updatedBook = this.state.books.filter(book => book.id !== bookId);
        this.setState({books: updatedBook})
    };


    renderBooks = () => {
        return this.state.books.map(book => {
            return (
                <Book jpegImg={book.jpegImg}
                      title={book.title}
                      author={book.author}
                      description={book.description}
                      price={book.price}
                      isNotOwn={book.isNotOwn}
                      bookId={book.id}
                      addToCart={() => this.addToCart(book.id)}
                />)
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
