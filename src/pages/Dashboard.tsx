import React from 'react'
import { Box } from '@chakra-ui/core'
import NavBar from '../components/NavBar'
import Board from '../components/board'

const Dashboard = () => {
  return (
    <Box display="flex" w="100vw">
      <NavBar />
      <Box minHeight="100vh" marginLeft="309px" w="100%">
        <Board />
      </Box>
    </Box>
  )
}

export default Dashboard
