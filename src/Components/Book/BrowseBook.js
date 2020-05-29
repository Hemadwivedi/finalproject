import React, {Component} from 'react';
import Book from './Book';

import BrowseBookFunction from "./BrowseBookFunction";


class BrowseBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateBook = this.updateBook.bind(this);
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


    render() {
        return this.state.books.map(book => {
            return (<div className="card">
                <div className="img-container">
                    <img alt={book.name} src={book.jpegImg}/>
                </div>
                <div className="content">
                    <ul>
                        <li><strong> {book.title} </strong></li>
                        <li><strong> By: </strong> {book.author}</li>
                        <li> {book.description} </li>
                        <li><strong> Price: </strong> {book.price} </li>
                    </ul>
                </div>
                <Book updateBook={this.updateBook} bookId={book.id} isNotOwn={book.isNotOwn}/>

            </div>)

        });

    }


}

export default BrowseBook;
