import React from 'react'
import { AddNewitem } from '../addNewItem'
import {
  Box,
  Text,
} from '@chakra-ui/react'
import Card from './card'
import { useSelector } from 'react-redux'
import { useThunkDispatch } from '../../hooks/useThunkDispatch'
import { RootState } from '../../store/rootReducer'
import { createTask } from '../../store/workspace/workspaceSlice'

interface ColumnProps {
  text: string
  index: number
  id: string
}

export interface createTaskObject {
  workspace: string | number
  stage: string
  title: string
}

const Column = ({ text, index, id }: ColumnProps) => {
  let stage = text === 'Todo' ? 'todo' : text === 'In Progress' ? 'in_progress' : 'completed'
  const dispatch = useThunkDispatch()
  const workspace = useSelector((state: RootState) => state.workspaceDisplay)
  const createTaskFunction = (title: string) => {
    let taskPayload = {
      workspace: workspace._id,
      stage: stage,
      title: title
    }
    dispatch(createTask(taskPayload))
  }
  return (
        <Box
      padding={3}
      minWidth="32%"
      minHeight={4}
      display={{ md: 'flex' }}
      flexDirection={{ md: 'column' }}
      alignItems={{ md: 'center' }}
    >
      <Text mb={2} fontWeight="bold" fontSize="sm">
        {text}
      </Text>
      {
        stage === 'todo' ? (
        workspace.todo?.map((task, i) => (
          <Card
            title={task.title}
            key={task._id}
            taskId={task._id}
            labels={task.labels}
          />))
        ) : stage === 'in_progress' ? (
          workspace.in_progress?.map((task, i) => (
          <Card
            title={task.title}
            key={task._id}
            taskId={task._id}
            labels={task.labels}
          />))
        ) : (
          workspace.completed?.map((task, i) => (
          <Card
            title={task.title}
            key={task._id}
            taskId={task._id}
            labels={task.labels}
          />))
        ) 
      }
      <AddNewitem
        toggleButtonText='+ Add another task'
        onAdd={(title) => createTaskFunction(title)}
        dark
      />
    </Box>
  )
}

export default Column
