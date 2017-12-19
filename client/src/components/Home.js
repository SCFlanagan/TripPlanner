import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/home.css';

const Home = () => {
    return (
        <div id='home-page'>
            <div>
                <Link to='/trips'>
                    <div className='home-option' id='plan-option'>Plan</div>
                </Link>
                <Link to='/trips'>
                    <div className='home-option' id='remember-option'>Remember</div>
                </Link>
            </div>
        </div>
    )
}

export default Home;