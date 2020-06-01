import React, {Component} from "react";
// import loginImg from "../../assets/login.png";
import RegisterUser from "./RegisterUser";
import login from '../Login/LogInUser';
import './Register.css'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: ''
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
            password: this.state.password
        }

        RegisterUser(user).then(res => {
            login(user).then(res=>{
                if(res){
                    this.props.history.push('/home');
                }
            });
        })
    }

    render() {
        return (
            <div className="contentholder">
                <div className="signup-wrapper">
                <h2 className="login-title">Register</h2>
                    <form className="signup" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                <label className="sr-only" htmlFor="firstname">First name</label>
                                <input className="form-control" type="text" name="First Name"
                                       placeholder="First Name"
                                       value={this.state.firstname}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="lastname">Last Name</label>
                                <input className="form-control" type="text" name="Last Name"
                                       placeholder="Last Name"
                                       value={this.state.lastname}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="username">Username</label>
                                <input className="form-control" type="text" name="username" placeholder="Username"
                                       value={this.state.username}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="password">Password</label>
                                <input className="form-control" type="password" name="password" placeholder="Password"
                                       value={this.state.password}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-5">
                <input name="signup" id="signup" className="btn signup-btn" type="submit" value="Sign Up"></input>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;