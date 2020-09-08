import { combineReducers } from 'redux';
import api from './request/notification';

function notifications(state = {}, action: any) {
  return state;
}

export default combineReducers({ notifications, api });
