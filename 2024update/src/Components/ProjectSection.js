import React from 'react';
import { Carousel } from 'react-bootstrap';
import ExampleCarouselImage from './ExampleCarouselImage';

const ProjectSection = () => {
  return (
    <section id="projects" className="projects-sections">
      <h2 className="projects-section-header">Here are some of my projects</h2>
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage src = "UTC.png" text="First slide" />
        <Carousel.Caption>
          <h3>Utc Nursing School</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage src = "tactocsmall.png" text="Second slide" />
        <Carousel.Caption>
          <h3>Tactoc Consulting</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src = "author-page-screen.png"text="Third slide" />
        <Carousel.Caption>
          <h3>Author Page</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src = "Pokedex.jpg"text="Third slide" />
        <Carousel.Caption>
          <h3>Pokedex</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src = "Nft-Prev-Scren.Png"text="Third slide" />
        <Carousel.Caption>
          <h3>Nft Currency</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default ProjectSection;


