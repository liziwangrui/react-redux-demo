import React from 'react';  // eslint-disable-line no-unused-vars
import {Router, Route, Redirect} from 'react-router';  // eslint-disable-line no-unused-vars
import Page1 from './containers/page1';
import Index from './containers/index';


module.exports = (function (history) {
  if (history) {
    history = {history: history};
  }
  return (
    <Router {...history}>
      <Route path='/' component={Index}>
        <Route path='/:practiceId' component={Page1}/>
        <Redirect from='*' to='/'/>
      </Route>
    </Router>
  );
});