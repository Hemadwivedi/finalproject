import axios from "axios";

const BlogService = {
    findAll: () => {
        return axios.get('/api/blog/findAll')
            .then(response => {
                console.log("Book is addidng");
                return response;
            })
    },

    addComment: (comment) => {
        return axios.post('/api/blog/addComment' , comment)
            .then(response => {
                console.log("Book is accessing" + response);
                return response
            })
    },
};

export default BlogService