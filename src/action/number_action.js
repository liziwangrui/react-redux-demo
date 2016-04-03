import {actionCreator} from 'redux-action-utils';
import types from '../constants/action_types';

exports.addTag = actionCreator(types.ADD_TAG, 'state');
