import React from 'react';
import Img from 'gatsby-image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './GalleryModal.css';

const GalleryModal = ({
  closeModal,
  image,
  incrementModal,
  decrementModal,
  id
}) => {
  return (
    <div className="galleryModal">
      <div onClick={closeModal} className="galleryModalClose">Close Modal</div>
      <div onClick={incrementModal} className="galleryButton next">Next</div>
      <div onClick={decrementModal} className="galleryButton prev">Prev</div>
      <TransitionGroup className="modalImageContainer">
        <CSSTransition
          key={id}
          timeout={1000}
          classNames="modalImage"
        >
          <Img
            className="modalImage"
            style={{height: '100%'}}
            fluid={image.childImageSharp.fluid}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default GalleryModal;