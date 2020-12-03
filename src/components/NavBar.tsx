import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineSwitcher,
  AiOutlineUsergroupAdd
} from 'react-icons/ai'
import { AddIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { getWorkspaces } from '../store/user/userSlice'
import { getCurrentWorkspace } from '../store/workspace/workspaceSlice'
import CreateWorkspaceModal from './Modals/createWorkspaceModal'

const NavBar = () => {
  const [modal, setModal] = useState(false)
  const dispatch = useThunkDispatch()
  const workspaces = useSelector((state: RootState) => state.user.workspaces)
  const current = useSelector((state: RootState) => state.workspaceDisplay)

  useEffect(() => {
    dispatch(getWorkspaces())
  }, [dispatch])

  const selectWorkspace = (id: string | number) => {
    dispatch(getCurrentWorkspace(id))
  }

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
            <AddIcon />
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
            backgroundColor={workspace._id === current._id ? '#e0e0e2' : ''}
            _hover={{ backgroundColor: '#e0e0e2' }}
            onClick={() => selectWorkspace(workspace._id)}
          >
            <span style={{ fontSize: '0.8rem' }}>{workspace.name}</span>
          </Box>
        ))}
      </Box>
      <CreateWorkspaceModal isOpen={modal} onClose={() => setModal(false)} />
    </Box>
  )
}

export default NavBar
