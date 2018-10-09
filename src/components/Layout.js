import React, { Fragment } from 'react';

import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children}
    </Fragment>
  );
};

export default Layout;