import { Dispatch } from 'redux'
import { createWorkspaceObject } from '../interfaces/workSpaceInterfaces'
import {
  workspacesLoadingAction,
  addWorkspaceAction
} from '../interfaces/actionDefinitions'
import { axiosWithAuth } from '../utils/withAuth'
import { baseUrl } from '../config'
import { ActionTypes } from '../redux/types'

export const createWorkspace = (workspace: createWorkspaceObject) => {
  return async (dispatch: Dispatch) => {
    dispatch<workspacesLoadingAction>({
      type: ActionTypes.workspacesLoading
    })
    try {
      const response = await axiosWithAuth().post(`${baseUrl}/workspaces/`, workspace)
      console.log(response)
      dispatch<addWorkspaceAction>({
        type: ActionTypes.createWorkspace,
        payload: {_id: response.data._id, name: response.data.name}
      })
    } catch (err) {
        console.log(err)
    //   dispatch<failedRequest>({
    //     type: ActionTypes.failedRequest
    //   })
    }
  }
}