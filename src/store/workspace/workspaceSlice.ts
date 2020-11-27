import { createSlice } from '@reduxjs/toolkit'
import { Workspace } from './types'

const initialState: Workspace | null = null

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    /* TODO */
  }
})

export default workspaceSlice.reducer
