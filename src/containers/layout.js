import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../mixin/bind';

var Index = React.createClass({

  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);




