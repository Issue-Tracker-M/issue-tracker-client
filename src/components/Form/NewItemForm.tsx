import React, { useState } from 'react'
import { useFocus } from '../../utils/useFocus'
import {
  Box,
  Button,
  Input
} from '@chakra-ui/core'

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState('')
  const inputRef = useFocus()

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
      <Input
        ref={inputRef}
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <Button onClick={() => props.onAdd(text)}>Create</Button>
    </Box>
  )
}