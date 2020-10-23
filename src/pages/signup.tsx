import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Input, Button, InputGroup, FormControl, Box } from '@chakra-ui/core'

interface FormValues {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

const SignUp = () => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '60%',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '4rem'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#319795'
          }}
        >
          Sign Up
        </h1>
        <Box
          d="flex"
          flexDirection="column"
          w="100%"
          h="100%"
          borderWidth="1px"
          p={4}
          color="white"
          mt={5}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions })
            }}
          >
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <Field name="firstName">
                {({ field, form }: any) => (
                  <FormControl>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="firstName"
                        size="md"
                        variant="outline"
                        placeholder="First name"
                      />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>

              <Field name="lastName">
                {({ field, form }: any) => (
                  <FormControl>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="lastName"
                        size="md"
                        variant="outline"
                        placeholder="Last name"
                      />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>

              <Field name="username">
                {({ field, form }: any) => (
                  <FormControl>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="username"
                        size="md"
                        variant="outline"
                        placeholder="Username"
                      />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }: any) => (
                  <FormControl>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="email"
                        size="md"
                        variant="outline"
                        placeholder="Email"
                      />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }: any) => (
                  <FormControl>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="password"
                        size="md"
                        variant="outline"
                        pr="4.5rem"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>

              <Field name="confirmPassword">
                {({ field, form }: any) => (
                  <FormControl>
                    <InputGroup size="md">
                      <Input
                        {...field}
                        id="confirmPassword"
                        size="md"
                        variant="outline"
                        pr="4.5rem"
                        placeholder="Confirm password"
                      />
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                variantColor="teal"
                // isLoading={props.isSubmitting}
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Formik>
        </Box>
      </div>
    </div>
  )
}

export default SignUp
