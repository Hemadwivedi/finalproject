import React, { Component } from "react";
import loginImg from "../../assets/login.png";
import style from "../User/style.css"

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
  }
  onUserNameChange(e) {
    this.setState({ username: e.target.value })
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value })
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  submitRegister(e) {

  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.onUserNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={this.onEmailNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={this.onPasswordNameChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.submitRegister}>
            Register
          </button>
        </div>
      </div>
    );
  }
}
export default Register;