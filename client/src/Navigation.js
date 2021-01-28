import React from 'react';
import './App.css';
import {
  Link
} from "react-router-dom";

class Navigation extends React.Component {
    render () {
      const navStyle = {
        color: 'black'
      }
        return (
            <nav>
              <h3>New Account</h3> 
              <ul className="nav-links">
                <Link style={navStyle} to="/login">
                  <li>Login</li>
                </Link>
              </ul>
            </nav>
        )
      }
 }

 export default Navigation;