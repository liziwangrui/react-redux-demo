import React from 'react';
import './index.scss';

const Test = React.createClass({

  render: function () {
    return (
      <div>
        <button onClick={this.props.handleClick} className="demo">加一</button>
        <button onClick= {this.props.handleDel} className="demo">减一</button>
      </div>
    );
  }
});

module.exports = Test;