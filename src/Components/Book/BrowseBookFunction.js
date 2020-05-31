import axios from 'axios';

const BrowseBookFunction = () =>{
    return axios.get('/api/book/search/')
        .then(response => {
            console.log("Book is accessing" + response);
            return response
        })
}
export default BrowseBookFunction;