import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Axios from 'axios'
import { AppThunk } from '..'
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // authenticateUser is what is called a case reducer
    // It can either return the new state or mutate the given state and return nothing.
    // If it returns nothing the inner implementation makes sure that redux gets a properly updated immutable piece of state
    authenticateUserSuccess(state, action: PayloadAction<User>) {
      // Here i'm choosing to return the new User state because the payload is supposed to contain the whole user object.
      return { ...state, ...action.payload }
    },
    // this one gets dispatched when login errors out, no need to update state so it can be an empty function
    authenticateUserFailed() {},
    updateUser(state, action: PayloadAction<Partial<User>>) {
      // this one just merges whatever updates you want into the user state
      return { ...state, ...action.payload }
    }
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
export const {
  authenticateUserSuccess,
  authenticateUserFailed,
  updateUser
} = userSlice.actions

export const authenticateUser = (
  credentials: loginCredentials
): AppThunk => async (dispatch) => {
  // Here I'm choosing not to wrap the promise into trycatch so that the form where it is used can handle and display the errors.
  const res = await Axios.post<succesfullAuthObject>(
    `${baseUrl}/auth/login`,
    credentials
  )
  setToken(res.data.token)
  dispatch(authenticateUserSuccess(res.data.user))
}

export const confirmUserEmail = (token: string): AppThunk => async (
  dispatch
) => {
  const res = await Axios.post<succesfullAuthObject>(
    `${baseUrl}/auth/confirm_email`,
    {
      token
    }
  )
  setToken(res.data.token)
  dispatch(authenticateUserSuccess(res.data.user))
}

export default userSlice.reducer
