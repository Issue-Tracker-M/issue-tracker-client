import React from 'react'
import { Box } from '@chakra-ui/core'

interface CardProps {
  text: string
  index: number
}

const Card = ({ text, index }: CardProps) => {
  return (
    <Box
      padding={1.5}
      cursor="pointer"
      mb={0.5}
      borderRadius={0.3}
      backgroundColor="#fff"
      minWidth="90%"
    >
      {text}
    </Box>
  )
}

export default Card
