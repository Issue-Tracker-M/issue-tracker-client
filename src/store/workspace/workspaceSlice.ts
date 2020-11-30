import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Workspace } from './types'
import { baseUrl } from '../../config'

const initialState: Workspace | null = null

// export const getWorkSpaces = () => {
//   return async (dispatch: Dispatch) => {
//     dispatch<workspacesLoadingAction>({
//       type: ActionTypes.workspacesLoading
//     })
//     try {
//       const response = await axiosWithAuth().get(`${baseUrl}/workspaces/`)
//       dispatch<getWorkspacesAction>({
//         type: ActionTypes.getWorkspaces,
//         payload: response.data
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    /* TODO */
  }
})

export default workspaceSlice.reducer
