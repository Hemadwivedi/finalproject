import React,{Component} from 'react';
import logInPng from '../../assets/login.png';
import style from "../User/style.css"
class LogIn extends Component{
    login(){
        console.warn("state",this.state);
        //alert("login working")
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="base-Container">
                <div className="header">LogIn</div>
    <div className=" content">
                <div className="Image">
                    <img src={logInPng}/>
                </div>
               
               
         <div className="form">
             <div className='form-group'>

                <label htmlFor='username'>UserName</label>
                <input type="text" name='username' placeholder='username' onChange={(e)=>{this.setState({email:e.target.value})}}/>
             </div>
                   
             <div className='form-group'>

                <label htmlFor='password'>Password</label>
                <input type="text" name='upassword' placeholder='password'  onChange={(e)=>{this.setState({password:e.target.value})}} />
            </div>
                   
          </div>
               
     </div>
     <div className='footer'>
         <button type='button' className='btn' onClick={()=>this.login()}>LogIn</button>
     </div>
      </div>
 </div>
        )
    }
}
export default LogIn;