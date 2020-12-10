import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'
import { getTask } from '../thunks'
import { EntityNames } from '../types'
import { Task, TaskStub } from '../workspace/types'
import { getCurrentWorkspace } from '../workspace/workspaceSlice'

export const taskAdapter = createEntityAdapter<Task | TaskStub>({
  selectId: (user) => user._id
})

const tasksSlice = createSlice({
  name: EntityNames.workspaces,
  initialState: taskAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentWorkspace.fulfilled, (state, action) => {
      const {
        payload: { entities }
      } = action
      taskAdapter.upsertMany(state, entities.tasks)
    })
    builder.addCase(getTask.fulfilled, (state, action) => {
      const {
        payload: {
          entities: { tasks },
          result
        }
      } = action
      taskAdapter.upsertOne(state, tasks[result])
    })
  }
})

export const taskSelectors = taskAdapter.getSelectors(
  (state: RootState) => state.tasks
)

export default tasksSlice.reducer
