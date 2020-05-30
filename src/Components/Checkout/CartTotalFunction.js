import React from 'react';
import axios from 'axios';

const CartTotalFunction =(cartTotal)=>{
    return axios.post('/api/book/checkout', cartTotal)
        .then(response => {
            //need to sum total price from cart
            console.log("Calculating Total");
        })
}
export default CartTotalFunction;