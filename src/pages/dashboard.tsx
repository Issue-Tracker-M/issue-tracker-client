import React from 'react'
import { Box } from '@chakra-ui/core'
import NavBar from '../components/NavBar'

const Dashboard = () => {
  return (
    <Box display="flex" w="100vw">
      <NavBar />
      <Box
        // bg="#fff7f3"
        minHeight="100vh"
        marginLeft="309px"
        padding="10vh 5%"
        w="100%"
      ></Box>
    </Box>
  )
}

export default Dashboard
