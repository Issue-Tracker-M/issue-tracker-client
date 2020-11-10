import React from 'react'
import { Box } from '@chakra-ui/core'
import Card from './card'

const data = {
  lists: [
    {
      id: '0',
      title: 'To Do',
      description: 'Things I want to do',
      due_date: 'some date',
      priority: 'High',
      column: 'To do'
    },
    {
      id: '1',
      title: 'To Not Do',
      description: 'Things I dont want to do',
      due_date: 'some date',
      priority: 'High',
      column: 'In Progress'
    },
    {
      id: '2',
      title: 'Might Do',
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
      mr={2}
      borderRadius={0.3}
      backgroundColor="#ebecf0"
      minWidth="32%"
      minHeight={4}
    >
      <p>{text}</p>
      {data.lists.map((task, i) =>
        task.column === text ? (
          <Card text={task.title} key={task.id} index={i} />
        ) : null
      )}
    </Box>
  )
}

export default Column
