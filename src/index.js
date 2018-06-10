import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

// Worker
import registerServiceWorker from './registerServiceWorker';

// Styling
import './assets/stylesheets/master.css';

// Components
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';

// - Browser history
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('root');
  if (!appElement) return;

  // Render the appElement to the DOM
  ReactDOM.render(
    <Router history={browserHistory}>
      <div id='app__wrapper'>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>,
    appElement,
  );
  registerServiceWorker();
});
