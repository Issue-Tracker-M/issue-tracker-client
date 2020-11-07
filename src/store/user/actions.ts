import axios from 'axios'
import { Action, Dispatch } from 'redux'
import { History } from 'history'
import {
  signupPayload,
  loginObject,
  signupSuccessObject
} from '../../interfaces/signupInterfaces'
import {
  userLoadingAction,
  addUserAction,
  failedRequest,
  confirmEmailAction
} from './actionDefinitions'
import { baseUrl } from '../../config'
import { setToken } from '../../helpers'
import { ActionTypes } from '../types'
import { ThunkAction } from 'redux-thunk'
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  signupSuccessObject,
  unknown,
  Action<string>
>

export const signupUser = (user: signupPayload, history: History) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user)
      console.log(response.data)
      setToken(response.data.token)
      //   success('Check email inbox to verify your email address')
      history.push('/')
      dispatch<addUserAction>({
        type: ActionTypes.addUser,
        payload: response.data.user
      })
    } catch (err) {
      //   error(err.message, 'Signup failed')
      console.log(err)
      dispatch<failedRequest>({
        type: ActionTypes.failedRequest
      })
    }
  }
}

export const loginUser = (credentials: loginObject, history: History) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, credentials)
      setToken(response.data.token)
      history.push('/')
    } catch (err) {
      //   error(err.message, 'login failed')
      dispatch<failedRequest>({
        type: ActionTypes.failedRequest
      })
    }
  }
}

export const confirmEmail = (token: string, history: History) => async (
  dispatch: Dispatch
) => {
  dispatch<userLoadingAction>({
    type: ActionTypes.userLoading
  })
  try {
    console.log(token, history)
    const res = await axios.post(`${baseUrl}/auth/confirm_email`, { token })
    setToken(token)
    dispatch<confirmEmailAction>({
      type: ActionTypes.confirmEmail,
      payload: res.data.user
    })
    history.push('/')
  } catch (error) {
    console.error(error)
    dispatch<failedRequest>({
      type: ActionTypes.failedRequest
    })
  }
}
