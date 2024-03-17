import React, { useState, useEffect } from 'react';
import './animations.css'; // Import the CSS file for animations

const InfoSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <section id="info" className={`info-section ${animate ? 'slide-in' : ''}`}>
      <section>
        <h2 className="sectionTitle">"Websites Designed with Care & Precision"</h2>
        <p>
          My specialty is working with small businesses to create the website they’ve dreamed about.
          Over the last two years, I’ve learned that every business is special and needs a website that reflects that.
          Let’s create the website of your dreams together.
        </p>
      </section>
    </section>
  );
};

export default InfoSection;

