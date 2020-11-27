import { DbDocument } from '../types'
import { Workspace } from '../workspace/types'

export interface User extends DbDocument {
  readonly email: string
  readonly username: string
  readonly workspaces: Pick<Workspace, '_id' | 'name'>[]
  readonly first_name: string
  readonly last_name: string
}

export interface loginCredentials {
  credential: string
  password: string
}

export interface succesfullAuthObject {
  token: string
  user: User
}
