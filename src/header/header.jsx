import React from 'react';

import logo from './basislending.png';
import './header.css';

export function Header() {
    return (
        <div className="header">
            <img src={logo} alt='basic-lending-logo' />
            <div>4805225182</div>
            <div>info@basislending.com</div>
            <button>Apply Now</button>
        </div>
    );
}
