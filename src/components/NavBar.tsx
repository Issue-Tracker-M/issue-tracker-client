import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Box, Icon } from '@chakra-ui/react'
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineSwitcher,
  AiOutlineUsergroupAdd
} from 'react-icons/ai'
import { getWorkSpaces } from '../actions/workspaces'
import { StoreState } from '../store/reducers'
import CreateWorkspaceModal from './createWorkspaceModal'
import { navBarProps } from '../interfaces/workSpaceInterfaces'

const NavBar = ({ getWorkSpaces, workspaces }: navBarProps) => {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getWorkSpaces()
  }, [getWorkSpaces])

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
          <span style={{ cursor: 'pointer' }} onClick={() => setModal(true)}>
            <Icon name="add" />
          </span>
        </Box>
        {workspaces.map((workspace, i) => (
          <Box
            cursor="pointer"
            w="100%"
            p={2}
            marginBottom={2}
            display="flex"
            justifyContent="center"
            key={i}
          >
            <span style={{ fontSize: '0.8rem' }}>{workspace.name}</span>
          </Box>
        ))}
      </Box>
      <CreateWorkspaceModal isOpen={modal} onClose={() => setModal(false)} />
    </Box>
  )
}

const mapStateToProps = ({ workspaces }: StoreState) => {
  return { workspaces }
}

const mapActionsToProps = {
  getWorkSpaces
}

export default connect(mapStateToProps, mapActionsToProps)(NavBar)
