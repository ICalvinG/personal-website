import React from 'react';

// Components
import SkillIcon from './SkillIcon.js';

const SkillList = () => (
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
      level={3}
    />
    <SkillIcon
      type={"css3"}
      level={5}
    />
    <SkillIcon
      type={"html5"}
      level={5}
    />
  </div>
);

export default SkillList;
