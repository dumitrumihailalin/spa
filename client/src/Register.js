import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        email: '',
        password: '',
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/register', {
        name: this.state.username,
        email: this.state.email,
        password: this.state.password
    })
    .then(function (response) {
      localStorage.setItem('access-token', JSON.stringify(response.data))
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
            <h1>Registration</h1>
            <p>Username:</p>
            <input type='text' name='username' onChange={this.myChangeHandler}/>
            <p>Email</p>
            <input type='text' name='email' onChange={this.myChangeHandler}/>
            <p>Password:</p>
            <input type='text' name='password' onChange={this.myChangeHandler}/>
            <br/>
            <br/>
            <input type='submit' className='btn-custom' value='Send'/>
          </form>
      </div>
    )
  }
 }

 export default Register;
