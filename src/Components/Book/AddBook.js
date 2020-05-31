import React, {Component} from 'react';
import AddBookFunction from './AddBookFunction';
import EditBookFunction from './EditBookFunction';
import {withRouter} from 'react-router-dom';
import axios from "axios";
import './addABook.css'

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            price: "",
            description: "",
            jpegImg: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.getBookById = this.getBookById.bind(this);
        this.getBookId = this.getBookId.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount = () => {
        this.getBookById(this.getBookId())
    };

    getBookId = () => {
        if (this.props.location.state) {
            return this.props.location.state.bookId
        }
    };

    getBookById = (bookId) => {

        if (bookId) {
            axios.get(`/api/book/${bookId}`).then(response => {
                console.log('book Recieved ')
                this.setState({
                    title: response.data.title,
                    author: response.data.author,
                    price: response.data.price,
                    description: response.data.description,
                    jpegImg: response.data.jpegImg,
                })
            })
        }
    };


    onSubmit(e) {
        e.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            description: this.state.description,
            jpegImg: this.state.jpegImg,
        };
        const redirectToBrowsBook = response => {
            if (response) {
                this.props.history.push('/browseBook')
            }
        };
        if (this.getBookId()) {
            EditBookFunction(book, this.getBookId()).then(redirectToBrowsBook)
        } else {
            AddBookFunction(book).then(redirectToBrowsBook)
        }

    }

    render() {
        return (
            <div className="createcontent">
                <h5 className="rules">Before you submit your book, please read our <a href="#popup1">Terms and
                    Conditions</a>!</h5>
                <div id="popup1" className="overlay">
                    <div className="popup">
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            <ul>
                                <li>Fill out all fields.</li>
                                <li>Folow the format rules.</li>
                                <li>Books with a cover, have a better chance of being sold.</li>
                                <li>Please, no profanities!</li>
                                <li>Have fun and enjoy our website!</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-submit">
                    <form method="post" action="/api/book/create" className="submitcont">
                        <div className="form-group">
                            <label className="bookattr" style={{textAlign: "c"}} htmlFor="formGroupExampleInput">Book
                                Title</label>
                            <input type="text" className="form-control" placeholder="Enter book title" name="title"
                                   value={this.state.title} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="bookattr" htmlFor="formGroupExampleInput">Author</label>
                            <input type="text" className="form-control" placeholder="Enter the book's author"
                                   name="author" value={this.state.author} onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <label className="bookattr" htmlFor="formGroupExampleInput">Price</label>
                            <input type="number" min="5.00" max="100.00" step="0.01" className="form-control"
                                   placeholder="5.00" name="price"
                                   value={this.state.price} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="bookattr" htmlFor="formGroupExampleInput">Description</label>
                            <input type="text" className="form-control" placeholder="Enter a brief description"
                                   name="description" value={this.state.description} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label className="bookattr" htmlFor="formGroupExampleInput">Book Cover</label>
                            <input type="text" className="form-control" placeholder="Submit the cover URL"
                                   name="jpegImg" value={this.state.jpegImg} onChange={this.onChange}/>
                        </div>
                        <input name="submit" type="submit" className="btn submit-btn" value="Submit your book"
                               onClick={this.onSubmit}/>
                    </form>
                    <span className="todo-container">
			</span>
                </div>
            </div>


        )
    }


}

export default withRouter(AddBook);