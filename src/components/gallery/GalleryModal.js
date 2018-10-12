import React from 'react';
import Img from 'gatsby-image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './GalleryModal.css';
import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

const GalleryModal = ({
  closeModal,
  image,
  incrementModal,
  decrementModal,
  id
}) => {
  return (
    <div className="galleryModal">
      {/* Copied from NavButton */}
      <div onClick={closeModal} className="galleryModalClose ">
        <div className={`line one open`}></div>
        <div className={`line three open`}></div>
      </div>
      <div onClick={incrementModal} className="galleryButton next">
        <img style={{width: '48px', height: '48px'}} src={arrowRight} alt="" />
      </div>
      <div onClick={decrementModal} className="galleryButton prev">
        <img style={{width: '48px', height: '48px'}} src={arrowLeft} alt="" />
      </div>
      <TransitionGroup className="modalImageContainer">
        <CSSTransition
          key={id}
          timeout={300}
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