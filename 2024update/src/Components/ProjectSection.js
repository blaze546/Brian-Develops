import React from 'react';

const ProjectSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>

      <div className="projects-grid">
        <div className="project-cells">
          <a
            href="https://brianalexandrebooks.netlify.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="Author-Page-Screen.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Author Page
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>

        <div className="project-cells">
          <a
            href="https://utcnursingschool.org"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="UTC.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              UTC Nursing School
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>

        <div className="project-cells">
          <a
            href="https://tactocconsulting.wordpress.com/"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="Screenshot 2023-03-21 at 11.49.08 AM.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Tactoc Consulting
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>

        <div className="project-cells">
          <a
            href="https://testimonials-grid1.netlify.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="Test-Grid-snip.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Testimonials
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>

        <div className="project-cells">
          <a
            href="https://injusticecharacterselect.netlify.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="Injustice-Screenshot.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Injustice 2 Character Select
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>

        <div className="project-cells">
          <a
            href="https://blazespokedex.netlify.app"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="Pokedex-Scren.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Pokedex
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>
      </div>

      <a
        href="https://codepen.io/FreeCodeCamp/"
        className="btn btn-show-all"
        target="_blank"
      >
        Show all<i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
};

export default ProjectSection;
