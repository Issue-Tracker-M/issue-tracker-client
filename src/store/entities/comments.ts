import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchTask } from '../thunks'
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
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      const {
        payload: {
          entities: { comments }
        }
      } = action
      if (comments) commentAdapter.upsertMany(state, comments)
    })
  }
})

export default tasksSlice.reducer
