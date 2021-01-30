import React from 'react';

class Games extends React.Component {
    render () {
        return (
            <div className='container'>
                <h1 className='pt-5'> Our GAMES!</h1>
                <ul className="list-group text-justify pt-5 pb-5">
                    <li className="list-group-item">Fifa <button className='btn btn-outline-danger right'>Play</button></li>
                    <li className="list-group-item">GTA 5 <button className='btn btn-outline-danger'>Play</button></li>
                    <li className="list-group-item">San Andreas <button className='btn btn-outline-danger'>Play</button></li>
                    <li className="list-group-item">CS GO ! <button className='btn btn-outline-danger'>Play</button></li>
                </ul>
            </div>
        ) 
    }
 }

 export default Games;
