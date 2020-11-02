import React from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

const Board = () => {
  return (
    <Box paddingTop={5} display="flex" flexDirection="column" minHeight="100%">
      <Box paddingLeft={5} display="flex" alignItems="center">
        <AiOutlineUsergroupAdd />
        <span style={{ paddingLeft: '10px' }}>Issue Tracker</span>
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
