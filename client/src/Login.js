import React from 'react';
import axios from 'axios';
import { navigate } from "@reach/router";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      localStorage.setItem('access-token', JSON.stringify(response.data))
      navigate('/games');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render () {
    return (
      <div className='container pt-5 pb-5'>
        <form onSubmit={this.mySubmitHandler}>
          <h1>Login</h1>
          <p>Username:</p>
          <input type='text' name='email' onChange={this.myChangeHandler}/>
          <p>Password:</p>
          <input type='text' name='password' onChange={this.myChangeHandler}/>
          <br/>
          <br/>
          <input type='submit' className='btn-custom' value='login'/>
        </form>
      </div>
    )
  }
 }

 export default Login;
