import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { workspaceReducer } from './workspace/workspaceReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  workspaceDisplay: workspaceReducer
})

export type RootState = ReturnType<typeof rootReducer>