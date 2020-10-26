import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80%'
      }}
    >
      <div
        style={{
          width: '60%',
          height: '75vh',
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
                  password: values.password
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
              <label htmlFor="first_name">
                First Name{' '}
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
              </label>

              <label htmlFor="last_name">
                Last Name{' '}
                <Field name="last_name">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={
                        form.errors.last_name && form.touched.last_name
                      }
                    >
                      <Input
                        {...field}
                        id="last_name"
                        size="md"
                        variant="outline"
                        placeholder="Last name"
                      />
                      <FormErrorMessage>
                        {form.errors.last_name}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </label>

              <label htmlFor="username">
                Username{' '}
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
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </label>

              <label htmlFor="email">
                Email{' '}
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
              </label>

              <label htmlFor="password">
                Password{' '}
                <Field name="password">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        size="md"
                        variant="outline"
                        pr="4.5rem"
                        placeholder="Password"
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </label>

              <label htmlFor="confirmPassword">
                Confirm Password{' '}
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
              </label>

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
          <div style={{ textAlign: 'center' }}>
            <p>Forgot password</p>
            <p>
              Already a member?{' '}
              <NavLink
                to={{
                  pathname: '/login',
                  state: { errors: null, completed: false }
                }}
              >
                Sign in
              </NavLink>
            </p>
          </div>
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
