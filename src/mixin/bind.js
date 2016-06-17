import {bindActionCreators} from 'redux';
import actions from '../action/root_action';


const mapStateToProps = (state) => ({
  number: state.number
});

const mapDispatchToProps = (dispatch) => ({
  numberActions: bindActionCreators(actions.number, dispatch)
});

module.exports = {
  mapStateToProps,
  mapDispatchToProps
};


/*
* mapStateToProps 只是一个普通函数
*
*被connect调用的时候会为它传递一个参数state
*
* 这个函数做的事情 ：
*   返回需要传递给子组件的State
*   返回需要传递给子组件的State
*   返回需要传递给子组件的State
*      -----重要的事情说三遍
*
* 然后connect拿到返回的数据写入到react组件中 然后组件中就可以通过props读取数据了
*
*  也就是我们看到的
*const mapStateToProps = (state) => ({
 number: state.number
 });

 拿我怎么知道 state.number ??
   因为创建store 里面创建创建数据的时候 createStore(rootReducer)
    所以rootReducer里面的数据结构 就决定了State的数据结构
 为什么要这样写
 因为state是全局State，里面包含整个项目的所有State，
 但是我不需要拿到所有State，我只拿到我需要的那部分State即可，所以需要返回 state.list 传递给组件
*
* */


/*
* mapDispatchToProps: 也只是一个普通的函数
* 同样也是 connect被调用的时候 会为它传递一个参数dispatch
*  [[[mapDispatchToProps（）只负责返回一个dispatchProps ]]]
*
*     dispatchProps ---是actionCreator的key和dispatch(action)的组合。
*     长这样：^_^
*      {
*       add: () => dispatch(action)
*      }
*   通俗一点讲就是 ：
*       actionCreator变成方法赋值到props
*       每当调用这个方法就可以更新State
*
*  但是上面的函数不是这样写的对不对  不要着急吗？？？
*      bindActionCreators
*    用这个原因是因为有很多个action 总不能手动的一个个的加
*    所以Redux提供了一种方法叫bindActionCreatores
*   bindActionCreators 的作用就是将 Actions 和 dispatch 组合起来生成 mapDispatchToProps 需要生成的内容。
*   它做的事是 ：
*     组件调用这个numberActions.add（） 差不多就＝＝store.dispatch（） 然后调用reducer 改变state
*   不过还是没有懂啊 ？？
*   官网文档http://cn.redux.js.org/docs/api/bindActionCreators.html
* */