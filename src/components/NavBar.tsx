import React, {useState} from 'react'
import { Box, Icon } from '@chakra-ui/core'
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineSwitcher,
  AiOutlineUsergroupAdd
} from 'react-icons/ai'
import CreateWorkspaceModal from './createWorkspaceModal'

const NavBar = () => {
  const [modal, setModal] = useState(false)
  return (
    <Box
      h="100vh"
      backgroundColor="white"
      w="309px"
      position="fixed"
      display="flex"
      left={0}
      right={0}
      borderRight="1px solid #E0E0E2"
    >
      {/* grey strip */}
      <Box
        w="75px"
        h="100vh"
        backgroundColor="#E0E0E2"
        position="relative"
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
        h="100vh"
        position="relative"
        backgroundColor="green"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          p="31px"
          borderBottom="1px solid #E0E0E2"
        >
          <span style={{ display: 'flex' }}>
            <AiOutlineUsergroupAdd />
            <span style={{ paddingLeft: '7px' }}>Workspaces</span>
          </span>
          <span onClick={() => setModal(true)}><Icon name="add" /></span>
        </Box>
      </Box>
      <CreateWorkspaceModal isOpen={modal} onClose={() => setModal(false)} />
    </Box>
  )
}

export default NavBar
