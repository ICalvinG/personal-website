import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/master.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
