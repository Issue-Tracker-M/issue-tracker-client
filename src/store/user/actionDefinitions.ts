import { ActionTypes } from '../types'
import { signupSuccessObject } from './types'
import { getWorkspacesObject } from '../../interfaces/workSpaceInterfaces'

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

export interface workspacesLoadingAction {
  type: ActionTypes.workspacesLoading
}

export interface addWorkspaceAction {
  type: ActionTypes.createWorkspace
  payload: getWorkspacesObject
}

export interface getWorkspacesAction {
  type: ActionTypes.getWorkspaces
  payload: getWorkspacesObject[]
}
