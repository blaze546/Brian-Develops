import React from 'react';

const CustomFooter = () => {
  return (
    <footer>
      <p>
        &copy; <h1>Created for</h1>
        <a href="https://www.briandevelops.com/" target="_blank" rel="noreferrer"style={{ color: '#F3D75B' }}>
            <span><h1>Brian Develops</h1></span><i className="fab fa-free-code-camp" style={{ color: '#F3D75B' }}></i>
        </a>
      </p>
    </footer>
  );
};

export default CustomFooter;