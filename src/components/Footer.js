import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <a href="https://www.linkedin.com/in/kennyweigel/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin fa-2x" />
    </a>
    <a href="https://github.com/kennyweigel" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github fa-2x" />
    </a>
    <div>
      <small>&copy; Kenny Weigel 2019</small>
    </div>
  </footer>
);

export default Footer;
