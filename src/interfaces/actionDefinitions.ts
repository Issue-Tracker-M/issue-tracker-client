import { ActionTypes } from '../redux/types'
import { signupSuccessObject } from '../interfaces/signupInterfaces'

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
