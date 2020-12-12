import { createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
import { schema, normalize } from 'normalizr'
import { createWorkspaceObject } from '../../components/Modals/createWorkspaceModal'
import { baseUrl } from '../../config'
import { setToken } from '../../helpers'
import normalizeAuthResponse from '../../utils/normalizeAuthResponse'
import normalizeTaskResponse from '../../utils/normalizeTaskResponse'
import { axiosWithAuth } from '../../utils/withAuth'
import { EntityNames } from '../types'
import { loginCredentials, succesfullAuthObject } from '../user/types'
import { Task, Workspace, WorkspaceStub } from '../workspace/types'

// This creates an async action creator which later can be used like regular action
export const authenticate = createAsyncThunk(
  'user/authenticate',
  async (credentials: loginCredentials) => {
    const res = await Axios.post<succesfullAuthObject>(
      `${baseUrl}/auth/login`,
      credentials
    )
    setToken(res.data.token)
    return normalizeAuthResponse(res.data.user)
    /*
     */
  }
)

export const confirmEmail = createAsyncThunk(
  'user/confirmEmail',
  async (token: string) => {
    const res = await Axios.post<succesfullAuthObject>(
      `${baseUrl}/auth/confirm_email`,
      {
        token
      }
    )
    setToken(res.data.token)
    return normalizeAuthResponse(res.data.user)
  }
)

export const getWorkspaces = createAsyncThunk(
  'user/getWorkspaces',
  async () => {
    const response = await axiosWithAuth().get<WorkspaceStub[]>(
      `${baseUrl}/workspaces/`
    )
    return normalize(response.data, [
      new schema.Entity<WorkspaceStub>(
        EntityNames.workspaces,
        {},
        { idAttribute: (w) => w._id }
      )
    ])
  }
)

export const addWorkspace = createAsyncThunk(
  'user/addWorkspace',
  async (workspace: createWorkspaceObject) => {
    const response = await axiosWithAuth().post<Workspace>(
      `${baseUrl}/workspaces/`,
      workspace
    )
    return response.data
  }
)

export const fetchTask = createAsyncThunk(
  `${EntityNames.tasks}/fetchTask`,
  async (taskId: Task['_id']) => {
    const res = await axiosWithAuth().get<Task>(`${baseUrl}/tasks/${taskId}`)
    console.log(normalizeTaskResponse(res.data))
    return normalizeTaskResponse(res.data)
  }
)
