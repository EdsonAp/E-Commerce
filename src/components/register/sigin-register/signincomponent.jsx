import React, { Component } from "react";
import '../../register/sigin-register/signupstyles.scss'

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  getValue = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  submitHandle = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div className='signup'>
        <h1 className='register-title'>Login</h1>
        <span className='subtitle'>I already have an account</span>
        <form onSubmit={this.submitHandle}>
          <label></label>
          <input 
            type="email" 
            name="email" 
            placeholder='Email'
            value={this.state.email} 
            onChange={this.getValue}
            className='input'
          />
          <br />
          <label></label>
          <input 
            name='password' 
            type="password" 
            value={this.state.password} 
            onChange={this.getValue} 
            className='input'
            placeholder='Password'/>
          <br />
          <input type="submit" value="Submit Form" className='submit-btn'/>
        </form>
      </div>
    );
  }
}

export default Signin;
