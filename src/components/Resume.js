import React from 'react';

// Import Resume
import resume from '../assets/images/Resume.pdf'

const Resume = () => (
  <section>
    <object
      data={resume}
      type='application/pdf'
      className='resume__object'>
    </object>
  </section>
);

export default Resume;
