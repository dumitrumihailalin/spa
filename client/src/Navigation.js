import React from 'react';
import './App.css';
import {
  Link
} from "react-router-dom";
import axios from 'axios';
import { navigate } from "@reach/router";
class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
   
    if ( localStorage.getItem('access-token') ) {
    
      this.state = {isLoggedIn: true, username: JSON.parse(localStorage.getItem('access-token')).user.name};
    } else {
      this.state ={isLoggedIn: false};
    }
  }


  handleLogoutClick() {
    localStorage.removeItem('access-token');
    axios.post('http://127.0.0.1:8000/api/logout', {
      token: this.state.email,
    })
    .then(function (response) {
     
      navigate('/');
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({isLoggedIn: false});
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    const user = this.state.username;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-brand" to="/">
          <li className="brand">plaY</li>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            { isLoggedIn ?  
              <Link className="nav-link" to="/" >
                <li onClick={this.handleLogoutClick}>Logout { user }</li>
              </Link> :
              <Link className="nav-link" to="/login">
              <li onClick={this.handleLoginClick}>Login</li>
            </Link>
            }
            <Link className="nav-link brand text-white"  to="/games">
              <li>Games</li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
 }

 export default Navigation;