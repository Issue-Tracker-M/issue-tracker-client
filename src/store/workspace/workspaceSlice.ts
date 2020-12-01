import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Task, Workspace } from './types'
import { baseUrl } from '../../config'
import { axiosWithAuth } from '../../utils/withAuth'
import { createTaskObject } from '../../components/Board/column'

const initialState: Workspace = {
  name: '',
  admin: '',
  users: [],
  labels: [],
  todo: [],
  in_progress: [],
  completed: [],
  _id: ''
}

  interface newresponse {
    data: Pick<Task, '_id' | 'title' | 'labels'> | Task
    stage: string
  }

  export const getCurrentWorkspace = createAsyncThunk(
    'workspace/getCurrentWorkspace',
    async (id: string | number) => {
      const res = await axiosWithAuth().get(`${baseUrl}/workspaces/${id}`)
      return res.data
    }
  )

  export const createTask = createAsyncThunk(
    'workspace/createTask',
    async (task: createTaskObject) => {
      const response = await axiosWithAuth().post<Pick<Task, '_id' | 'title' | 'labels'>>(`${baseUrl}/tasks`, task)
      const newresponse: newresponse = {
        data: response.data,
        stage: task.stage
      }
      return newresponse
    }
  )

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    /* TODO */
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentWorkspace.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(createTask.fulfilled, (state, {payload}) => {
      if (payload.stage === 'todo') {
        state.todo?.push(payload.data)
      } else if (payload.stage === 'in_progress') {
        state.in_progress?.push(payload.data)
      } else {
        state.completed?.push(payload.data)
      }
    })
  }
})

export default workspaceSlice.reducer
