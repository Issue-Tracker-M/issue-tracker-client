import { Dispatch } from 'redux'
import { createWorkspaceObject } from '../interfaces/workSpaceInterfaces'
import {
  workspacesLoadingAction,
  addWorkspaceAction,
  getWorkspacesAction
} from '../store/user/actionDefinitions'
import { axiosWithAuth } from '../utils/withAuth'
import { baseUrl } from '../config'
import { ActionTypes } from '../store/types'

export const createWorkspace = (workspace: createWorkspaceObject) => {
  return async (dispatch: Dispatch) => {
    dispatch<workspacesLoadingAction>({
      type: ActionTypes.workspacesLoading
    })
    try {
      const response = await axiosWithAuth().post(
        `${baseUrl}/workspaces/`,
        workspace
      )
      dispatch<addWorkspaceAction>({
        type: ActionTypes.createWorkspace,
        payload: { _id: response.data._id, name: response.data.name }
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const getWorkSpaces = () => {
  return async (dispatch: Dispatch) => {
    dispatch<workspacesLoadingAction>({
      type: ActionTypes.workspacesLoading
    })
    try {
      const response = await axiosWithAuth().get(`${baseUrl}/workspaces/`)
      dispatch<getWorkspacesAction>({
        type: ActionTypes.getWorkspaces,
        payload: response.data
      })
    } catch (err) {
      console.log(err)
    }
  }
}
