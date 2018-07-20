import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="container__header">
    <div className="wrapper">
      <div className="header__bar">
        <div>
          <Link to="/">Tomas Chvalny</Link>
        </div>
        <div>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;