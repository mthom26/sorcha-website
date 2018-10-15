import React from 'react';

const GigEntry = ({ date, address  }) => {
  return (
    <div style={{border: '1px solid cyan'}}>
      <p>{date}  --  {address}</p>
    </div>
  );
};
export default GigEntry;