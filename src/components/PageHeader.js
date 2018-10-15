import React from 'react';

import './PageHeader.css';

const PageHeader = ({ title, classes }) => {
  return (
    <div className={`pageHeader ${classes}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeader;
