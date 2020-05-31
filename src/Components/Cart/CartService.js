import axios from 'axios';

const CartService = {

    addToCart: (bookId) => {
        return axios.post(`/api/cart/add/${bookId}`)
            .then(response => {
                console.log("Book is adding to the cart");
                return response;
            })
    },

    getCart: () => {
        return axios.get('/api/cart/')
            .then(response => {
                console.log("showing all the book which is in the cart");
                return response;
            })
    },

    delete: (bookId) => {
        return axios.delete(`/api/cart/${bookId}`)
            .then(response => {
                console.log("this book is deleted from the library");
                return response;
            })

    }

};
export default CartService;