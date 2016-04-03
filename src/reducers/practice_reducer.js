/**********************************************
 * Created by liangshaofeng on 2016年4月3日
 * 处理练习相关
 **********************************************/

var ActionTypes = require('../constants/action_types');

function practice(state, action) {
  if (!state) {
    state = {
      isFetching: false,
      fetchFail: false,
      data: {}
    };
  }
  switch (action.type) {
    case ActionTypes.REQUEST_PRACTICE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActionTypes.RECEIVE_PRACTICE:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.practice
      });
    default :
      return Object.assign({}, state, {
        isFetching: false,
        data: {}
      });
  }
}

module.exports = practice;

