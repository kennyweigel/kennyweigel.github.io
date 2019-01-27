import React from 'react';
import headshot from '../images/kenny-weigel-wood-bg-cropped.jpg';
import './Header.css';

const Header = () => (
  <header>
    <img src={headshot} alt="Kenny Weigel" />
    <h1>Kenny Weigel</h1>
    <h2>Software Engineer, Portsmouth NH</h2>
  </header>
);

export default Header;
