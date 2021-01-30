import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Navigation from './Navigation';
  import Login from './Login';
  import Home from './Home';
  import Register from './Register'
  import Games from './Games';
  class Header extends React.Component {
    render () {
        return (
            <header className="container">
            <Router>
              <div className="App">
                <Navigation />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Register} /> 
                  <Route path="/games" exact component={Games} /> 
                </Switch>
              </div>
      
          </Router>
            </header>
        ) 
    }
 }

 export default Header;
