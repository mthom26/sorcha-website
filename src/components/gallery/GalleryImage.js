import React from 'react';
import Img from 'gatsby-image';

import './GalleryImage.css';

const GalleryImage = ({ image, openModal, index }) => {
  return (
    <div onClick={() => openModal(index)} className="galleryImage">
      <Img
        style={{height: '100%'}}
        fluid={image.childImageSharp.fluid}
      />
      <div className="galleryImageOverlay" />
    </div>
  );
};

export default GalleryImage;
