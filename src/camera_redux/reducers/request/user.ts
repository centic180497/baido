import { combineReducers } from 'redux';

function login(state = { pending: false, error: {} }, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

function logout(state = { pending: false, error: {} }, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  login,
  logout,
});
