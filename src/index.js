import React from 'react';  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';  // eslint-disable-line no-unused-vars
import store from './store/store.js';
var history = require('history').createHistory();
var router = require('./router')(history);

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);


/*
* Redux和React是独立的 没有任何关系  只是React-Redux是官方提供的一个库
*
* 用来结合Redux 和 React的模块
*
* React-Redux 提供了两个接口 Provider  connect
*Provider是一个React组件  目的是保存store 给子组件的connet 用 也就是 Provider里面的React的容器组件用
*
* ------->containers／index.js(文件夹任何一个js文件 )
*原理 ：
*
 getChildContext() {
 return { store: this.store }
 }

 constructor(props, context) {
 super(props, context)
 this.store = props.store
 }

 *先获取store，然后用 getChildContext 把store保存起来~
 *
 *
 *
*
* */