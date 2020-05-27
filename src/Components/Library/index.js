import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Axios from 'axios'

class Library extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }

    }

    componentDidMount() {
        var self = this
        Axios.get('/api/book/search').then(function (data) {
            console.log('we got the books from the backend!!', data)
            self.setState({ books: data.data })
        })
    }

    render() {
        var style = {
            resetStyle: {
                margin: '0px'
            }
        }
        return (
            <div className="createcontent">
                <h1> lIbrary coming soon</h1>
                {this.state.books.map((book) => {
                    return (
                        <div>
                            <h1 style={style.resetStyle}>{book.title}</h1>
                            <button onClick={() => this.props.addBookToCart(book)} style={style.resetStyle}>Add to Cart</button>
                        </div>
                    )
                })}
                <Link to='/cart'>Proceed to checkout!!</Link>
            </div>


        )
    }


}

export default withRouter(Library);