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
      justifyContent={{ md: 'space-between' }}
      overflow={{ md: 'auto' }}
      minWidth="100%"
      backgroundColor="#f6f8f9"
    >
      {data.map((list, i) => (
        <Column text={list} key={i} index={i} id={list} />
      ))}
    </Box>
  )
}

export default BoardContainer
