import React from 'react';

import './Gallery.css';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalIndex: 0
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        <h1>Gallery</h1>
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
        {modalOpen && (
          <GalleryModal
            closeModal={this.closeModal}
            image={Object.values(images)[modalIndex]}
          />
        )}
      </div>
    );
  }
};

export default Gallery;