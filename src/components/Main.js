import React from 'react';

// Import Landing Photo
import landing from '../assets/images/landing.jpg'

const Main = () => (
  <section>
    <img src={landing} alt='landing' className='landing__photo'/>
  </section>
);

export default Main;
