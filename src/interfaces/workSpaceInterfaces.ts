export interface createWorkspaceObject {
  name: string
  labels?: any
}

export interface createWorkspaceModalProps {
  onClose(): void
  isOpen: boolean
  createWorkspace(payload: createWorkspaceObject): any
}

export interface getWorkspacesObject {
    name: string
    _id: string
    loading?: boolean
}