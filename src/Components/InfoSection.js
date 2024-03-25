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
        <h2 className="sectionTitle">"Precision-Crafted Websites for Small Businesses & Non-Profits"</h2>
        <p>
        I specialize in designing custom websites that perfectly capture the essence of your small business or non-profit. With four years of experience, I understand the importance of creating a unique online presence. Let's collaborate to build the website you've always envisioned!
        </p>
      </section>
    </section>
  );
};

export default InfoSection;

