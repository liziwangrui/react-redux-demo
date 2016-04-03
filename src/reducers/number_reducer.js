import ActionTypes from '../constants/action_types';

function number(state, action) {
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
    default :
      return state;
  }
}

module.exports = number;
