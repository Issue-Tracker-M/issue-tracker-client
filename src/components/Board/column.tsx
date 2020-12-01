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

const data = {
  lists: [
    {
      id: '0',
      title: 'Sleep',
      description: 'Things I want todo',
      due_date: 'some date',
      priority: 'High',
      column: 'todo'
    },
    {
      id: '1',
      title: 'Work',
      description: 'Things I dont want todo',
      due_date: 'some date',
      priority: 'High',
      column: 'in_progress'
    },
    {
      id: '2',
      title: 'Dance',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'completed'
    },
    {
      id: '3',
      title: 'Party',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'completed'
    },
    {
      id: '4',
      title: 'Do laundry',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'completed'
    },
    {
      id: '5',
      title: 'Search for round humans',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'completed'
    },
    {
      id: '6',
      title: 'Fight dinosaurs',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'in_progress'
    },
    {
      id: '7',
      title: 'Kill villains',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'todo'
    },
    {
      id: '8',
      title: 'Dance some more',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'completed'
    },
    {
      id: '9',
      title: 'Dance a bit more',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'completed'
    }
  ]
}

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
  const dispatch = useThunkDispatch()
  const workspace = useSelector((state: RootState) => state.workspaceDisplay)
  const createTaskFunction = (title: string) => {
    let taskPayload = {
      workspace: workspace._id,
      stage: text,
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
      {data.lists.map((task, i) =>
        task.column === text ? (
          <Card
            title={task.title}
            priority={task.priority}
            key={task.id}
            due_date={task.due_date}
            description={task.description}
          />
        ) : null
      )}
      <AddNewitem
        toggleButtonText='+ Add another task'
        onAdd={(title) => createTaskFunction(title)}
        dark
      />
    </Box>
  )
}

export default Column
