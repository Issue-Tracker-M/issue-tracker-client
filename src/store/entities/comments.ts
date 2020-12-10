import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getTask } from '../thunks'
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
    builder.addCase(getTask.fulfilled, (state, action) => {
      const {
        payload: {
          entities: { comments }
        }
      } = action
      commentAdapter.upsertMany(state, comments)
    })
  }
})

export default tasksSlice.reducer
