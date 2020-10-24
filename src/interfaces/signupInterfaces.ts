import { RouteComponentProps } from 'react-router-dom'

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

export interface signupProps extends RouteComponentProps<any> {
  signupUser(user: signupPayload, history: any): any
  user: signupSuccessObject
}

export interface loginProps extends RouteComponentProps<any> {
  loginUser(user: loginObject, history: any): any
  user: signupSuccessObject
}

export interface signupSuccessObject {
  email: string
  _id: string
  username: string
  workspaces: string[]
  password: string
  first_name: string
  last_name: string
  createdAt: string
  updatedAt: string
  _v?: number
  loading?: boolean
}

export interface forgotProps extends RouteComponentProps<any> {
  resetPassword(email: string, history: any): any
}

export interface changeObject {
  resetLink: String
  newPass: String
}
