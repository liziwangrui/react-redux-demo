import React from 'react';  // eslint-disable-line no-unused-vars
import {Router, Route, Redirect} from 'react-router';  // eslint-disable-line no-unused-vars
import Index from './containers/index';
import Layout from './containers/layout';


module.exports = (function (history) {
  if (history) {
    history = {history: history};
  }
  return (
    <Router {...history}>
      <Route path='/' component={Layout}>
        <Route path='/:practiceId' component={Index}/>
        <Redirect from='*' to='/'/>
      </Route>
    </Router>
  );
});