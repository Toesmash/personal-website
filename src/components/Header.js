import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header__home">
            <h2><Link to="/">TOMAS CHVALNY</Link></h2>
        </div>
        <div className="header__nav">
            <NavLink activeClassName="link--active" to="/resume">RESUME</NavLink>
            <NavLink activeClassName="link--active" to="/projects">PROJECTS</NavLink>
        </div>
    </header>
);

export default Header;