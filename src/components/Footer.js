import React from 'react';
import { Link } from 'gatsby';

import './Footer.css';
import facebook from '../images/facebook-square.svg';
import youtube from '../images/youtube-square.svg';
import instagram from '../images/instagram-logo.png';
import soundcloud from '../images/soundcloud.png';

import { getPathPrefix } from '../utils';

const Footer = ({ locale }) => {
  const localePrefix = getPathPrefix(locale);

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
            <a href="https://www.facebook.com/Sorcha-Thompson-Violinist-254900392062477/" target="_blank" rel="nofollow noopener noreferrer">
              <img src={facebook} width="24px" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCfntLe4jDr-Pa1zOGa3c28Q/featured" target="_blank" rel="nofollow noopener noreferrer">
              <img src={youtube} width="24px" alt="" />
            </a>
            <a href="https://www.instagram.com/scorchviolinist/" target="_blank" rel="nofollow noopener noreferrer">
              <img src={instagram} width="24px" alt="" />
            </a>
            <a href="https://soundcloud.com/scorchviolinist" target="_blank" rel="nofollow noopener noreferrer">
              <img src={soundcloud} width="24px" alt="" />
            </a>
          </div>
          <div className="footerText">&copy; 2021 Sorcha Thompson</div>
          <Link
            className="footerText"
            to={`/${localePrefix}/impressum`}
          >
            Impressum
          </Link>
        </div>
        <div className="footerCredits">
          
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
