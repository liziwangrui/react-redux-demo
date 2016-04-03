var ActionTypes = require('../constants/action_types');

function number(state, action) {
  if (!state) {
    state = 0;
  }
  switch (action.type) {
    case ActionTypes.ADD:
      return state + 1;
    default :
      return state;
  }
}

module.exports = number;
