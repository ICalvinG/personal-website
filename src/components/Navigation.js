import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className='navigation__wrapper'>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/resume">Resume</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
  </nav>
);

export default Navigation;
