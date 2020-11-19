import { RouteComponentProps } from 'react-router-dom'
import { signupSuccessObject } from '../store/user/types'

export interface signupObject {
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface signupPayload {
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
}

export interface loginObject {
  credential: string
  password: string
}

export interface loginProps extends RouteComponentProps<any> {
  loginUser(user: loginObject, history: any): any
  user: signupSuccessObject
}

export interface forgotProps extends RouteComponentProps<any> {
  resetPassword(email: string, history: any): any
}

export interface changeObject {
  resetLink: String
  newPass: String
}
