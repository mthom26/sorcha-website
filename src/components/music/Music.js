import React from 'react';
import Img from 'gatsby-image';

import './Music.css';
import PageHeader from '../PageHeader';

const Music = ({ data, localeData }) => {
  console.log(data);
  const { larkinImg, vioLarkinImg, sptImg, movesJohnsonImg } = data;

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
            <a href={localeData.larkin.link}>{localeData.larkin.link}</a>
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
            <a href={localeData.vioLarkin.link}>{localeData.vioLarkin.link}</a>
          </div>
        </div>

        <div className="musicBand">
          <Img
            className="musicImage"
            fluid={sptImg.childImageSharp.fluid}
          />
          <div className="musicContent">
            <h2>{localeData.synthPopTroubadours.title}</h2>
            <hr />
            <p>{localeData.synthPopTroubadours.content}</p>
            <a href={localeData.synthPopTroubadours.link}>{localeData.synthPopTroubadours.link}</a>
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
            <a href={localeData.movesJohnson.link}>{localeData.movesJohnson.link}</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Music;
