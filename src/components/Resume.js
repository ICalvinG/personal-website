import React from 'react';

// Import Resume
import resume from '../assets/images/Resume.pdf'

// Components
import SectionHeader from './SectionHeader.js';

const Resume = () => (
  <section>
    <SectionHeader title={"Resume"} />
    
    <object
      data={resume}
      type='application/pdf'
      className='resume__object'>
    </object>
  </section>
);

export default Resume;
