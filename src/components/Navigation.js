import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className='navigation__wrapper'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/resume">Resume</NavLink>
    <NavLink to="/skills">Skills</NavLink>
    <NavLink to="/projects">Projects</NavLink>
  </nav>
);

export default Navigation;
