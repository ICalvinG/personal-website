import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

// Worker
import registerServiceWorker from './registerServiceWorker';

// Styling
import './assets/stylesheets/master.css';

// Components
import Reference from './components/Reference';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Footer from './components/Footer';

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
          <Route path="/resume" component={Resume} />
          <Route path="/skills" component={Skills} />
        </Switch>
        <Reference />
        <Footer />
      </div>
    </Router>,
    appElement,
  );
  registerServiceWorker();
});
