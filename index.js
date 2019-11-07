import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";

import App from './components/App';
import store from './store/store';

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
   document.getElementById('root'));