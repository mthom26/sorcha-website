import React from 'react';

import './Footer.css';
import facebook from '../images/facebook-square.svg';
import youtube from '../images/youtube-square.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLogo">
          
        </div>
        <div className="footerContent">
          <div className="footerIcons">
            <a href="#"><img src={facebook} width="24px" alt="" /></a>
            <a href="#"><img src={youtube} width="24px" alt="" /></a>
          </div>
          <div className="footerText">2018 Sorcha Thompson</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
