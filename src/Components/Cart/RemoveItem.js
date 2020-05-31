import React, {Component} from 'react';
import CartService from "./CartService";
import axios from 'axios';

class RemoveItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this.props.bookId)
        CartService.delete(this.props.bookId)
            .then(response => {
                console.log(response);
                this.props.updateCart(this.props.bookId)
            })
    }

    render() {
        return (
            <div>
                <input name="delete" className="btn submit-btn deleteFromCart"
                       value="REMOVE"  onClick={this.handleClick}/>
            </div>
        )
    }

}

export default RemoveItem;