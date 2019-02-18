import React from 'react';

import './Footer.css';
import facebook from '../images/facebook-square.svg';
import youtube from '../images/youtube-square.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLogo">
          <a
            href="https://www.contentful.com/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <img src="https://images.ctfassets.net/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg" style={{ maxWidth:"100px", width:"100%" }} alt="Powered by Contentful" />
          </a>
        </div>
        <div className="footerContent">
          <div className="footerIcons">
            <a href="#"><img src={facebook} width="24px" alt="" /></a>
            <a href="#"><img src={youtube} width="24px" alt="" /></a>
          </div>
          <div className="footerText">&copy; 2018 Sorcha Thompson</div>
        </div>
        <div className="footerCredits">
          <div className="footerCreditsText footerTextSmall">Website created by <a
            href="https://www.michaelthompson.me/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
              Michael Thompson
            </a>
          </div>
          <div className="footerCreditsText footerTextSmall">Main Photo by <a
            href="https://www.facebook.com/felixlprojects/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
              Felix Limmer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
