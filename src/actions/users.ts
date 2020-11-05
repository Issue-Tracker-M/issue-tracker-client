import axios from 'axios'
import { Dispatch } from 'redux'
import { signupPayload, loginObject } from '../interfaces/signupInterfaces'
import {
  userLoadingAction,
  addUserAction,
  failedRequest,
  confirmEmailAction
} from '../interfaces/actionDefinitions'
import { baseUrl } from '../config'
import { setToken } from '../helpers'
import { ActionTypes } from '../redux/types'

export const signupUser = (user: signupPayload, historys: any) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user)
      console.log(response.data)
      setToken(response.data.token)
      //   success('Check email inbox to verify your email address')
      historys.push('/')
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

export const loginUser = (credentials: loginObject, historys: any) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, credentials)
      setToken(response.data.token)
      historys.push('/')
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
    const res = await axios.post(`${baseUrl}/auth/confirm_email`, { token })
    setToken(token)
    dispatch<confirmEmailAction>({
      type: ActionTypes.confirmEmail,
      payload: res.data.user
    })
  } catch (error) {
    console.error(error)
    dispatch<failedRequest>({
      type: ActionTypes.failedRequest
    })
  }
}
