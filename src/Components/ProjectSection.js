import React from 'react';
import { Carousel } from 'react-bootstrap';
import ExampleCarouselImage from './ExampleCarouselImage';

const ProjectSection = () => {
  return (
    <div className="h2pb"> {/* Corrected typo: className instead of classname */}
      <h2 className="h2p">Recent Projects</h2>
      <section id="projects" className="projects-sections">
        <div className="carousel-container">
          <Carousel className="carousel">
            <Carousel.Item interval={1000}>
              <ExampleCarouselImage src="UTC.png" text="First slide" /> {/* Added space after src= */}
              <Carousel.Caption>
                <h3>Utc Nursing School</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <ExampleCarouselImage src="tactocsmall.png" text="Second slide" /> {/* Added space after src= */}
              <Carousel.Caption>
                <h3>Tactoc Consulting</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <ExampleCarouselImage src="author-page-screen.png" text="Third slide" /> {/* Added space after src= */}
              <Carousel.Caption>
                <h3>Author Page</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <ExampleCarouselImage src="Pokedex.jpg" text="Fourth slide" /> {/* Added space after src= and changed text */}
              <Carousel.Caption>
                <h3>Pokedex</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default ProjectSection;



