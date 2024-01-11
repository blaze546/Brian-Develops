import React, { useState } from 'react';

const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive((prevIsResponsive) => !prevIsResponsive);
  };

  return (
    <header>
      <img src="Brian Logo 1.png" alt="Brian's Logo" />
      <ul className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
        <li>
          <a href="javascript:void(0);" className={`icon ${isResponsive ? 'active' : ''}`} onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </a>
        </li>
        <li><a href="#welcome">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;




