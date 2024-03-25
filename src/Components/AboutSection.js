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
        <p> put text into a seperte box that i can size with a max width attribute
        As a passionate web developer and designer, I thrive on crafting unique digital experiences that captivate and engage users. From conceptualization to execution, I relish the challenge of turning ideas into visually stunning and functional websites. 
         If something goes awry, you can count on me to roll up my sleeves and fix it promptly, ensuring seamless user experiences at all times.
        </p>
        <p>
        Beyond the screen, I find inspiration and joy in various pursuits. Whether it's crafting compelling narratives through writing, diving into immersive gaming worlds, cheering on Barcelona in heart-pounding matches, or embarking on adventures with loved ones, I believe in embracing every moment with creativity and enthusiasm.
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