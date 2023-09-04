import React from 'react';

import './buyaccesslower.css';
import equity from './equity.png';
import house from './house.png';
import money from './money-bag.png';

export function BuyAccessLower() {
    function navigateToApp(){
        window.location.href='https://basislending.my1003app.com/242392/register';
    }

    return (
        <div id="BuyAccessLower" className="buyaccesslower">
            <div id="buy" onClick={navigateToApp}>
                <div>
                    <div className="image"><img src={house} alt="buy-container"/></div>
                    <div className="text"><span>Buy a New Home</span></div>
                </div>
            </div>
            <div id="access" onClick={navigateToApp}>
                <div>
                    <div className="image"><img src={equity} alt="equity-container"/></div>
                    <div className="text"><span>Access Your Equity</span></div>
                </div>
		    </div>
            <div id="lower" onClick={navigateToApp}>
                <div>                
                    <div className="image"><img src={money} alt="money-container"/></div>
                    <div className="text"><span>Lower Your Payments</span></div>
                </div>
		    </div>
	    </div>
    );
}