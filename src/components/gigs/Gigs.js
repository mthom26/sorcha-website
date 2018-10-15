import React from 'react';

import './Gigs.css';
import GigEntry from './GigEntry';
import PageHeader from '../PageHeader';

const splitData = (data) => {
  // Split data from contentful into blocks by month and year
  // Each entry date should be of the form DD-MM-YYYY for this to work properly  
  const dataObj = data.allContentfulGig.edges.reduce((acc, cur) => {
    // objDate should look like YYYY-MM
    const objDate = cur.node.date.slice(3, 10).split('-').reverse().join('-');

    acc[objDate]
      ? acc[objDate].entries.push(cur.node)
      : acc[objDate] = { entries: [cur.node] };

    return acc;
  }, {});
  
  /* 
    returned object should look like
    {
      YYYY-MM: {
        entries: [ ...entries ]
      },
      ...other_date_blocks
    }
  */
  return dataObj;
};

const Gigs = ({ data }) => {
  const dataFormatted = splitData(data);
  console.log(dataFormatted);
  return (
    <div>
      <PageHeader title="Gigs" classes="gigsHeader" />
      {Object.entries(dataFormatted).map((entry, index) => {
        return (
          <div key={index}>
            <h2>{entry[0]}</h2>
            {entry[1].entries.map(gig => (
              <GigEntry key={gig.date} date={gig.date} address={gig.address} />
            ))}
          </div>
        )
      })}
    </div>
  );
};

export default Gigs;