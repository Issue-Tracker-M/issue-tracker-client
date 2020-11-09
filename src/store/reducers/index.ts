import { combineReducers } from 'redux'
import { userReducer } from '../user/userReducer'
import { signupSuccessObject } from '../user/types'
import { workspacesReducer } from '../workspace/workspaceReducer'
import { getWorkspacesObject } from '../../interfaces/workSpaceInterfaces'

export interface StoreState {
  user: signupSuccessObject
  workspaces: getWorkspacesObject[]
}

export const rootReducer = combineReducers({
  user: userReducer,
  workspaces: workspacesReducer
})
