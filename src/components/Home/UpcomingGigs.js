import React from 'react';

import { formatDate } from '../../utils';

import './UpcomingGigs.css';
import '../gigs/GigEntry.css';

const UpcomingGigs = ({ gigs, localeData }) => {
  const gigsToRender = gigs.filter(({ node }) => {
    const gigDate = Date.parse(node.date);
    const now = Date.now();
    return gigDate > now;
  });
  
  return (
    <div className="upcomingGigs">
      <h2>{localeData.title}</h2>
      <hr />
      {gigsToRender.length > 0
        ? gigsToRender.reverse().map(({ node }) => (
          <div key={node.date} className="gigEntry">
            <span>{formatDate(node.date)}</span> <span>{node.address}</span>
          </div>
        ))
        : (
          <div className="gigEntry">
            <p>No upcoming gigs!</p>
          </div>
        )
      }
    </div>
  );
};

export default UpcomingGigs;