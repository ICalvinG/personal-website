import React, { Component } from 'react';

// Components
import Icon from './Icon.js';

class Reference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: "https://github.com/icalving",
      email: "mailto:calvinieong1118@gmail.com",
      linkedin: "https://www.linkedin.com/in/calvinieong",
    };
  }

  render() {

    const {
      github,
      email,
      linkedin,
     } = this.state;

    return (
      <div className="reference__wrapper">
        <Icon
          brand={"b"}
          type={"github"}
          link={github}
        />
        <Icon
          type={"envelope"}
          link={email}
        />
        <Icon
          brand={"b"}
          type={"linkedin-in"}
          link={linkedin}
        />
      </div>
    );
  };
};

export default Reference;
