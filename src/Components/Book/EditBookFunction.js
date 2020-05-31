import React from 'react';
import axios from 'axios';

const EditBookFunction = (book , bookId)=>{
    return axios.post(`/api/book/${bookId}`, book)
        .then(response => {
            console.log("Book is Edited...");
            return response;
        })
};
export default EditBookFunction;