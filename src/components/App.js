import React, { Component, Fragment } from 'react';

// Components
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
