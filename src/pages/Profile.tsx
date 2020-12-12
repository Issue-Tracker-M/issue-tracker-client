import React, { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  Heading,
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import AuthHeader from '../components/AuthHeader'

export default function Profile() {
  const [profileInputs, setProfileInputs] = useState({
    fullName: 'Uzoamaka Anyanwu',
    username: 'Uzo'
  })

  function handleProfileInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setProfileInputs({
      ...profileInputs,
      [event.target.name]: event.target.value
    })
  }
  return (
    <Box>
      <AuthHeader type="profile" />
      <Flex alignItems="center" marginTop="3rem" flexDir="column">
        <Heading as="h2" size="xl" color="#0c3953">
          Profile
        </Heading>
        <Box width="370px" maxW="370px" paddingY="40px">
          <FormControl id="email" marginTop="20px">
            <FormLabel>Full Name</FormLabel>
            <Input
              name="fullName"
              type="text"
              value={profileInputs.fullName}
              onChange={handleProfileInputChange}
            />
          </FormControl>
          <FormControl id="email" marginTop="20px">
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              value={profileInputs.username}
              onChange={handleProfileInputChange}
            />
          </FormControl>
          <FormControl id="email" marginTop="20px">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value="uzo@gmail.com" disabled />
          </FormControl>
        </Box>
        <Box width="370px" maxW="370px">
          <Button width="100%">Save</Button>
        </Box>
      </Flex>
    </Box>
  )
}
