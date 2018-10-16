import React from 'react';

import './Gigs.css';
import GigEntry from './GigEntry';
import PageHeader from '../PageHeader';

const Gigs = ({ data }) => {
  const dataFormatted = splitData(data);
  //console.log(dataFormatted);
  return (
    <div>
      <PageHeader title="Gigs" classes="gigsHeader" />
      {Object.entries(dataFormatted).map((entry, index) => {
        return (
          <div className="gigBlock" key={index}>
            <h2>{formatBlockDate(entry[0])}</h2>
            <hr />
            <div className="gigEntries">
              {entry[1].entries.map(gig => (
                <GigEntry
                  key={gig.date}
                  date={gig.date}
                  address={gig.address}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Gigs;

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

const formatBlockDate = (dateString) => {
  // Should receive a string of the form YYYY-MM
  const arr = dateString.split('-');
  switch(arr[1]) {
    case '01':
      return `January ${arr[0]}`;
    case '02':
      return `February ${arr[0]}`;
    case '03':
      return `March ${arr[0]}`;
    case '04':
      return `April ${arr[0]}`;
    case '05':
      return `May ${arr[0]}`;
    case '06':
      return `June ${arr[0]}`;
    case '07':
      return `July ${arr[0]}`;
    case '08':
      return `August ${arr[0]}`;
    case '09':
      return `September ${arr[0]}`;
    case '10':
      return `October ${arr[0]}`;
    case '11':
      return `November ${arr[0]}`;
    case '12':
      return `December ${arr[0]}`;
  };
};