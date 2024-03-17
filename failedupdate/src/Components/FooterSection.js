import React from 'react';

const FooterSection = () => {
  return (
    <section id="Footer" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/brian.alexander.79677"
          target="_blank"
          className="btn contact-details"
        >
          <i className="fab fa-facebook-square"></i> Facebook
        </a>
        <a
          id="profile-link"
          href="https://github.com/blaze546"
          target="_blank"
          className="btn contact-details"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://twitter.com/850Alexandre"
          target="_blank"
          className="btn contact-details"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a
          href="mailto:brianalexandre006@yahoo.com"
          className="btn contact-details"
        >
          <i className="fas fa-at"></i> Email
        </a>
        <a href="tel:617-213-0194" className="btn contact-details">
          <i className="fas fa-mobile-alt"></i> Call me
        </a>
      </div>
    </section>
  );
};

export default FooterSection;
