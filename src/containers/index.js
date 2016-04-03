import React from 'react';
import {connect} from 'react-redux';
import Test from '../components/test/index';  // eslint-disable-line no-unused-vars
import {mapStateToProps, mapDispatchToProps} from '../mixin/bind';

const Index = React.createClass({

  handleClick: function () {
    this.props.numberActions.add();
  },

  componentDidMount: function () {
    this.props.practiceActions.fetchPractice(this.props.params.practiceId);
  },

  render: function () {

    return (
      <div>
        <h1>练习ID:{this.props.params.practiceId}</h1>
        <Test handleClick={this.handleClick}/>
        {this.props.practice.data.name}
        <h1>{this.props.number}</h1>
      </div>

    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);




