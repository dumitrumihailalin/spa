import React from 'react';
import Logo  from './logo.png';

class Home extends React.Component {
    render () {
        return (
            <div className='container'>
                <h1> Our GAMES!</h1>
                <p>Welcome to our games platform.</p>
                <img src={Logo} alt="Logo" />
            </div>
        ) 
    }
 }

 export default Home;