import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title }) => (
  <h1 className="section-header__title">
    {title}
  </h1>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
