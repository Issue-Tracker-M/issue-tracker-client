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
import { AiOutlineUsergroupAdd, AiFillHome } from 'react-icons/ai'

type HeaderProps = {
  type?: string
}
export default function AuthHeader({ type }: HeaderProps) {
  const [query, setQuery] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  return (
    <Box
      paddingLeft={5}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingY={type === 'profile' ? '10px' : '0px'}
      background={type === 'profile' ? '#f4f5f7' : ''}
    >
      {type === 'profile' ? (
        <Flex minW="500px">
          {type === 'profile' ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AiFillHome />
              <Link as={RouterLink} to="/dashboard" marginRight="15px">
                <span style={{ paddingLeft: '10px' }}>Home</span>
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AiOutlineUsergroupAdd />
              <span style={{ paddingLeft: '10px' }}>Issue Tracker</span>
            </div>
          )}
          <InputGroup w="20rem" mr={2} size="sm">
            <InputLeftElement children={<Search2Icon />} />
            <Input
              rounded={2}
              placeholder="search"
              value={query}
              onChange={handleChange}
            />
          </InputGroup>
        </Flex>
      ) : (
        <React.Fragment>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Link>
              <AiOutlineUsergroupAdd />
              <span style={{ paddingLeft: '10px' }}>Issue Tracker</span>
            </Link>
          </div>
          <InputGroup w="20rem" mr={2} size="sm">
            <InputLeftElement children={<Search2Icon />} />
            <Input
              rounded={2}
              placeholder="search"
              value={query}
              onChange={handleChange}
            />
          </InputGroup>
        </React.Fragment>
      )}

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
