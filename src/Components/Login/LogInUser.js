import axios from 'axios';
import React from "react";

const LogInUser = (connectUser) => {

    return axios.post('/api/login', {
        username: connectUser.username,
        password: connectUser.password
    }).then(response => {
        localStorage.setItem('userToken', response.data);
        return response.data;
    }).catch(err => {
        console.log(err);
    })
};

export default LogInUser
