import { ActionFunc, DispatchFunc } from 'types/actions'
import { Client4 } from 'client'

export function login() {
  return async (dispatch: any) => {
    try {
      Client4.login('admin', 'centic.vn')
    } catch (error) {
      
    }
    let data
    return data
  }
}

export function logout() {}

export function loadMe() {}
