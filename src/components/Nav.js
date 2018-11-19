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
    this.getPathPrefix = this.getPathPrefix.bind(this);
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  getPathPrefix(locale) {
    // If locale is 'en' the path should not include it
    // e.g. '/en/blog' should just return '/blog'
    if(locale === 'en') {
      return ''; //empty string
    }
    // otherwise return the locale string
    return locale;
  }

  render() {
    const { navOpen } = this.state;
    const navClasses = `nav ${navOpen ? '' : 'navHidden'}`;

    const { localeData } = this.props;
    const locale = this.getPathPrefix(this.props.locale);
    
    return (
      <Fragment>
        <NavButton navOpen={navOpen} toggleNav={this.toggleNav} />
        <nav className={navClasses}>
          <div className="navContainer">
            <div className="navLogo">
              <Link to={`/${locale}`}>Logo</Link>
            </div>
            <div className="navLinks">
              <Link className="navLink" to={`/${locale}/music`}>
                {localeData.nav.music}
              </Link>
              <Link className="navLink" to={`/${locale}/gigs`}>
                {localeData.nav.gigs}
              </Link>
              <Link className="navLink" to={`/${locale}/gallery`}>
                {localeData.nav.gallery}
              </Link>
              <Link className="navLink" to={`/${locale}/blog`}>
                {localeData.nav.blog}
              </Link>
              <Link className="navLink" to={`/${locale}/contact`}>
                {localeData.nav.contact}
              </Link>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
};

export default Nav;