import {actionCreator} from 'redux-action-utils';
import ActionTypes from '../constants/action_types';

exports.add = actionCreator(ActionTypes.ADD, 'state');
