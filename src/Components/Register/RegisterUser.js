import axios from 'axios';

const RegisterUser = (newUser) => {

    return axios.post('/api/user/create', newUser)
        .then(response => {
        console.log("register");
    })
};
export default RegisterUser
