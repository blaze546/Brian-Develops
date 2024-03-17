import React from 'react';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="welcomesection">
      <h1>Brian Alexandre</h1>
      <h2>Software Developer</h2>
      <p>Welcome to my space on the internet, Please take a look around!</p>
      <section>
        <button className="buttonFix">
          <a href="#about">
            <b>Need a Developer</b>
          </a>
        </button>
        <button className="buttonFix">
          <a href="#projects">
            <b>Need a Site</b>
          </a>
        </button>
      </section>
    </section>
  );
};

export default WelcomeSection;
