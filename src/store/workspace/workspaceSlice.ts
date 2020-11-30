import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Workspace } from './types'
import { baseUrl } from '../../config'
import { axiosWithAuth } from '../../utils/withAuth'

const initialState: Workspace | null = null

  // current_workspace{
  //   name
  //   admin
  //   users:[_id, name]
  //   labels:[{_id, name, color}]
  //   todo:[{_id, name, labels:[id]}]
  //   in_progress:[task]
  //   completed:[task]
  // }

  export const getCurrentWorkspace = createAsyncThunk(
    'workspace/getCurrentWorkspace',
    async (id: string | number) => {
      const res = await axiosWithAuth().get(`${baseUrl}/workspaces/${id}`)
      return res.data
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
  }
})

export default workspaceSlice.reducer
