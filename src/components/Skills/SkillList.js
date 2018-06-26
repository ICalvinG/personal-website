import React, { Fragment } from 'react';

// Components
import SkillIcon from './SkillIcon.js';

const SkillList = () => (
  <Fragment>
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
  </Fragment>
);

export default SkillList;
