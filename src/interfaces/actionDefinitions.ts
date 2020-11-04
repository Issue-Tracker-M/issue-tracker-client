import { ActionTypes } from '../redux/types'
import { signupSuccessObject } from '../interfaces/signupInterfaces'
import { getWorkspacesObject } from '../interfaces/workSpaceInterfaces'

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
