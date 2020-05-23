import React, { Component } from 'react';





class User extends Component {
  state = {
    firstName:null,
    lastName:null,
    email:null,
    password:null,
    }
 

    
  
  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Sign In</h2>
          <form >
            <div className='firstName'>
               <label htmlFor="firstName"  >FullName</label>
              <input type='text' name='firstName' value={this.state.firstName} />
            </div>
            <div className='lastName'>
               <label htmlFor="lastName"  >LastName</label>
              <input type='text' name='lastName' value={this.state.lastName} />
            </div>
            <div className='email'>
    <label htmlFor="email" >Email</label>
              <input type='email' name='email' value={this.state.email} />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' value={this.state.password}  />
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default User;