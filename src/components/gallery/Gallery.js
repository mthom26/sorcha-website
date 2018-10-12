import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Gallery.css';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalIndex: 0,
      maxIndex: 3
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.incrementModalIndex = this.incrementModalIndex.bind(this);
    this.decrementModalIndex = this.decrementModalIndex.bind(this);
  }

  incrementModalIndex() {
    const { modalIndex, maxIndex } = this.state;
    if(modalIndex < maxIndex) {
      this.setState({ modalIndex: modalIndex + 1 });
    } else {
      this.setState({ modalIndex: 0 });
    }
  }

  decrementModalIndex() {
    const { modalIndex, maxIndex } = this.state;
    if(modalIndex > 0) {
      this.setState({ modalIndex: modalIndex - 1 });
    } else {
      this.setState({ modalIndex: maxIndex });
    }
  }

  openModal(index) {
    this.setState({ modalOpen: true, modalIndex: index });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    const { images } = this.props;
    const { modalOpen, modalIndex } = this.state;

    return (
      <div className="gallery">
        <div className="galleryHeader">
          <h1>Gallery</h1>
        </div>
        <div className="galleryImages">
          {Object.values(images).map((image, index) => (
            <GalleryImage
              key={index}
              openModal={this.openModal}
              index={index}
              image={image}
            />
          ))}
        </div>
        <CSSTransition
          in={modalOpen}
          unmountOnExit
          classNames="modalFade"
          timeout={300}
        >
          <GalleryModal
            closeModal={this.closeModal}
            incrementModal={this.incrementModalIndex}
            decrementModal={this.decrementModalIndex}
            image={Object.values(images)[modalIndex]}
            id={modalIndex}
          />
        </CSSTransition>
      </div>
    );
  }
};

export default Gallery;