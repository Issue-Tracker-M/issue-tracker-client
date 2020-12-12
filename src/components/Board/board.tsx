import React, { useState } from 'react'
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Text,
  Flex,
  Link,
  Button
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import BoardContainer from './boardContainer'
import ListContainer from '../LIst/listContainer'
import { useSelector } from 'react-redux'
import AuthHeader from '../AuthHeader'

const Board = () => {
  const [text, setText] = useState('')
  const { currentWorkspaceId } = useSelector((state) => state.workspaceDisplay)
  return (
    <Box
      paddingTop={5}
      display="flex"
      flexDirection="column"
      h={{ md: '100vh' }}
    >
     <AuthHeader />
      <Tabs defaultIndex={0}>
        <TabList borderBottom="1px solid #E0E0E2">
          <Tab ml={8} fontSize={12}>
            Board
          </Tab>
          <Tab fontSize={12} data-testid="trello_view">
            List
          </Tab>
          <Tab fontSize={12}>Activity</Tab>
          <Tab fontSize={12}>Archived Tasks</Tab>
        </TabList>

        <TabPanels p={5}>
          <TabPanel>
            {currentWorkspaceId ? (
              <BoardContainer
                text={text}
                currentWorkspaceId={currentWorkspaceId}
              />
            ) : (
              <Skeleton />
            )}
          </TabPanel>
          <TabPanel>
            <ListContainer />
          </TabPanel>
          <TabPanel>
            <p>Activity History...</p>
          </TabPanel>
          <TabPanel>
            <p>Archived Tasks!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Board
