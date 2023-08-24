import React from 'react';

import './buyaccesslower.css';
import equity from './equity.png';
import house from './house.png';
import money from './money-bag.png';

export function BuyAccessLower() {
    return (
        <div id="BuyAccessLower" className="buyaccesslower">
            <div id="buy">
                <div>
                    <div className="image"><img src={house}/></div>
                    <div className="text"><span>Buy a New Home</span></div>
                </div>
            </div>
            <div id="access">
                <div>
                    <div className="image"><img src={equity}/></div>
                    <div className="text"><span>Access Your Equity</span></div>
                </div>
		    </div>
            <div id="lower">
                <div>                
                    <div className="image"><img src={money}/></div>
                    <div className="text"><span>Lower Your Payments</span></div>
                </div>
		    </div>
	    </div>
    );
}