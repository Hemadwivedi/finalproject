import React, {Component} from 'react';
import CartItemFunction from "./CartItemFunction";
import RemoveItem from './RemoveItem';
import './cartItem.css'


class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateCart = this.updateCart.bind(this);
        this.renderCartItems = this.renderCartItems.bind(this);
    }


    componentDidMount() {
        CartItemFunction().then(response => {
            console.log("Search Response: " + response);
            this.setState({
                items: response.data

            })
        });
    }

    updateCart(itemId) {
        const updatedBook = this.state.items.filter(item => item.id !== itemId);
        this.setState({items: updatedBook})
    }


    renderCartItems = () => {
        return this.state.items.map(book => {
            return (<div className="card-deck" id="{{id}}">
                    <div className="card">
                        <img className="card-img-top" src={book.jpegImg} alt="bookImage"/>
                        <div className="card-body">
                            <h4 className="card-title">{book.title}</h4>
                            <p className="card-text">By: {book.author}</p>
                            <p className="card-text">{book.description}</p>
                            <p className="price-text">Price: {book.price}</p>
                            <RemoveItem updateCart={this.updateCart} bookId={book.id}/>
                        </div>
                    </div>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="cartcontent">
                <div className="imageandwelcome">
                    <img className="girlreading" alt="image"/>
                    <h2 className="yourcart"> Your Cart! </h2>
                </div>
                <div className="checkoutbtndiv">
                    <input id="checkout" className="btn checkout-btn" value="Checkout"/>
                </div>
                <div className="allbooksdisplayed">
                    {

                        this.renderCartItems()
                    }
                </div>
            </div>
        )

    }
}

export default CartItem;
