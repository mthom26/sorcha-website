import React from 'react';

import { formatDate } from '../../utils';

import './UpcomingGigs.css';

const UpcomingGigs = ({ gigs }) => {
  return (
    <div className="upcomingGigs">
      <h2>Upcoming Gigs</h2>
      <hr />
      {gigs.map(({ node }) => {
        const gigDate = Date.parse(node.date);
        const now = Date.now();
        if(gigDate > now) {
          const formattedDate = formatDate(node.date);
          return (
            <div className="gigEntry">
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