import React from 'react';

import kyren from './Kyrenpoe1.jpg';
import tom from './TomKarmo1.JPG';

import './team.css';
export function Team() {
    return (
        <>
            <div id="team" className="team">
                <div className="team-card">
                    <div className='person-name'>Tom Karmo</div>
                    <img src={tom} alt="Avatar" className='team-image'></img>

                    <div className='person-desc'>
                        Over the past 17 years of helping people to finance their homes and manage their household debt, I have seen first-hand the value that having a trusted advisor can bring.  I work hard to be a reliable source of insight to my clients.  Whether you are renting a home and want to break into owning property, or manage several properties and need a big-picture analysis of your portfolio, I want to be your first call.  Please let me know how I can help.                    </div>
                </div>
                <div className="team-card">
                    <div className='person-name'>Kyren Poe</div>
                    <img src={kyren} alt="Avatar" className='team-image'></img>
                    <div className='person-desc'>
                        I am extremely passionate about mortgage lending and taking care of my clients. I view every client as a partner throughout the home loan process. Open communication is essential for top-tier customer service and I will be available from the time you begin the loan process well past the loan closing. I will work extremely hard on your behalf to ensure a smooth transaction for all parties involved.
                    </div>
                    <div className='person-desc-quote'>
                        “The dictionary is the only place that success comes before work. Work is the key to success, and hard work can help you accomplish anything.” -Vince Lombardi
                    </div>
                </div>
            </div>
        </>
    );
}