import axios from 'axios'
import { Dispatch } from 'redux'
import { signupPayload } from '../interfaces/signupInterfaces'
import {
  userLoadingAction,
  addUserAction,
  failedRequest
} from '../interfaces/actionDefinitions'
import { baseUrl } from '../config'
import { ActionTypes } from '../redux/types'

export const signupUser = (user: signupPayload, historys: any) => {
  return async (dispatch: Dispatch) => {
    dispatch<userLoadingAction>({
      type: ActionTypes.userLoading
    })
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user)
      //   setToken(response.data.token)
      //   success('Check email inbox to verify your email address')
      historys.push('/')
      dispatch<addUserAction>({
        type: ActionTypes.addUser,
        payload: response.data.user
      })
    } catch (err) {
      //   error(err.message, 'Signup failed')
      dispatch<failedRequest>({
        type: ActionTypes.failedRequest
      })
    }
  }
}
