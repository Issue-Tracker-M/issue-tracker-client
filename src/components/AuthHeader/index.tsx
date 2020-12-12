import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Text,
  Flex,
  Link,
  Button,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

export default function AuthHeader() {
  const [text, setText] = useState('')

  return (
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
      <InputGroup w="20rem" mr={2} size="sm">
        <InputLeftElement children={<Search2Icon />} />
        <Input
          rounded={2}
          placeholder="search"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
      </InputGroup>
      <Popover>
        <PopoverTrigger>
          <Box
            backgroundColor="#5678"
            mr={8}
            border="1px solid #E0E0E2"
            p={1.5}
            borderRadius="50%"
            padding="10px"
            cursor="pointer"
          >
            UA
          </Box>
        </PopoverTrigger>
        <PopoverContent paddingX="10px">
          {/* <PopoverArrow /> */}
          <PopoverCloseButton />
          <PopoverHeader
            fontSize="14px"
            color="#5e6c84"
            borderBottom="1px solid rgba(9,30,66,.13)"
            padding="10px 20px"
            textAlign="center"
          >
            Account
          </PopoverHeader>
          <PopoverBody pl="0" pr="0">
            <Flex borderBottom="1px solid rgba(9,30,66,.13)" py="10px">
              <Box
                backgroundColor="#5678"
                mr={2}
                border="1px solid #E0E0E2"
                p={1.5}
                borderRadius="50%"
                padding="10px"
                cursor="pointer"
                height="40px"
                width="40px"
                fontSize="12px"
              >
                UA
              </Box>
              <Box>
                {/* full name here */}
                <Text color="#172b4d" fontSize="14px">
                  Amaka Anyanwu
                </Text>
                {/* email here */}
                <Text color="#b3bac5" fontSize="12px">
                  uzo@gmail.com
                </Text>
              </Box>
            </Flex>
            <Box marginY="10px">
              <Link fontSize="14px" as={RouterLink} to="/profile">
                Profile
              </Link>
            </Box>
            <Box
              marginY="10px"
              borderBottom="1px solid rgba(9,30,66,.13)"
              paddingBottom="10px"
            >
              <Link fontSize="14px" as={RouterLink} to="/account">
                Settings
              </Link>
            </Box>
            <Box paddingY="10px">
              <Button colorScheme="gray" variant="ghost" fontSize="14px">
                Log out
              </Button>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
}
