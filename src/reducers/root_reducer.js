import {combineReducers} from 'redux';
import number from './number_reducer';

// 组合reducers
var rootReducer = combineReducers({
  number
});

module.exports = rootReducer;