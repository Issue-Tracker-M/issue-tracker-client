import React from 'react'
import { Box } from '@chakra-ui/core'
import Column from './column'

const data = ['To do', 'In Progress', 'Completed']

const BoardContainer = () => {
  return (
    <Box
      height={{ md: '83vh' }}
      display={{ md: 'flex' }}
      flexDirection={{ md: 'row' }}
      alignItems={{ md: 'flex-start' }}
      overflow={{ md: 'auto' }}
      backgroundColor="#5678"
      minWidth="100%"
    >
      {data.map((list, i) => (
        <Column text={list} key={i} index={i} id={list} />
      ))}
    </Box>
  )
}

export default BoardContainer
