import axios from "axios";

const BookService = {

    createBook: (book) => {
        return axios.post('/api/book/create', book)
            .then(response => {
                console.log("Book is addidng");
                return response;
            })
    },

    searchBook: () => {
        return axios.get('/api/book/search/')
            .then(response => {
                console.log("Book is accessing" + response);
                return response
            })
    },

    getBookById: (bookId) => {
        return axios.get(`/api/book/${bookId}`).then(response => {
            console.log('book Recieved ');
            return response
        })
    },

    editBook: (bookId, book) => {
        return axios.post(`/api/book/${bookId}`, book)
            .then(response => {
                console.log("Book is Edited...");
                return response;
            })
    },

    deleteBook: (bookId) => {
        axios.delete(`/api/book/${bookId}`).then(response => {
            console.log('book deleted ')
        })
    }

};

export default BookService;