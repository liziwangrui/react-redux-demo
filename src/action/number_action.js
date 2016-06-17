import ActionTypes from '../constants/action_types';

exports.add = (state) => ({
  type: ActionTypes.ADD,
  state
});

exports.del = (state) => ({
  type: ActionTypes.DEL,
  state
});

//action 只是一个普通对象  说明要干啥  存储数据的地方
/*
* {
*   type:ADD   -说明干的啥事
*   text:'我是闪闪'  －－ 想要操作的数据
* }
*
*但是在实际应用中 我们需要一个函数来为我们创建Action  这个函数叫做actionCreator
*
* 也就是上面我们 exports.add ＝function(){
*
*
* }
*
* */