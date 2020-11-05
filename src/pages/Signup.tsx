/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { Button, Box } from '@chakra-ui/core'
import { object, string } from 'yup'
import { signupUser } from '../actions/users'
import { StoreState } from '../redux/reducers'
import { signupObject, signupProps } from '../interfaces/signupInterfaces'
import StringField from '../components/Form/StringField'
import AuthFormWrapper from '../components/Form/AuthFormWrapper'

const validationSchema = object().shape({
  first_name: string().label('First Name').required(),
  last_name: string().label('Last Name').required(),
  username: string().label('Username').required(),
  email: string().label('Email').email().required(),
  password: string()
    .label('Password')
    .required()
    .min(8, 'At least 8 characters')
    .max(64, 'Too long.'),
  confirmPassword: string()
    .required()
    .label('Confirm Password')
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
    <AuthFormWrapper title="Sign up">
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
    </AuthFormWrapper>
  )
}

const mapStateToProps = ({ user }: StoreState) => {
  return { user }
}

const mapActionsToProps = {
  signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(SignUp)
