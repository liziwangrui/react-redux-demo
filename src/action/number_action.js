import {actionCreator} from 'redux-action-utils';
import types from '../constants/ActionTypes.js';

exports.addTag = actionCreator(types.ADD_TAG, 'state');
