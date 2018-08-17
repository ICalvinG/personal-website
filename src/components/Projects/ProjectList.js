import React from 'react';

// Components
import SectionHeader from '../SectionHeader.js';

const ProjectList = () => (
  <section>
    <SectionHeader title={"Projects"} />

    <div className="project__list-container">
      <div className="project__container">
        <a href="http://www.newterritoriesnyc.com/">
          New Territories
        </a>

        <p>
          A website built for a new dessert restaurant opening in the Lower
          East Side. This website utilizes Ruby on Rails for the back end
          and Materialize.css in the front end.
        </p>
      </div>
      <div className="project__container">
        <a href="https://github.com/ICalvinG/giphies">
          Giphies
        </a>

        <p>
          Application build fully in React.js that utilizes the Giphy API.
          The application takes user input and returns a random gif based on
          the input. Users are then able to copy and paste the url of the
          gif for their own personal use.
        </p>
      </div>
    </div>
  </section>
);

export default ProjectList;
