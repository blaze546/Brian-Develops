import React, { useState, useEffect } from 'react';
import './animations.css'; // Import the CSS file for animations

const WelcomeSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <section id="welcome" className={`welcomesection ${animate ? 'slide-in' : ''}`}>
      <h1>Brian Alexandre</h1>
      <h2>Software Engineer</h2>
      <p>Step into the digital realm where innovation meets precision. Welcome to a world where your vision is transformed into extraordinary digital experiences!</p>
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


