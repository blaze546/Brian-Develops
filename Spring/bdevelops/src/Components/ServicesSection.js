import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services">
      <section className="servicesintro">
        <h1 className="servicestitle">My Services</h1>
        <p>
          Great projects require methodical planning. My goal is to ensure every client’s vision exceeds expectations.
          To accomplish that, I provide the following services:
        </p>
      </section>

      <section className="services">
        <section>
          <i className="far fa-lightbulb fa-2x"></i>
          <h3>1. Consultation</h3>
          <p className="consultation">
            Our first conversation will go over your ideas, goals, and budget for the project. This service is offered at no cost.
          </p>
        </section>

        <section className="proposal">
          <i className="far fa-scroll fa-2x"></i>
          <h3>2. Proposal</h3>
          <p>
            Next, I will develop and present you a proposal based on your project's scope and budget.
            If revisions aren't required, we will begin development.
          </p>
        </section>

        <section className="development">
          <i className="far fa-code fa-2x"></i>
          <h3>3. Development</h3>
          <p>
            Now your site is being developed. The estimated time for development is dependent on each project.
            Expect to receive weekly updates on the progress of your site during this stage.
          </p>
        </section>

        <section className="launch">
          <i className="fas fa-rocket fa-2x"></i>
          <h3>4. Launch</h3>
          <p>
            Success! Your unique & customly designed website is complete and ready to share with the world!
            (Maintenance services are also available.)
          </p>
        </section>

        <button className="buttonFix">
          <a href="#contact">
            <b>Send Inquiry</b>
          </a>
        </button>
      </section>
    </section>
  );
};

export default ServicesSection;

