import React from 'react'
import { AddNewitem } from '../addNewItem'
import { Box, Text } from '@chakra-ui/react'
import Card from './card'
import { useSelector } from 'react-redux'
import { useThunkDispatch } from '../../hooks/useThunkDispatch'
import { RootState } from '../../store/rootReducer'
import { createTask } from '../../store/workspace/workspaceSlice'
import { Task } from '../../store/workspace/types'

interface ColumnProps {
  text: string
  index: number
  id: string
  inputText: string
}

export interface createTaskObject {
  workspace: string | number
  stage: string
  title: string
}

const Column = ({ text, index, id, inputText }: ColumnProps) => {
  let stage =
    text === 'Todo'
      ? 'todo'
      : text === 'In Progress'
      ? 'in_progress'
      : 'completed'
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
  const taskArray =
    stage === 'todo'
      ? workspace.todo
      : stage === 'in_progress'
      ? workspace.in_progress
      : workspace.completed

  const searchObj = (
    obj: Pick<Task, '_id' | 'title' | 'labels'> | Task,
    string: string
  ) => {
    const regExpFlags = 'gi'
    const regExp = new RegExp(string, regExpFlags)
    return JSON.stringify(obj).match(regExp)
  }

  const searchFilter = taskArray?.filter((obj) => {
    return searchObj(obj, inputText)
  })

  const arrayToRender = inputText ? searchFilter : taskArray

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
      {arrayToRender?.map((task, i) => (
        <Card
          title={task.title}
          key={task._id}
          taskId={task._id}
          labels={task.labels}
        />
      ))}
      {!inputText ? (
        <AddNewitem
          toggleButtonText="+ Add another task"
          onAdd={(title) => createTaskFunction(title)}
          dark
        />
      ) : null}
    </Box>
  )
}

export default Column
