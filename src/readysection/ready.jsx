import React from 'react';

import './ready.css';

export function Ready() {
    function navigateToApp(){
        window.location.href = "https://basislending.my1003app.com/242392/register";
    }

    return (
        <div className="ready-section">        
            <div className="ready-text">Ready To Get Started?</div>
            <button className='ready-button' onClick={navigateToApp}>Apply Now</button>
        </div>
    );
}