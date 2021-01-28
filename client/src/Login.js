import React from 'react';
import axios from 'axios';

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
    axios.post('http://localhost:8000/api/auth/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      localStorage.setItem('access-token', JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error);
     
      window.history.pushState({login: 1}, "title 1", "?error=true") 
    });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render () {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Login</h1>
        <p>Username:</p>
        <input type='text' name='email' onChange={this.myChangeHandler}/>
        <p>Password:</p>
        <input type='text' name='password' onChange={this.myChangeHandler}/>
        <br/>
        <br/>
        <input type='submit' className='btn btn-success' value='login'/>
      </form>
    )
  }
 }

 export default Login;
