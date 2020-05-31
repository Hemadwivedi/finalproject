import axios from 'axios';

const LogInUser = (connectUser) => {

    return axios.post('/api/login', {
        username: connectUser.username,
        password: connectUser.password
    }).then(response => {
        return response.data;
    }).catch(err => {
        console.log(err);
    })
};

export default LogInUser
