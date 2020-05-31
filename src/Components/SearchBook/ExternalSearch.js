import React, {Component} from 'react';
import axios from 'axios';


class ExternalSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.onChange = this.onChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=java`).then(response => {
            this.setState({books: response.data.items})
        })
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }


    renderBooks = () => {
        return this.state.books.map(book => {
            return (<div className="allbooksdisplayed">
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">{book.volumeInfo.title}</h4>
                            <p className="card-text">By: {book.volumeInfo.author}</p>
                            <p className="price-text">Price: {book.saleInfo.listPrice.amount}</p>
                            <a className="btn btn-block addToCart" href={book.saleInfo.buyLink}>Buy</a>
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
                <div id="search">
                    <form id="myform">
                        <div className="input-field">
                            <input type="search" id="search-box" className="form-control" placeholder="Search for Books"
                                   aria-describedby="button-addon2" value={this.state.inputText || ""}  onChange={this.onChange}/>

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