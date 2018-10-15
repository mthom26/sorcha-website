import React from 'react';

import GigEntry from './GigEntry';

const Gigs = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Gigs</h1>
      {data.allContentfulGig.edges.map((gig, index) => (
        <GigEntry key={index} date={gig.node.date} address={gig.node.address} />
      ))}
    </div>
  );
};

export default Gigs;