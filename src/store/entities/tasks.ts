import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'
import { fetchTask, patchTask } from '../thunks'
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
    builder.addCase(
      getCurrentWorkspace.fulfilled,
      (state, { payload: { entities } }) => {
        taskAdapter.upsertMany(state, entities.tasks)
      }
    )
    builder.addCase(fetchTask.fulfilled, (state, { payload: { entities } }) => {
      taskAdapter.upsertMany(state, entities.tasks)
    })
    builder.addCase(patchTask.fulfilled, (state, { payload: { entities } }) => {
      taskAdapter.upsertMany(state, entities.tasks)
    })
  }
})

export const taskSelectors = taskAdapter.getSelectors(
  (state: RootState) => state.tasks
)

export default tasksSlice.reducer
