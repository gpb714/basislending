import React from 'react';

import abe from './AbeClark.jpg';
import kyren from './Kyrenpoe1.jpg';
import tom from './TomKarmo1.JPG';

import './team.css';
export function Team() {
    return (
        <div className='team-section'>
            <div className = "team-header">
                <div className='team-header-text'>Meet our Team</div>
            </div>
            <div id="team" className="team">
                <div className="team-card">
                    <div className='person-name'>Tom Karmo</div>
                    <img src={tom} alt="Avatar" className='team-image'></img>

                    <div className='person-desc'>
                        Over a 17-year career helping people to finance their homes and manage their household debt, I've seen first-hand the value that having a trusted advisor can bring. With an in-depth understanding of financial and real-estate markets, I am able to provide valuable insights to my clients. Whether you are renting a home and want to break into owning property, or manage several properties and need a big-picture analysis of your portfolio, I want to be your first call. Please let me know how I can help.                
                    </div>
                </div>
                <div className="team-card">
                    <div className='person-name'>Kyren Poe</div>
                    <img src={kyren} alt="Avatar" className='team-image'></img>
                    <div className='person-desc'>
                        As a Certified Mortgage Advisor and licensed Real Estate Agent, I'm your trusted guide in the ever-evolving landscape of real estate and mortgages. With a background in Finance, I approach your mortgage as a long-term investment, ensuring you're optimally positioned now and in the future. I am committed to being your strategic partner in shaping your financial future through thoughtful mortgage management. Together, let's transform your homeownership dreams into a secure and thriving reality. Your journey to financial success begins with a trusted guide – and I am here to lead you every step of the way.                    </div>
                </div>
                <div className="team-card">
                    <div className='person-name'>Abe Clark</div>
                    <img src={abe} alt="Avatar" className='team-image'></img>
                    <div className='person-desc'>
                        I have been working in the mortgage industry since 2005 with various reputable lenders. I started out working with very large banks like Bank of America and JP Morgan Chase, but as time passed, I scaled down to smaller more customer-friendly mortgage companies.  As a Senior Loan Officer for Basis Lending, I have localized my services to just AZ and CA and have become an expert in those markets. I focus my attention on a handful of clients every month which allows me to deliver the tailored service my clients expect. Whether you are looking to purchase a home or complete a refinance, please do not hesitate to reach out to me with any questions. I am happy to help!
                    </div>
                </div>
            </div>
        </div>
    );
}