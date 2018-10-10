import React from 'react';

import './Gallery.css';
import GalleryImage from './GalleryImage';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="galleryImages">
        {Object.values(images).map((image, index) => (
          <GalleryImage key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;