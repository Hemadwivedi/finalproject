import React, {Component} from 'react';
import axios from 'axios';
import './ExternalSearch.css'

class ExternalSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            inputText: null
        };
        this.onChange = this.onChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.inputText}`).then(response => {
            this.setState({books: response.data.items})
        })
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }


    renderBooks = () => {
        return this.state.books
            .map(data => {
                const book = {
                    title: "",
                    author: "",
                    thumbnail: "",
                    amount: "",
                    buyLink: ""
                };
                if (data.volumeInfo) {
                    book.title = data.volumeInfo.title;
                    book.author = data.volumeInfo.author;
                    if (data.volumeInfo.imageLinks) {
                        book.thumbnail = data.volumeInfo.imageLinks.thumbnail
                    }
                }
                if (data.saleInfo) {
                    book.amount = data.saleInfo.listPrice ? data.saleInfo.listPrice.amount : "";
                    book.buyLink = data.saleInfo.buyLink
                }
                return book;
            })
            .map(book => {
                return (<div className="allbooksdisplayed">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={book.thumbnail} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">{book.title}</h4>
                                <p className="card-text">By: {book.author}</p>
                                <p className="price-text">Price: {book.amount}</p>
                                <a className="btn btn-block addToCart" href={book.buyLink}>Buy</a>
                            </div>
                        </div>
                    </div>
                </div>)

            });
    };

    render() {
        return (
            <div className="apicontent">
                <div className="imagesearch">
                </div>
                <div className="search">
                    <form id="myform">
                        <div className="input-field">
                            <input type="search" id="search-box" className="form-control" placeholder="Search for Books"
                                   aria-describedby="button-addon2" onChange={this.onChange}
                                   value={this.state.inputText}/>

                        </div>
                        <button className="btn btn-search" type="button" id="search-btn"
                                onClick={this.clickHandler}>Search
                        </button>
                    </form>
                </div>
                <div className="results">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }


}

export default ExternalSearch