import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import {
  Input,
  Button,
  FormControl,
  Box,
  FormErrorMessage
} from '@chakra-ui/core'
import * as yup from 'yup'
import { signupUser } from '../actions/users'
import { StoreState } from '../redux/reducers'
import { signupObject, signupProps } from '../interfaces/signupInterfaces'

const SignUp = ({ signupUser, user, history }: signupProps) => {
  const validationSchema = yup.object().shape({
    first_name: yup.string().label('first_name').required(),
    last_name: yup.string().label('last_name').required(),
    username: yup.string().label('username').required(),
    email: yup.string().label('Email').email().required(),
    password: yup
      .string()
      .label('password')
      .required()
      .min(8, 'Seems a bit short...')
      .max(24, 'Too long.'),
    confirmPassword: yup
      .string()
      .required()
      .label('confirmPassword')
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value
      })
  })

  const initialValues: signupObject = {
    first_name: '',
    last_name: '',
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
          height: '70vh',
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
          mt={5}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions })
              signupUser(
                {
                  first_name: values.first_name,
                  last_name: values.last_name,
                  username: values.username,
                  email: values.email,
                  password: values.password,
                },
                history
              )
            }}
            validationSchema={validationSchema}
          >
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <Field name="first_name">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={
                      form.errors.first_name && form.touched.first_name
                    }
                  >
                    <Input
                      {...field}
                      id="first_name"
                      size="md"
                      variant="outline"
                      placeholder="First name"
                    />
                    <FormErrorMessage>
                      {form.errors.first_name}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="last_name">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.last_name && form.touched.last_name}
                  >
                    <Input
                      {...field}
                      id="last_name"
                      size="md"
                      variant="outline"
                      placeholder="Last name"
                    />
                    <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="username">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                  >
                    <Input
                      {...field}
                      id="username"
                      size="md"
                      variant="outline"
                      placeholder="Username"
                    />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <Input
                      {...field}
                      id="email"
                      size="md"
                      variant="outline"
                      placeholder="Email"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      // onChange={handlePassword}
                      size="md"
                      variant="outline"
                      pr="4.5rem"
                      placeholder="Password"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="confirmPassword">
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={
                      form.errors.confirmPassword &&
                      form.touched.confirmPassword
                    }
                  >
                    <Input
                      {...field}
                      id="confirmPassword"
                      type="password"
                      size="md"
                      variant="outline"
                      pr="4.5rem"
                      placeholder="Confirm password"
                    />
                    <FormErrorMessage>
                      {form.errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                variantColor="teal"
                isLoading={user.loading}
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

const mapStateToProps = ({ user }: StoreState) => {
  return { user }
}

const mapActionsToProps = {
  signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(SignUp)
