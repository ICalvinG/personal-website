import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SkillLevel = ({ type, level }) => (
  <Fragment>
    <i class="fas fa-code"></i>
    <i class="fas fa-code"></i>
    <i class="fas fa-code"></i>
    <i class="fas fa-code"></i>
    <i class="fas fa-code"></i>
  </Fragment>
);

SkillLevel.propTypes = {
  level:  PropTypes.number.isRequired,
};

export default SkillLevel;
