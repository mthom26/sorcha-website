import React from 'react';

const UpcomingGigs = ({ gigs }) => {
  return (
    <div>
      <h2>Upcoming Gigs</h2>
      {gigs.map(({ node }) => {
        const gigDate = Date.parse(node.date);
        const now = Date.now();
        if(gigDate > now) {
          return (
            <div>
              <p>{node.date}</p>
              <p>{node.address}</p>
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