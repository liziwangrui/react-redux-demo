import React from 'react';
import {connect} from 'react-redux';
import Test from '../components/test/index';  // eslint-disable-line no-unused-vars
import {mapStateToProps, mapDispatchToProps} from '../mixin/bind';


const Index = React.createClass({
  handleClick: function () {
    this.props.numberActions.add();
  },

  handleDel: function () {
    this.props.numberActions.del();
  },

  render: function () {
    return (
      <div>
        <h1>练习ID:{this.props.params.practiceId}</h1>
        <Test handleClick={this.handleClick} handleDel={this.handleDel} />
        <h1>{this.props.number.data}</h1>
      </div>
    )
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);

/*
* connect 会把State和dispatch转换成props传递给子组件。
* 如上面的写法 ：
*  需要传递两个参数 （其实是三个参数 第三个省略了 ）还有一个React组件
*
*  然后就进行了一些黑魔法 把[[[[State 和 dispatch转换成props传递到React组件上]]]]]返回给我们使用
*   让我们看看 如何用的黑魔法 ： －－>  mixin/bind.js
*
*
*
* */




