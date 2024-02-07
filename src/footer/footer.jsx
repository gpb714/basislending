import React from 'react';

import logo from '../header/basislending.png';
import './footer.css';
import Pdf from './Privacy Notice.pdf';

export function Footer() {
    return (
        <div id="footer" className="footer">
            {/* <hr className='footer-hr'/> */}
            <img src={logo} className='footer-image' alt="basic-lending-logo"/>
            <div className="flex">
                <div className="footer-text">
                    <span>602-463-6903</span>
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
                    <a href = {Pdf} target = "_blank" rel="noreferrer">Privacy Policy</a>
                </div>
            </div>
	    </div>
    );
}