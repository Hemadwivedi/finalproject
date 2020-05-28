import React, {Component} from 'react';
import login from './LogInUser';
import './Login.css'
// import logimg from '../../assets/login.png'

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            username:''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
     e.preventDefault();
      const user={
          username:this.state.username,
          password:this.state.password
      };
      login(user).then(res=>{
       if(res){
           this.props.history.push('/home');
       }
      })
    }

    render(){
        return(
           <div className="container-fluid">
               <div className="row">
                       <div className="col-sm-5 intro-section">
                    </div>
                    <div className="col-sm-7 form-section">
                    <div className="intro-content-wrapper">
                <h1 className="intro-title">Welcome to BookToShare!</h1>
                <p className="intro-text">A great place to sell a book you've already read, buy a second hand book
                or get all your questions answered in our daily updated forum!</p>
            </div>
                        <div className="login-wrapper">
                        <form onSubmit={this.onSubmit}>
                           <h1>Sign In</h1>
                           <div>
                               <input className="form-control" type='username' name='username' placeholder='Enter Username' value={this.state.username}
                                      onChange={this.onChange}/>
                           </div>
                           <div>
                               <input className="form-control" type='password' name='password' placeholder='Enter Password' value={this.state.password}
                                      onChange={this.onChange}/>
                           </div>
                           <button className="btn btn-default login-btn" type='submit'> Sign In</button>
                           <p className="login-wrapper-signup-text">New to this website? <a href="/register">Signup
                               here</a></p>
                       </form>
                       </div>
                    </div>
               </div>
           </div>
        )
    }
}
export default LogIn;