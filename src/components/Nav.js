import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import './Nav.css';

import NavButton from './NavButton';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    const { navOpen } = this.state;
    const navClasses = `nav ${navOpen ? '' : 'navHidden'}`;
    
    return (
      <Fragment>
        <NavButton navOpen={navOpen} toggleNav={this.toggleNav} />
        <nav className={navClasses}>
          <div className="navContainer">
            <div className="navLogo">
              <Link to="/">Logo</Link>
            </div>
            <div className="navLinks">
              <Link className="navLink" to="#">Music</Link>
              <Link className="navLink" to="#">Gigs</Link>
              <Link className="navLink" to="/gallery">Gallery</Link>
              <Link className="navLink" to="#">Blog</Link>
              <Link className="navLink" to="#">Contact</Link>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
};

export default Nav;