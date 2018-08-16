import React from 'react';

// Components
import SkillIcon from './SkillIcon.js';
import SectionHeader from '../SectionHeader.js';

const SkillList = () => (
  <section>
    <SectionHeader title={"Skills"} />

    <div className="skill__list-container">
      <SkillIcon
        type={"ruby"}
        level={5}
      />
      <SkillIcon
        type={"rails"}
        level={4}
      />
      <SkillIcon
        type={"javascript"}
        level={5}
      />
      <SkillIcon
        type={"css3"}
        level={5}
      />
      <SkillIcon
        type={"html5"}
        level={5}
      />
      <SkillIcon
        type={"react"}
        level={5}
      />
      <SkillIcon
        type={"git"}
        level={5}
      />
      <SkillIcon
        type={"github"}
        level={5}
      />
      <SkillIcon
        type={"heroku"}
        level={3}
      />
      <SkillIcon
        type={"jquery"}
        level={5}
      />
      <SkillIcon
        type={"mysql"}
        level={3}
      />
      <SkillIcon
        type={"postgresql"}
        level={3}
      />
      <SkillIcon
        type={"linux"}
        level={3}
      />
      <SkillIcon
        type={"sass"}
        level={4}
      />
      <SkillIcon
        type={"vim"}
        level={2}
      />
      <SkillIcon
        type={"wordpress"}
        level={2}
      />
      <SkillIcon
        type={"travis"}
        level={3}
      />
      <SkillIcon
        type={"webpack"}
        level={2}
      />
      <SkillIcon
        type={"slack"}
        level={5}
      />
      <SkillIcon
        type={"ssh"}
        level={3}
      />
    </div>
  </section>
);

export default SkillList;
