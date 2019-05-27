import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Gallery.css';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';
import PageHeader from '../PageHeader';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalIndex: 0,
      maxIndex: Object.keys(props.images).length - 1
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
    const { images, localeData } = this.props;
    const { modalOpen, modalIndex } = this.state;

    return (
      <div className="gallery">
        <PageHeader title={`${localeData.headerText}`} classes="galleryHeader" />
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