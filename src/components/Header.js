import React, { Component } from 'react';

// Components
import MobileNavigation from './MobileNavigation.js';
import Navigation from './Navigation.js';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      toggleMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();

    this.setState({ toggleMenu: true }, () => {
      document.addEventListener('click', this.toggleMenu);
    });

    if (this.state.toggleMenu === true) {

      this.setState({ toggleMenu: false }, () => {
        document.removeEventListener('click', this.toggleMenu);
      });
    }
  };

  render() {
    return (
      <header>
        <i
          className="fa fa-bars header__navigation-icon"
          aria-hidden="true"
          onClick={this.toggleMenu}
        ></i>

        <h3 className="header__navigation-initials">CCI</h3>

        { this.state.toggleMenu &&
          <div ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <MobileNavigation />
          </div>
        }

        <div className='header__title'>
          <p>Calvin C. Ieong</p>

          <div className='header__description'>
            <p>
              I am a full-stack developer and I want to be the very best,
              like no one ever was.
            </p>

            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
