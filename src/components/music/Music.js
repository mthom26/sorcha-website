import React from 'react';
import Img from 'gatsby-image';

import './Music.css';
import PageHeader from '../PageHeader';

const Music = ({ data, localeData }) => {
  console.log(data);
  const { larkinImg, vioLarkinImg } = data;

  return (
    <div>
      <PageHeader title={`${localeData.headerText}`} classes="musicHeader" />
      <div className="music">
        <div className="musicBand">
          <Img
            className="musicImage"
            fluid={larkinImg.childImageSharp.fluid}
          />
          <div className="musicContent">
            <h2>{localeData.larkin.title}</h2>
            <hr />
            <p>{localeData.larkin.content}</p>
          </div>
        </div>

        <div className="musicBand">
          <Img
            className="musicImage"
            fluid={vioLarkinImg.childImageSharp.fluid}
          />
          <div className="musicContent">
            <h2>{localeData.vioLarkin.title}</h2>
            <hr />
            <p>{localeData.vioLarkin.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
