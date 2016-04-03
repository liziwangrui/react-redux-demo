import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../action/root_action';


const Search = React.createClass({

  render: function () {

    return (
      <h1>page1</h1>
    );
  }
});


function select(state) {

  return {
    search: state.number,
    actions: actions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

module.exports = connect(select, mapDispatchToProps)(Search);




