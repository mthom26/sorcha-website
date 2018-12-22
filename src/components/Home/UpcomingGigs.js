import React from 'react';

import { formatDate } from '../../utils';

import './UpcomingGigs.css';

const UpcomingGigs = ({ gigs, localeData }) => {
  return (
    <div className="upcomingGigs">
      <h2>{localeData.title}</h2>
      <hr />
      {gigs.map(({ node }) => {
        const gigDate = Date.parse(node.date);
        const now = Date.now();
        if(gigDate > now) {
          const formattedDate = formatDate(node.date);
          return (
            <div key={node.date} className="gigEntry">
              <span>{formattedDate}</span> <span>{node.address}</span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default UpcomingGigs;