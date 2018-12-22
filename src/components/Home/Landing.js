import React from 'react';

import './Landing.css';

const Landing = ({ localeData }) => {
  return (
    <div className="landing">
      <div className="landingContent">
        <h1>Sorcha Thompson</h1>
        <hr />
        <p>{localeData.content}</p>
      </div>
    </div>
  );
};

export default Landing;