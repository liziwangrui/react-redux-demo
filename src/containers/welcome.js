import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../mixin/bind';

var Welcome = React.createClass({

  render: function () {
    return (
      <div>
        <h1>Welcome to 背单词</h1>
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Welcome);
