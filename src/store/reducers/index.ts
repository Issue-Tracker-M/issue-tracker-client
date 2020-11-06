import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { signupSuccessObject } from '../../interfaces/signupInterfaces'

export interface StoreState {
  user: signupSuccessObject
}

export const rootReducer = combineReducers({
  user: userReducer
})
