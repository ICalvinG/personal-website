import React from 'react';

// Components
import SectionHeader from '../SectionHeader.js';
import Project from '../Projects/Project.js';

const ProjectList = () => (
  <section>
    <SectionHeader title={"Projects"} />

    <div className="project__list-container">
      <Project />
      <Project />
    </div>
  </section>
);

export default ProjectList;
