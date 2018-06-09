import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, size }) => (
  <i class=`fas fa-{type} fa-{size}`></i>
);

ChatPlaceholder.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Icon;
