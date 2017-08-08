import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';

const config = {
  apiKey: "__API_KEY__",
  authDomain: "__AUTH_DOMAIN__",
  databaseURL: "__DB__",
  projectId: "__ID__",
  storageBucket: "__STORAGE__",
  messagingSenderId: "__MSG__"
};
firebase.initializeApp(config);

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
