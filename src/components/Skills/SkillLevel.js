import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SkillLevel extends Component {

  createSkillLevelList = () => {
    let skillLevelList = []

    const { level } = this.props;

    for (let i = 0; i < level; i++) {
      skillLevelList.push(
        <i
          key={ Math.floor(Math.random() * 99999) }
          className="fas fa-code"
        >
        </i>
      );
    }
    return skillLevelList;
  }

  render() {
    return (
      <div className="skill__level-container">
        {this.createSkillLevelList()}
      </div>
    );
  };
};

SkillLevel.propTypes = {
  level:  PropTypes.number.isRequired,
};

export default SkillLevel;
