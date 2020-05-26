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
           <div>
               <div>
                   <div>
                       <form onSubmit={this.onSubmit}>
                       <div className="col-sm-5 intro-section">
                        {/* <img src={logimg}/> */}
                    </div>
                           <h1>Please Sign In</h1>
                           <div>
                               <label className="loguser" htmlFor='username'>Username</label>
                               <input type='username' name='username' placeholder='Enter UserName' value={this.state.username}
                                      onChange={this.onChange}/>
                           </div>
                           <div>
                               <label htmlFor='password'>Password</label>
                               <input type='password' name='password' placeholder='Enter Password' value={this.state.password}
                                      onChange={this.onChange}/>
                           </div>
                           <button type='submit'> Sign In</button>
                           <p className="login-wrapper-signup-text">New to this website? <a href="/register">Signup
                               here</a></p>
                       </form>
                   </div>
               </div>
           </div>
        )
    }
}
export default LogIn;