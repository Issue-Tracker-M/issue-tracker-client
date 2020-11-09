import { ActionTypes } from '../types'
import { signupSuccessObject } from './types'
import {
  addUserAction,
  userLoadingAction,
  failedRequest,
  confirmEmailAction
} from './actionDefinitions'

const initialState = {
  email: '',
  _id: '',
  username: '',
  workspaces: [],
  password: '',
  first_name: '',
  last_name: '',
  createdAt: '',
  updatedAt: '',
  _v: 0,
  loading: false
}

export const userReducer = (
  state: signupSuccessObject = initialState,
  action: addUserAction | userLoadingAction | failedRequest | confirmEmailAction
) => {
  switch (action.type) {
    case ActionTypes.userLoading:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.confirmEmail:
    case ActionTypes.addUser:
      return {
        ...action.payload,
        loading: false
      }
    case ActionTypes.failedRequest:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}