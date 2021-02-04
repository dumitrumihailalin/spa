// import logo from './logo.svg';
import React  from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login/Login';
import Register from './Register/Register';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Container>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
      </Container>
    </BrowserRouter>
      {/* Footer */}
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Copyright 2021
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
      </div>
  );
}

export default App;
