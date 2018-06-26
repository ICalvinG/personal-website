import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import SkillLevel from './SkillLevel.js';

const SkillIcon = ({ type, level }) => (
  <Fragment>
    <i class={`devicon-${type}-plain`}></i>
    <SkillLevel level={level} />
  </Fragment>
);

SkillIcon.propTypes = {
  type:   PropTypes.string.isRequired,
  level:  PropTypes.number.isRequired,
};

export default SkillIcon;
