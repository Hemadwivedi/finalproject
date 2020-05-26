import React, {Component} from "react";
import loginImg from "../../assets/login.png";
import RegisterUser from "./RegisterUser";
import login from '../Login/LogInUser';


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
            <div className="base-container">
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}/>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form">

                            <div className="form-group">
                                <label htmlFor="firstname">FirstName</label>
                                <input type="text" name="firstname"
                                       placeholder="firstname"
                                       value={this.state.firstname}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">LastName</label>
                                <input type="text" name="lastname"
                                       placeholder="lastname"
                                       value={this.state.lastname}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">UserName</label>
                                <input type="text" name="username" placeholder="username"
                                       value={this.state.username}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password"
                                       value={this.state.password}
                                       onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="footer">
                            <button type="submit" className="btn">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;