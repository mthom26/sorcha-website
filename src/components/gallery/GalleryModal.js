import React from 'react';
import Img from 'gatsby-image';

import './GalleryModal.css';

const GalleryModal = ({ closeModal, image }) => {
  console.log(image);
  return (
    <div className="galleryModal">
      <div onClick={closeModal} className="galleryModalClose">Close Modal</div>
      <div className="modalImageContainer">
        <Img
          style={{height: '100%'}}
          fluid={image.childImageSharp.fluid}
        />
      </div>
    </div>
  );
};

export default GalleryModal;