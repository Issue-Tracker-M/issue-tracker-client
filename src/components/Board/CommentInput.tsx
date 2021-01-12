import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { Task } from '../../store/workspace/types'

interface IProps {
  taskId: Task['_id']
}

const CommentInput: FC<IProps> = ({ taskId }) => {
  const [comment, setComment] = useState('')
  return (
    <>
      <Textarea
        // position="absolute"
        placeholder="Write a comment here..."
        value={comment}
        onChange={(e) => {
          const { target } = e
          target.style.height = '1px'
          target.style.height = target.scrollHeight + 1 + 'px'
          setComment(target.value)
        }}
        // border="none"
        transition="all 0.2s ease, height 0s"
        wordBreak="normal"
        overflowWrap="anywhere"
      />
      <Button
        type="submit"
        colorScheme="teal"
        size="sm"
        ml="1rem"
        mt=".25rem"
        // position="absolute"
        // left="1rem"
        // bottom="10px"
      >
        Save
      </Button>
    </>
  )
}

export default CommentInput
