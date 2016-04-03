import React from 'react';
import './index.scss';

const Test = React.createClass({

  render: function () {
    return (
      <div>
        <button onClick={this.props.handleClick} className="demo">点我</button>
      </div>
    );
  }
});

module.exports = Test;