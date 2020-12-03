import { DbDocument } from '../types'
import { User } from '../user/types'

enum Status {
  todo = 'todo',
  in_progress = 'in_progress',
  completed = 'completed'
}

export type InitialUserData = Pick<User, '_id' | 'username'>
export type InitialTaskData = Pick<Task, '_id' | 'title' | 'labels' | 'loaded'>

export interface Workspace extends DbDocument {
  name: string
  labels?: Label[]
  users?: InitialUserData[]
  admin: User['_id']
  todo?: (InitialTaskData | Task)[]
  in_progress?: (InitialTaskData | Task)[]
  completed?: (InitialTaskData | Task)[]
  // tasks?: Task["_id"][];
}

export interface Label extends DbDocument {
  name: string
  color: string
}

export interface Task extends DbDocument {
  loaded: boolean
  title: string
  description?: string
  workspace: Workspace['_id']
  due_date?: Date
  status: Status
  priority?: Priority
  labels?: Label['_id'][]
  users?: User['_id'][]
  comments?: Comment[]
}

export interface Comment extends DbDocument {
  content: string
  author: User['_id']
}

export enum Priority {
  not_set,
  low,
  high,
  urgent
}
