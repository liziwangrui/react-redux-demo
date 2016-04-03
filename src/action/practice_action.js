/**********************************************
 * Created by liangshaofeng on 2016年4月3日
 * 处理跟练习相关的
 **********************************************/
import fetch from 'isomorphic-fetch';
import ActionTypes from '../constants/action_types';
import Config from '../config.js';


exports.requestPractice = function (practiceId) {
  return {
    type: ActionTypes.REQUEST_PRACTICE,
    reddit: practiceId
  };
};

exports.receivedPractice = function (practiceId, res) {
  return {
    type: ActionTypes.RECEIVE_PRACTICE,
    practiceId: practiceId,
    practice: res.data
  };
};

exports.fetchPractice = function (practiceId) {
  return function (dispatch) {
    dispatch(exports.requestPractice(practiceId));
    return fetch(Config.api + '')
      .then(res => res.json())
      .then(json =>
        dispatch(exports.receivedPractice(practiceId, json))
    );
  };
};

