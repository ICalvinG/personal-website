import React, { Component } from 'react';

// Components
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div id='app__wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
