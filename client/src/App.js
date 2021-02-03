// import logo from './logo.svg';
import React  from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login/Login';
import Register from './Register/Register';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Navigation from './Navigation/Navigation';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <div className="App">
    <BrowserRouter>
      <Navigation/>
      <Container  maxWidth="sm">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
      </Container>
    </BrowserRouter>
      <footer>
        copyright 2021
      </footer>
      </div>
  );
}

export default App;
