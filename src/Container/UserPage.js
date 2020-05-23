import React, { Component } from 'react';
import LogIn from '../Components/User/Login';
import Register from '../Components/User/Register';
class UserPage extends Component {
    render(){
        return(
            <div>
                <section className>
                    <LogIn/>
                    <Register/>
                </section>
            </div>
        )
    }
}
export default UserPage;