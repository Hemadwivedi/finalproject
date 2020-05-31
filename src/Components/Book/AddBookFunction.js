import axios from 'axios';

const AddBookFunction = (newBook)=>{
    return axios.post('/api/book/create', newBook)
        .then(response => {
            console.log("Book is addidng");
            return response;
        })
};
export default AddBookFunction;