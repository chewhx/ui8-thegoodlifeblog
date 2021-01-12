import React from 'react';

import brand from '../../assets/logos/brand.svg'
import facebook from '../../assets/social/facebook.svg'
import twitter from '../../assets/social/twitter.svg'
import rss from '../../assets/social/rss.svg'



const Footer = (props) => {
    return (
        <section id="footer">
            <footer>
                <div className="container">

                <img src={brand} alt="brand-logo" />
                <div className="wrapper">
                    <img src={facebook} alt="facebook-icon" />
                    <img src={twitter} alt="twitter-icon" />
                    <img src={rss} alt="rss-icon" />    
                </div>


                </div>
            </footer>            
        </section>
    )
};

export default Footer;