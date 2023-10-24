import React from 'react';

import logo from '../header/basislending.png';
import './footer.css';

export function Footer() {
    return (
        <div id="footer" className="footer">
            {/* <hr className='footer-hr'/> */}
            <img src={logo} className='footer-image' alt="basic-lending-logo"/>
            <div className="left-align full-width">
                <div className="footer-text">
                    <span>1-098-123-4567</span>
                </div>
                <div className="footer-text">
                    <span>info@basislending.com</span>
                </div>
                <div className="footer-text">
                    <span>2023 ©BasisLending</span>
                </div>
                <div className="footer-text">
                    <span>All rights reserved.</span>
                </div>
                <div className="footer-text">
                    <span>Term of Service Privacy Policy</span>
                </div>
            </div>
	    </div>
    );
}