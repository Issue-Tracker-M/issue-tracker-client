import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchTask, patchTask } from '../thunks'
import { EntityNames } from '../types'
import { Comment } from '../workspace/types'

export const commentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment._id
})

const tasksSlice = createSlice({
  name: EntityNames.comments,
  initialState: commentAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTask.fulfilled, (state, { payload: { entities } }) => {
      if (entities.comments) commentAdapter.upsertMany(state, entities.comments)
    })
    builder.addCase(patchTask.fulfilled, (state, { payload: { entities } }) => {
      if (entities.comments) commentAdapter.upsertMany(state, entities.comments)
    })
  }
})

export default tasksSlice.reducer
