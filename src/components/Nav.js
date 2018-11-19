import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import './Nav.css';
import NavButton from './NavButton';
import { getPathPrefix } from '../utils';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.transformLocalePath = this.transformLocalePath.bind(this);
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  transformLocalePath(locale, pathname) {
    if(locale === 'en') {
      return `de/${pathname}`
    } else {
      // slice '/de' off the pathname
      return pathname.slice(3);
    }
  };

  render() {
    const { navOpen } = this.state;
    const navClasses = `nav ${navOpen ? '' : 'navHidden'}`;

    const { localeData } = this.props;
    const locale = getPathPrefix(this.props.locale);
    let switchLocalePath;
    if(global.window) {
      switchLocalePath = this.transformLocalePath(
        this.props.locale,
        window.location.pathname
      );
    }
    
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
              <Link className="navLink" to={switchLocalePath}>
                {this.props.locale === 'en' ? 'German' : 'English'}
              </Link>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
};

export default Nav;