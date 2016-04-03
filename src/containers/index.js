var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
import { Router, Route, Link } from 'react-router';   // eslint-disable-line no-unused-vars

import Test from '../components/test/index';  // eslint-disable-line no-unused-vars

import actions from '../action/root_action';


var Index = React.createClass({

  render: function () {
    return (
      <div>
        <h1>Layout</h1>
        <Test />
        <Link to='/a'>点我na</Link>
        {this.props.children}
      </div>
    );
  }
});

function select(state) {

  return {
    search: state.search,
    actions: actions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

module.exports = connect(select, mapDispatchToProps)(Index);




