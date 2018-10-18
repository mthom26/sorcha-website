import React from 'react';
import Img from 'gatsby-image';

import './Music.css';
import PageHeader from '../PageHeader';

const Music = ({ data }) => {
  console.log(data);
  const { larkinImg, vioLarkinImg } = data;

  return (
    <div>
      <PageHeader title="Music" classes="musicHeader" />
      <div className="music">
        <div className="musicBand">
          <Img
            className="musicImage"
            fluid={larkinImg.childImageSharp.fluid}
          />
          <div className="musicContent">
            <h2>Larkin</h2>
            <hr />
            <p>Blah Blah Blah...</p>
          </div>
        </div>

        <div className="musicBand">
          <Img
            className="musicImage"
            fluid={vioLarkinImg.childImageSharp.fluid}
          />
          <div className="musicContent">
            <h2>Vio Larkin</h2>
            <hr />
            <p>Blah Blah Blah...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
