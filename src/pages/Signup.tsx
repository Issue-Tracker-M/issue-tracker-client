/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import {
  Input,
  Button,
  FormControl,
  Box,
  FormErrorMessage,
  Link
} from '@chakra-ui/core'
import { object, string } from 'yup'
import { signupUser } from '../actions/users'
import { StoreState } from '../redux/reducers'
import { signupObject, signupProps } from '../interfaces/signupInterfaces'
import StringField from '../components/FormFields/StringField'

const validationSchema = object().shape({
  first_name: string().label('first_name').required(),
  last_name: string().label('last_name').required(),
  username: string().label('username').required(),
  email: string().label('Email').email().required(),
  password: string()
    .label('password')
    .required()
    .min(8, 'At least 8 characters')
    .max(64, 'Too long.'),
  confirmPassword: string()
    .required()
    .label('confirmPassword')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    })
})

const SignUp = ({ signupUser, user, history }: signupProps) => {
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
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80%'
      }}
    >
      <div
        css={{
          width: '60%',
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '4rem'
        }}
      >
        <h1
          css={{
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
              css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <StringField
                name="first_name"
                labelText="First name"
                type="text"
                placeholder="First Name"
              />

              <StringField
                name="last_name"
                labelText="Last Name"
                type="text"
                placeholder="Last Name"
              />

              <StringField
                name="username"
                labelText="Username"
                type="text"
                placeholder="Username"
              />

              <StringField
                name="email"
                labelText="Email"
                type="email"
                placeholder="Email"
              />

              <StringField
                name="password"
                labelText="Password"
                type="password"
                placeholder="Password"
              />

              <StringField
                name="confirmPassword"
                labelText="Confirm Password"
                type="password"
                placeholder="Confirm Password"
              />

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
          <div css={{ textAlign: 'center' }}>
            <NavLink
              to={{ pathname: '/forgot_password' }}
              css={css`
                color: #0099ff;
              `}
            >
              Forgot password
            </NavLink>
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
