import React, {Component} from 'react';
import AddBookFunction from './AddBookFunction';
import {withRouter} from 'react-router-dom';
import axios from "axios";

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            price: "",
            description: "",
            jpegImg: ""
        }
        console.log(this.props.bookId)
        console.log(this.state.bookId)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getBook = this.getBook.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    componentDidMount() {
        this.getBook()
    }

    getBook() {
        if (this.props.location.state && this.props.location.state.bookId) {
            axios.get(`/api/book/${this.props.location.state.bookId}`).then(response => {
                console.log('book Recieved ')
                this.setState({
                    title: response.data.title,
                    author: response.data.author,
                    price: response.data.price,
                    description: response.data.description,
                    jpegImg: response.data.jpegImg
                })
            })
        }

    }

    onSubmit(e) {
        e.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            description: this.state.description,
            jpegImg: this.state.jpegImg
        };
        AddBookFunction(book).then(response => {
            if (response) {
                this.props.history.push('')
            }
        })
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
                            <label htmlFor="formGroupExampleInput">Book Title</label>
                            <input type="text" className="form-control" placeholder="Enter book title" name="title" value={this.state.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Author</label>
                            <input type="text" className="form-control" placeholder="Enter the book's author"
                                   name="author"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Price</label>
                            <input type="number" min="5.00" max="100.00" step="0.01" className="form-control"
                                   placeholder="5.00" name="price"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Description</label>
                            <input type="text" className="form-control" placeholder="Enter a brief description"
                                   name="description"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Book Cover</label>
                            <input type="text" className="form-control" placeholder="Submit the cover URL"
                                   name="jpegImg"/>
                        </div>
                        <input name="submit" type="submit" className="btn submit-btn" value="Submit your book"/>
                    </form>
                    <span className="todo-container">
			</span>
                </div>
            </div>


        )
    }


}


