import React from 'react';

const AboutSection = () => {
  return (
    <section id="about">
    <section className="bigabout">
      <section className="aboutfirst">
        <h1 className="sectionTitle">About</h1>
        <p className="aboutsoftware">
          <b>I am a Software Engineer</b>
          <br />
          based in Boston, MA
        </p>
        <p>
        Welcome to my digital haven! I'm a devoted web developer and designer, driven by the art of creating engaging online experiences. From inception to realization, I thrive on turning ideas into visually stunning and functional websites. With a commitment to seamless user interaction, I'm always prepared to tackle any challenges that arise.
        </p>
        <p>
        Beyond the screen, I believe in embracing every moment with creativity and enthusiasm. I find joy in writing, gaming, supporting Barcelona, and embarking on exciting adventures with loved ones. 
        </p>
      </section>

      <section className="aboutsecond">
        <img src="Spring2024.jpeg" alt="Brian Develops Headshot" />
      </section>

      <section className="connectButton">
        <button className="buttonfix">
          <a href="#contact">
            <b>Contact Me</b>
          </a>
        </button>
      </section>
    </section>
  </section>
);
};

export default AboutSection;