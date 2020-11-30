import React, { useState, useEffect } from 'react'
import { Box, Icon } from '@chakra-ui/react'
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineSwitcher,
  AiOutlineUsergroupAdd
} from 'react-icons/ai'
import { useSelector } from 'react-redux'
// import CreateWorkspaceModal from './createWorkspaceModal'
import { RouteComponentProps } from 'react-router-dom'
import { RootState } from '../store/rootReducer'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { getWorkspaces } from '../store/user/userSlice'

interface IProps
  extends RouteComponentProps,
    Pick<RootState['user'], 'workspaces'> {}

const NavBar = () => {
  const [modal, setModal] = useState(false)
  const dispatch = useThunkDispatch()
  const workspaces = useSelector((state: RootState) => state.user.workspaces)

  useEffect(() => {
    dispatch(getWorkspaces())
  }, [getWorkspaces])

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
      {/* <CreateWorkspaceModal isOpen={modal} onClose={() => setModal(false)} /> */}
    </Box>
  )
}

export default NavBar
