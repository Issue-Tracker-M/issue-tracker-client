import React from 'react'
import { AddNewitem } from '../addNewItem'
import {
  Box,
  Text,
} from '@chakra-ui/react'
import Card from './card'

const data = {
  lists: [
    {
      id: '0',
      title: 'Sleep',
      description: 'Things I want to do',
      due_date: 'some date',
      priority: 'High',
      column: 'To do'
    },
    {
      id: '1',
      title: 'Work',
      description: 'Things I dont want to do',
      due_date: 'some date',
      priority: 'High',
      column: 'In Progress'
    },
    {
      id: '2',
      title: 'Dance',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '3',
      title: 'Party',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '4',
      title: 'Do laundry',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '5',
      title: 'Search for round humans',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '6',
      title: 'Fight dinosaurs',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'In Progress'
    },
    {
      id: '7',
      title: 'Kill villains',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'To do'
    },
    {
      id: '8',
      title: 'Dance some more',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '9',
      title: 'Dance a bit more',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    }
  ]
}

interface ColumnProps {
  text: string
  index: number
  id: string
}

const Column = ({ text, index, id }: ColumnProps) => {
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
        onAdd={(text) => console.log(text)}
        dark
      />
    </Box>
  )
}

export default Column
