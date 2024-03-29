import React, {Component} from 'react';
import { Helmet } from 'react-helmet';

//import './css/bootstrap.min.css';
import './css/styles.css';  




class Login extends Component {
  render(){
  return (      
    <div className="Login">     
    <div>    
        <form className="form-signin" onsubmit="return validateForm()" action="./Program" id="validateForm">   
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <br />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit" formaction="./Program">Sign in</button>
            
        </form>
    </div>
    </div>
  );
}
}

export default Login;
