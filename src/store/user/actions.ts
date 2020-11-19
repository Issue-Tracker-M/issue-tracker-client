import axios from 'axios'
import { Dispatch } from 'redux'
import { History } from 'history'
import { signupPayload, loginObject } from '../../interfaces/signupInterfaces'
import {
  addUserAction,
  failedRequest,
  confirmEmailAction
} from './actionDefinitions'
import { baseUrl } from '../../config'
import { setToken } from '../../helpers'
import { ActionTypes } from '../types'

export const signupUser = (user: signupPayload) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user)
      console.log(response.data)
      setToken(response.data.token)
      //   success('Check email inbox to verify your email address')
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
      throw err?.response?.data
    }
  }
}

export const loginUser = (credentials: loginObject, history: History) => {
  return async (dispatch: Dispatch) => {
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

export const resetPassword = (
  passwordData: { password: string; confirmPassword: string },
  token: string
) => async (dispatch: Dispatch) => {
  console.log(passwordData, token)
  const res = await axios.post(`${baseUrl}/api/auth/reset_password`, {
    ...passwordData,
    token
  })
  console.log(res)
}
