import React, {Component} from "react";
import "./Login.css";
import ModelPopup from '../Model/Model'
import PasswordMask from 'react-password-mask';
class Login extends Component {
   constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      rePassword: '',
      showConfirmation: false
    }
  }

  validateForm = () => {
    const {email, password, rePassword, name} = this.state
    if(name.length < 2 || email.length < 2 || password.length < 2 || rePassword.length < 2){
      alert("All data should be minimum 2 character");
      return false
    } else if(password != rePassword) {
      alert("Both password do not match");
      return false
    }
    return true
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    })
  }
  handleSubmit = (event) => {
    if(this.validateForm()){
      this.setState({showConfirmation: true})
    }
    event.preventDefault();
  }
  onClose = () => {
    this.setState({
      showConfirmation: false,
      email: '',
      name: '',
      password: '',
      rePassword: '',      
    })
  }
  render() {
    const { email, name, password, showConfirmation, rePassword } = this.state;
    return (
        <div className="Login">
          <ModelPopup name={name} email={email} show={showConfirmation} onClose={this.onClose} /> 
          <form onSubmit={this.handleSubmit} >
            <div className="signup-text" >Signup form</div>
            <div className="single-section">
                <div className="label-text">Name:</div>
                <input className="input-field" value={name} name="name" placeholder="Enter Name" onChange={this.handleInput}></input>
            </div>
            <div className="single-section">
                <div className="label-text">Email:</div>
                <input className="input-field" value={email} type="email" name="email" placeholder="Enter Email" onChange={this.handleInput}></input>
            </div>
            <div className="single-section">
                <div className="label-text">Password:</div>
                <PasswordMask
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={this.handleInput}
                  buttonStyles={{width: "29px", fontSize: "0.6em", top: "63%", right: "0"}}
                  inputStyles={{padding: "5px 0 5px 5px", width: "102%"}}
                />
            </div>
            <div className="single-section">
                <div className="label-text">Confirm password:</div>
                <PasswordMask
                  id="rePassword"
                  name="rePassword"
                  placeholder="Confirm password"
                  value={rePassword}
                  onChange={this.handleInput}
                  buttonStyles={{width: "29px", fontSize: "0.6em", top: "63%", right: "0"}}
                  inputStyles={{padding: "5px 0 5px 5px", width: "102%"}}
                />                
            </div>      
            <div className="single-section">  
                <button style={{fontSize: "0.8em", padding: "4px"}}>Signup</button>
            </div>                        
          </form>
        </div>
    );
  }
}

export default Login