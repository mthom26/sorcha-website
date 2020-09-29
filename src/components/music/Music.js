import React from 'react';
import Img from 'gatsby-image';

import './Music.css';
import PageHeader from '../PageHeader';

const Music = ({ data, localeData }) => {
  // console.log(data);
  const { larkinImg, movesJohnsonImg, samhuinnImg } = data;

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
            <a href={localeData.larkin.link} target="_blank" rel="noopener noreferrer">
              {localeData.larkin.linkName}
            </a>
          </div>
        </div>

        <div className="musicBand">
          <Img
            className="musicImage"
            fluid={samhuinnImg.childImageSharp.fluid}
          />
          <div className="musicContent">
            <h2>{localeData.samhuinn.title}</h2>
            <hr />
            <p>{localeData.samhuinn.content}</p>
            <a href={localeData.samhuinn.link} target="_blank" rel="noopener noreferrer">
              {localeData.samhuinn.linkName}
            </a>
          </div>
        </div>

        <div className="musicBand">
          <Img
            className="musicImage"
            fluid={movesJohnsonImg.childImageSharp.fluid}
          />
          <div className="musicContent">
            <h2>{localeData.movesJohnson.title}</h2>
            <hr />
            <p>{localeData.movesJohnson.content}</p>
            <a href={localeData.movesJohnson.link} target="_blank" rel="noopener noreferrer">
              {localeData.movesJohnson.linkName}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Music;
