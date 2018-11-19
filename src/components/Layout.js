import React, { Fragment } from 'react';

import '../reboot.css';
import '../index.css';

import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children, locale, localeData }) => {
  return (
    <Fragment>
      <Nav localeData={localeData} locale={locale} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;