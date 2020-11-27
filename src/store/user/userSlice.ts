import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Axios from 'axios'
import { baseUrl } from '../../config'
import { setToken } from '../../helpers'
import { loginCredentials, succesfullAuthObject, User } from './types'

const initialState: User = {
  email: '',
  _id: '',
  username: '',
  workspaces: [],
  first_name: '',
  last_name: ''
}
// This creates an async action creator which later can be used like regular action
export const authenticate = createAsyncThunk(
  'user/authenticate',
  async (credentials: loginCredentials) => {
    const res = await Axios.post<succesfullAuthObject>(
      `${baseUrl}/auth/login`,
      credentials
    )
    setToken(res.data.token)
    return res.data.user
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
    return res.data.user
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<Partial<User>>) {
      // this one just merges whatever updates you want into the user state
      return { ...state, ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state, action) => {
      // This one is passed as an example, if you don't want to do anything with the dispatched action you can just leave it out of the reducer
    })
    builder.addCase(authenticate.fulfilled, (state, action) => {
      // here, because i'm expecting the payload to have a whole new user object, i'm returning that as the new state
      return action.payload
    })
    // I'm not including authenticate.rejected, because it doesn't affect the state in any way.
    builder.addCase(confirmEmail.fulfilled, (state, action) => {
      return action.payload
    })
  }
})
/* returns an object that look like this: 
{
  name: "user",
  reducer: (state, action) => newState,
  actions: {
    authenticateUserSucccess: (payload) => ({type: "user/authenticateUserSucccess", payload})
    authenticateUserFailed: (payload) => ({type: "user/authenticateUserFailed", payload})
    updateUser: (payload) => ({type: "user/updateUser", payload})
  },
  caseReducers: {
    authenticateUserSucccess: (state, action) => newState,
    authenticateUserFailed: (state, action) => newState,
    updateUser: (state, action) => newState,
  }
} */
export const { updateUser } = userSlice.actions

export default userSlice.reducer
