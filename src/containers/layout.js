import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Router, Route, Link } from 'react-router';   // eslint-disable-line no-unused-vars

import actions from '../action/root_action';


var Index = React.createClass({

  render: function () {
    return (
      <div>
        {this.props.children}
        <p>页脚</p>
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




