import React from 'react';  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';  // eslint-disable-line no-unused-vars
import store from './store/store.js';
var history = require('history').createHistory();
var router = require('./router')(history);

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);