import { ActionTypes } from '../types'
import { signupSuccessObject } from './types'

export interface userLoadingAction {
  type: ActionTypes.userLoading
}

export interface addUserAction {
  type: ActionTypes.addUser
  payload: signupSuccessObject
}

export interface failedRequest {
  type: ActionTypes.failedRequest
}

export interface confirmEmailAction {
  type: ActionTypes.confirmEmail
  payload: signupSuccessObject
}
