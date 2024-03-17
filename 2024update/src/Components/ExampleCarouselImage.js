import React from 'react';

const ExampleCarouselImage = ({ src, text, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        className="d-block w-100"
        src={src}
        alt={text}
        style={{ objectFit: 'cover', maxHeight: '400px' }}
      />
    </a>
  );
};

export default ExampleCarouselImage;

