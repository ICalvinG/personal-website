import React, { Component } from 'react';

// Components
import MobileNavigation from './MobileNavigation.js';
import Navigation from './Navigation.js';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <header>
        <i
          className="fa fa-bars header__navigation-icon"
          aria-hidden="true"
          onClick={this.showMenu}
        ></i>

        {
          this.state.showMenu
            ? (
              <div ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <MobileNavigation />
              </div>
            )
            : (
              null
            )
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
