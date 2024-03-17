import React from 'react';

const ExampleCarouselImage = ({ src, text }) => {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={text}
      style={{ objectFit: 'cover', maxHeight: '400px' }}
    />
  );
};

export default ExampleCarouselImage;
