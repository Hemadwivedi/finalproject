import React, {Component} from 'react';
import CartService from "./CartService";
import CartItem from "./CartItem";
import './cartItem.css'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateCart = this.updateCart.bind(this);
        this.renderCartItems = this.renderCartItems.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
    }


    componentDidMount() {
        CartService.getCart().then(response => {
            console.log("Search Response: " + response);
            this.setState({
                items: response.data

            })
        });
    }

    deleteFromCart = (event, id) => {

        CartService.delete(id).then(response => {
            console.log(response);
            this.updateCart(id)
        })
    };

    updateCart = (itemId) => {
        const updatedBook = this.state.items.filter(item => item.id !== itemId);
        this.setState({items: updatedBook})
    };


    renderCartItems = () => {
        return this.state.items.map(book => {
            return (<CartItem jpegImg={book.jpegImg}
                              title={book.title}
                              author={book.author}
                              description={book.description}
                              price={book.price}
                              deleteFromCart={(event) => this.deleteFromCart(event, book.id)}
            />)
        })
    };

    render() {
        return (
            <div className="cartcontent">
                <div className="cartimage">
                </div>
                <h2 className="yourcart">Welcome to your cart! </h2>
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

export default Cart;
