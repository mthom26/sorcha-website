import React from 'react';

import './GigEntry.css';

const GigEntry = ({ date, address  }) => {
  return (
    <div className="gigEntry">
      <span>{date}</span> <span>{address}</span>
    </div>
  );
};

export default GigEntry;