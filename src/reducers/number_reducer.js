import ActionTypes from '../constants/action_types';

function count(state, action) {
  if (!state) {
    state = {
      data: 0
    };
  }
  switch (action.type) {
    case ActionTypes.ADD:
      return Object.assign({}, state, {
        data: state.data + 1
      });
    case ActionTypes.DEL:
          return Object.assign({},state,{
            data: state.data - 1
          });
    default :
      return state;
  }
}

module.exports = count;


/*
*只是一个普通的回调函数                                    currentState现在的state
* 在被Redux调用的时候？？（被redux调用）  会接受两个参数 （currentState,action ）
*
* 然后这个函数就会根据Acton.type 去对旧的state数据进行操作 返回新的state
*
* Reducer很简单，但有三点需要注意
*  不要修改 state。
*  如果没有旧的State，就返回一个initialState，这很重要！！！
*  在default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
* */