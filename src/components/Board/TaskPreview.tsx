import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { InitialTaskData } from '../../store/workspace/types'

interface TaskPreviewProps {
  task: InitialTaskData
}

const TaskPreview: FC<TaskPreviewProps> = ({ task: { title, labels } }) => {
  return (
    <Box
      padding={2}
      cursor="pointer"
      mb={5}
      borderRadius={5}
      backgroundColor="#fff"
      minWidth="100%"
      boxShadow="#091e4240 0px 1px 0px 0px"
    >
      <Text mb={2} fontSize="sm">
        {title}
      </Text>
    </Box>
  )
}

export default TaskPreview
