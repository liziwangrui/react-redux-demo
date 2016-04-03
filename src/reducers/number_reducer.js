var ActionTypes = require('../constants/ActionTypes');

function number(state, action) {
  if (!state) {
    state = 0;
  }
  switch (action.type) {
    case ActionTypes.ADD_TAG:
      return state + 1;
    default :
      return state;
  }
}

module.exports = number;
