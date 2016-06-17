import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import thunkMiddleware from 'redux-thunk';

var createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

var store = createStoreWithMiddleware(rootReducer);

module.exports = store;


/*
* 创建store
*
* let store = createStore(rootReducers, initialState);
*  store有四个方法
*  ｛
*    1 getState() ---获取当前的State
*    2 subscribe()--添加一个变化的监听器
*    3 dispatch() －－分发action   修改State
*    4 replaceReducer --替换 store 当前用来处理 state 的 reducer
*  ｝
*
*
*  --> index.js
*
*
*
*
* */