import React from 'react';

import kyren from './Kyrenpoe1.jpg';
import tom from './TomKarmo1.JPG';

import './team.css';
export function Team() {
    return (
        <>
            <h2>Our Team</h2>

            <div id="team" className="team">
                <div className="team-card">
                    <img src={tom} alt="Avatar" className='team-image'></img>
                    <div className='person-name'>Tom Karmo</div>
                    <div className='person-desc'>Lorem ipsum dolor sit consectetur</div>
                </div>
                <div className="team-card">
                    <img src={kyren} alt="Avatar" className='team-image'></img>
                    <div className='person-name'>Kyren Poe</div>
                    <div className='person-desc'>Lorem ipsum dolor sit consectetur</div>
                </div>
            </div>
        </>
    );
}