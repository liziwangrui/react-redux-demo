import React from 'react';  // eslint-disable-line no-unused-vars
import {Router, Route, Redirect, IndexRoute} from 'react-router';  // eslint-disable-line no-unused-vars
import Index from './containers/index';
import Layout from './containers/layout';
import Welcome from './containers/welcome';


module.exports = (function (history) {
  if (history) {
    history = {history: history};
  }
  return (
    <Router {...history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Welcome} />
        <Route path='/:practiceId' component={Index}/>
        <Redirect from='*' to='/'/>
      </Route>
    </Router>
  );
});