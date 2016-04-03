import React from 'react';
import './index.scss';

const Test = React.createClass({

  render: function () {
    return (
      <div>
        <h1 className="demo">测试组件</h1>
      </div>
    );
  }
});

module.exports = Test;