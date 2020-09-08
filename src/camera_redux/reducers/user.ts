import {combineReducers } from 'redux'
import api from './request/user'

function user(state = {}, action: any){
  switch(action.type){
    default:
      return state
  }
}

export default  combineReducers({
  user,
  api
})