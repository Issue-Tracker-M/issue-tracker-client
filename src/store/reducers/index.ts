import { combineReducers } from 'redux'
import { userReducer } from '../user/userReducer'
import { signupSuccessObject } from '../user/types'

export interface StoreState {
  user: signupSuccessObject
}

export const rootReducer = combineReducers({
  user: userReducer
})
