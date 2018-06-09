import React from 'react';

// Components
import Icon from './Icon.js';

const Footer = () => (
  <footer className="footer__wrapper">
    <Icon
      brand={"b"}
      type={"github"}
    />
    <Icon
      type={"envelope"}
    />
    <Icon
      brand={"b"}
      type={"linkedin-in"}
    />
  </footer>
);

export default Footer;
