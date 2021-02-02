import React, { PropTypes } from 'react'
import logo from './logo.svg'
import './App.css'



const App = props => (
  

  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Dashboard</h1>
      <h2>Please login </h2>
    </div>
    <section className="App-body">
      {props.children}
    </section>
  </div>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App
