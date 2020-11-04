import { ActionTypes } from '../types'
import {
  getWorkspacesObject
} from '../../interfaces/workSpaceInterfaces'
import {
  workspacesLoadingAction, addWorkspaceAction
} from '../../interfaces/actionDefinitions'

const initialState: getWorkspacesObject[] = []

export const workspacesReducer = (
    state: getWorkspacesObject[] = initialState,
    action: workspacesLoadingAction | addWorkspaceAction
) => {
    switch (action.type) {
        case ActionTypes.createWorkspace:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}