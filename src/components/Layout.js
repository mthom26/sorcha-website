import React, { Fragment } from 'react';

import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;