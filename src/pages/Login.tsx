import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { NavLink, useHistory } from 'react-router-dom'
import {
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Box,
  Text
} from '@chakra-ui/core'
import * as yup from 'yup'
import { loginUser } from '../store/user/actions'
import { loginObject, loginProps } from '../interfaces/signupInterfaces'
import AuthFormWrapper from '../components/Form/AuthFormWrapper'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import FormikInput from '../components/FormikInputs/FormikInput'
import { FormikSubmit } from '../components/FormikInputs/FormikSubmit'

const validationSchema = yup.object().shape({
  credential: yup.string().label('credential').required(),
  password: yup
    .string()
    .label('password')
    .required()
    .min(8, 'Seems a bit short...')
    .max(24, 'Too long.')
})
const initialValues: loginObject = {
  credential: '',
  password: ''
}

const Login = () => {
  const dispatch = useThunkDispatch()
  const history = useHistory()
  return (
    <AuthFormWrapper title="Login">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          dispatch(loginUser(values))
            .then(() => history.push(`/dashboard`))
            .catch((err) => {
              console.log(err)
            })
            .finally(() => setSubmitting(false))
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
          <FormikInput
            formik_name="credential"
            labelText="Credential"
            placeholder="Username or Email"
            isRequired
          />
          <FormikInput
            formik_name="password"
            labelText="Password"
            placeholder="Password"
            isRequired
          />
          <FormikSubmit mt={4} variantColor="teal">
            Sign In
          </FormikSubmit>
        </Form>
      </Formik>
      <Box textAlign="center">
        <Text>Forgot password</Text>
        <Text>
          Not a member?{' '}
          <NavLink
            to={{
              pathname: '/signup',
              state: { errors: null, completed: false }
            }}
          >
            Sign up
          </NavLink>
        </Text>
      </Box>
    </AuthFormWrapper>
  )
}

const mapActionsToProps = {
  loginUser
}

export default connect(null, mapActionsToProps)(Login)
