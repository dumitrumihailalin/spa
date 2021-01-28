import './App.css';
import Login from './Login';
import Footer from './Footer';
import Navigation from './Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="row">
      <header className="container-fluid">
      <Router>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
    <Footer/>
    </Router>
      </header>
    </div>
  );
}

export default App;
