import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ brand, type }) => (
  <i className={`fa${brand ? 'b' : 's'} fa-${type} fa-3x`}></i>
);

Icon.propTypes = {
  brand:  PropTypes.string,
  type:   PropTypes.string.isRequired,
};

export default Icon;
