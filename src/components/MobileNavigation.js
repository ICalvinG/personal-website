import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavigation = () => (
  <nav className='mobile-navigation__wrapper'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/resume">Resume</NavLink>
    <NavLink to="/skills">Skills</NavLink>
    <NavLink to="/projects">Projects</NavLink>
  </nav>
);

export default MobileNavigation;
