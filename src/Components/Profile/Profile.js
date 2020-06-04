import React, {Component} from 'react';
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: props.user.firstname,
            lastname: props.user.lastname,
            username: props.user.username,
            password: props.user.password,
            email: props.user.email
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };
        axios.post(`/api/user/${this.props.user.id}`, user)
            .then(response => {
                this.props.updateUser({
                    loggedIn: true,
                    user: user,
                })
            })
    }


    render() {
        return (
            <div className="contentholder">
                <div className="signup-wrapper">
                    <h2 className="login-title">Update Profile</h2>
                    <form className="signup" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="firstname">First name</label>
                            <input className="form-control" type="text" name="firstname"
                                   placeholder="First Name"
                                   onChange={this.onChange}
                                   value={this.state.firstname}
                            />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="lastname">Last Name</label>
                            <input className="form-control" type="text" name="lastname"
                                   placeholder="Last Name"
                                   onChange={this.onChange}
                                   value={this.state.lastname}
                            />
                        </div>

                        <div className="form-group">
                            <label className="sr-only" htmlFor="email">Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="email"
                                   onChange={this.onChange}
                                   value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="username">Username</label>
                            <input className="form-control" type="text" name="username" placeholder="Username"
                                   onChange={this.onChange}
                                   value={this.state.username}
                            />
                        </div>

                        <div className="form-group">
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input className="form-control" type="password" name="password" placeholder="Password"
                                   onChange={this.onChange}
                                   value={this.state.password}
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-5">
                            <input name="signup" id="signup" className="btn signup-btn" type="submit"
                                   value="Update"></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;

