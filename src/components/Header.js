import React from 'react';

// Components
import Navigation from './Navigation.js';

const Header = () => (
  <header>
    <div className='header__title'>
      <p>Calvin C. Ieong</p>

      <div className='header__description'>
        <p>
          I am a full-stack developer and I want to be the very best,
          like no one ever was.
        </p>

        <Navigation />
      </div>
    </div>
  </header>
);

export default Header;
