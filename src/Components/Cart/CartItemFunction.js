import React from 'react';
import axios from 'axios';

const CartItemFunction = () =>{
    return axios.get(`/api/cart/`)
        .then(response => {
            console.log("" + response);
            return response
        })
}
export default CartItemFunction;