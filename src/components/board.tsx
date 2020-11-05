import React from 'react'
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Icon,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/core'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

const Board = () => {
  return (
    <Box paddingTop={5} display="flex" flexDirection="column" minHeight="100%">
      <Box
        paddingLeft={5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <div style={{ display: 'flex' }}>
          <AiOutlineUsergroupAdd />
          <span style={{ paddingLeft: '10px' }}>Issue Tracker</span>
        </div>
        <InputGroup mr={2} size="sm">
          <InputLeftElement children={<Icon name="search" color="black" />} />
          <Input rounded={2} placeholder="search" />
        </InputGroup>
        <Box
          backgroundColor="#5678"
          mr={8}
          border="1px solid #E0E0E2"
          p={1.5}
          borderRadius="50%"
        >
          UA
        </Box>
      </Box>
      <Tabs defaultIndex={0}>
        <TabList borderBottom="1px solid #E0E0E2">
          <Tab ml={8} fontSize={12}>
            List
          </Tab>
          <Tab fontSize={12}>Board</Tab>
          <Tab fontSize={12}>Activity</Tab>
          <Tab fontSize={12}>Archived Tasks</Tab>
        </TabList>

        <TabPanels p={5}>
          <TabPanel>
            <div style={{ height: '40rem' }}>
              <p>List!</p>
            </div>
          </TabPanel>
          <TabPanel>
            <p>Board!</p>
          </TabPanel>
          <TabPanel>
            <p>Activity!</p>
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
