import React from 'react'
import { Box } from '@chakra-ui/core'
import { AiOutlineHome, AiOutlineNotification, AiOutlineSwitcher, AiOutlineUsergroupAdd } from 'react-icons/ai'

const NavBar = () => {
  return (
    <Box
      h="100vh"
      backgroundColor="white"
      w="309px"
      position="fixed"
      display='flex'
      left={0}
      right={0}
      borderRight='1px solid #E0E0E2'
    >
        {/* grey strip */}
      <Box
        w="75px"
        h="100vh"
        backgroundColor="#E0E0E2"
        position='relative'
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={16}
      >
        <Box display="flex" alignItems="center">
          <Box
            pl="4px"
            margin="15px 0"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <AiOutlineHome />
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            pl="4px"
            margin="15px 0"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <AiOutlineSwitcher />
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            pl="4px"
            margin="15px 0"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <AiOutlineNotification />
          </Box>
        </Box>
      </Box>
      {/* main nav */}
      <Box
        display="flex"
        w="234px"
        h='100vh'
        position='relative'
        backgroundColor='green'
        flexDirection='column'
      >
        <Box display='flex' p={5} borderBottom='1px solid #E0E0E2'>
            <AiOutlineUsergroupAdd/>
            Workspaces
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
