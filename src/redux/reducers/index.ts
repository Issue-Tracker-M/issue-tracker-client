import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { workspacesReducer } from './workspaceReducer'
import { signupSuccessObject } from '../../interfaces/signupInterfaces'
import { getWorkspacesObject } from '../../interfaces/workSpaceInterfaces'

export interface StoreState {
  user: signupSuccessObject
  workspaces: getWorkspacesObject[]
}

export const rootReducer = combineReducers({
  user: userReducer,
  workspaces: workspacesReducer
})
