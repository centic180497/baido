import {combineReducers} from 'redux'

function getNotifications(state = {pending: false, error: null}, action: any){
  switch(action.type){
    default:
      return state
  }
}

export default combineReducers({
  getNotifications
})
