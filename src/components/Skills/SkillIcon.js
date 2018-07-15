import React from 'react';
import PropTypes from 'prop-types';

// Components
import SkillLevel from './SkillLevel.js';

const SkillIcon = ({ type, level }) => (
  <div className="skill__icon-container">
    <i className={`devicon-${type}-plain skill__icon`}></i>
    <SkillLevel level={level} />
  </div>
);

SkillIcon.propTypes = {
  type:   PropTypes.string.isRequired,
  level:  PropTypes.number.isRequired,
};

export default SkillIcon;
