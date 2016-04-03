import React from 'react';
import Style from './index.scss';

const Test = React.createClass({

  render: function () {
    return (
      <div>
        <button onClick={this.props.handleClick}>点我</button>
        <h1 className={Style.demo}>测试组件</h1>
      </div>
    );
  }
});

module.exports = Test;