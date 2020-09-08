import { combineReducers } from 'redux';
import api from './request/camera'

function cameras(state = [], action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

function addCamera(state = { pending: false, error: {} }, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  cameras,
  api
});
