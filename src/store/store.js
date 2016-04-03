import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import thunkMiddleware from 'redux-thunk';

var createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

var store = createStoreWithMiddleware(rootReducer);

module.exports = store;