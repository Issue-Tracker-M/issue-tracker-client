import { ActionTypes } from '../types'
import { getWorkspacesObject } from '../../interfaces/workSpaceInterfaces'
import {
  workspacesLoadingAction,
  addWorkspaceAction,
  getWorkspacesAction
} from '../user/actionDefinitions'

const initialState: getWorkspacesObject[] = []

export const workspacesReducer = (
  state: getWorkspacesObject[] = initialState,
  action: workspacesLoadingAction | addWorkspaceAction | getWorkspacesAction
) => {
  switch (action.type) {
    case ActionTypes.createWorkspace:
      return [...state, action.payload]
    case ActionTypes.getWorkspaces:
      return action.payload
    default:
      return state
  }
}
