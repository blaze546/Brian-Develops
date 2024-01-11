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
            I’ve always loved being creative and solving problems. Web development and design is the perfect blend of both. I enjoy creating unique sites, and I get to fix them if anything goes wrong.
          </p>
          <p>
            When I'm not coding, I also find joy in writing, gaming, watching Barcelona games, spending time with friends & family, or traveling!
          </p>
        </section>

        <section className="aboutsecond">
          <img src="IMG_1742.jpeg" alt="Brian Develops Headshot" />
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
