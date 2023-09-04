import React from 'react';

import logo from './basislending.png';
import './header.css';

export function Header() {

    function navigateToApp(){
        window.location.href = 'https://basislending.my1003app.com/242392/register';
    }

    return (
        <div className="header">
            <img src={logo} alt='basic-lending-logo' />
            <button onClick={navigateToApp}>Apply Now</button>
        </div>
    );
}
