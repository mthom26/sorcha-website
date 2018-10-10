import React from 'react';
import Img from 'gatsby-image';

import './GalleryImage.css';

const GalleryImage = ({ image }) => {
  return (
    <div className="galleryImage">
      <Img style={{height: '100%'}} fluid={image.childImageSharp.fluid} />
    </div>
  );
};

export default GalleryImage;
