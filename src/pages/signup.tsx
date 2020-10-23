import React, {useState} from 'react'
import { Input, Button, InputGroup, InputRightElement, FormControl, FormLabel } from "@chakra-ui/core";

const SignUp = () => {

  const [emailValue, setEmailValue] = useState("")
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [usernameValue, setUsernameValue] = useState("")
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
 
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmailValue(event.target.value)
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(event.target.value)
  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setFirstNameValue(event.target.value)
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setLastNameValue(event.target.value)
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsernameValue(event.target.value)
  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setConfirmPasswordValue(event.target.value)
  return (
     <div>
      <div style={{width: '50%'}}>
         <form>

      <FormControl>
      <InputGroup size="md">
        {/* <FormLabel htmlFor="first name">First name</FormLabel> */}
        <Input
        value={firstNameValue}
        onChange={handleFirstNameChange}
          size='md'
          variant='outline'
          placeholder='First name'
        />
        </InputGroup>
        </FormControl>

        <FormControl>
      <InputGroup size="md">
        {/* <FormLabel htmlFor="last name">Last name</FormLabel> */}
        <Input
        value={lastNameValue}
        onChange={handleLastNameChange}
          size='md'
          variant='outline'
          placeholder='Last name'
        />
        </InputGroup>
        </FormControl>

        <FormControl>
      <InputGroup size="md">
        {/* <FormLabel htmlFor="username">Username</FormLabel> */}
        <Input
        value={usernameValue}
        onChange={handleUsernameChange}
          size='md'
          variant='outline'
          placeholder='Username'
        />
        </InputGroup>
        </FormControl>

        <FormControl>
      <InputGroup size="md">
        {/* <FormLabel htmlFor="email">Email</FormLabel> */}
        <Input
        value={emailValue}
        onChange={handleEmailChange}
          size='md'
          variant='outline'
          placeholder='Email'
        />
        </InputGroup>
        </FormControl>

        <FormControl>
        <InputGroup size="md">
          {/* <FormLabel htmlFor="password">Password</FormLabel> */}
          <Input
           value={passwordValue}
        onChange={handlePasswordChange}
          size='md'
          variant='outline'
          pr="4.5rem"
          placeholder='Password'
        />
      </InputGroup>
      </FormControl>

      <FormControl>
        <InputGroup size="md">
          {/* <FormLabel htmlFor="confirm password">Confirm password</FormLabel> */}
          <Input
           value={confirmPasswordValue}
        onChange={handleConfirmPasswordChange}
          size='md'
          variant='outline'
          pr="4.5rem"
          placeholder='Confirm password'
        />
      </InputGroup>
      </FormControl>

        {/* <Button
          
          size='large'
          type='primary'
          danger={id ? true : false}
          block
        >
          {id ? 'Update Entry' : 'Add Entry'}
        </Button> */}
      </form>
      </div>
    </div>
      )
}

export default SignUp
