import React, { Component } from 'react';
import LogIn from '../Components/Login/Login';
import Register from '../Components/Register/Register';
class UserPage extends Component {
    render() {
        return (
            <div>
                <section className>
                    <LogIn />

                </section>
            </div>
        )
    }
}
export default UserPage;