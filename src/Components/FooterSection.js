import React from 'react';

const FooterSection = () => {
  return (
    <section id="Footer" className="contact-section">
      <div className="contact-links">
        <a
          id="profile-link"
          href="https://github.com/blaze546"
          target="_blank"
          rel="noreferrer"
          className="btn contact-details"
        >
          <i className="fab fa-github fa-3x"style={{ color: '#F3D75B' }}></i>
        </a>
        <a
          href="https://twitter.com/850Alexandre"
          target="_blank"
          rel="noreferrer"
          className="btn contact-details"
        >
          <i className="fab fa-twitter fa-3x"style={{ color: '#F3D75B' }}></i>
        </a>
        <a
          href="mailto:brianalexandre006@yahoo.com"
          className="btn contact-details"
        >
          <i className="fas fa-at fa-3x"style={{ color: '#F3D75B' }}></i>
        </a>
        <a href="tel:617-213-0194" className="btn contact-details"style={{ color: '#F3D75B' }}>
          <i className="fas fa-mobile-alt fa-3x"></i> 
        </a>
      </div>
    </section>
  );
};

export default FooterSection;
