import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  brand,
  type,
  link,
}) => (
  <a
    className="icon__link"
    href={link}>
    <i
      className={`fa${brand ? 'b' : 's'} fa-${type} fa-3x`}>
    </i>
  </a>
);

Icon.propTypes = {
  brand:  PropTypes.string,
  type:   PropTypes.string.isRequired,
  type:   PropTypes.string.isRequired,
};

export default Icon;
