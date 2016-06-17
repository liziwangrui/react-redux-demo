import {combineReducers} from 'redux';
import number from './number_reducer';

// 组合reducers
var rootReducer = combineReducers({
  number:number
});

module.exports = rootReducer;

/*
* 真正开发的时候State会设计到很多功能
*
* 所以我们把Reducer拆分成多个Reducer
*
* 每个Reducer －－－只处理它管理的那部分State数据
* 所以 建立这个root_reducers.js文件
*
* Redux提供了combinReducers（）方法专门来管理这些小的reducer
*
* 当使用到combinReducers() 就会把把所有的子reducer
* 子reducer 会根据action.type 匹配操作
* 因为执行的是所有的Redux  if 两个Reducer函数的action.type  ｛都匹配成功｝
*
*
*
*
*
* */