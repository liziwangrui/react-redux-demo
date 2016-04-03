import {combineReducers} from 'redux';
import number from './number_reducer';
import practice from './practice_reducer';

// 组合reducers
var rootReducer = combineReducers({
  number,
  practice
});

module.exports = rootReducer;
