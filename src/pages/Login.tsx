import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { NavLink } from 'react-router-dom'
import {
  Input,
  Button,
  FormControl,
  Box,
  FormErrorMessage
} from '@chakra-ui/core'
import * as yup from 'yup'
import { loginUser } from '../store/user/actions'
import { StoreState } from '../store/reducers'
import { loginObject, loginProps } from '../interfaces/signupInterfaces'
import AuthFormWrapper from '../components/Form/AuthFormWrapper'

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

const Login = ({ loginUser, history }: loginProps) => {
  const [loading, setLoading] = useState(false)

  return (
    <AuthFormWrapper title="Login">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          loginUser(
            {
              credential: values.credential,
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
          <label htmlFor="credential">
            Credential{' '}
            <Field name="credential">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.credential && form.touched.credential}
                >
                  <Input
                    {...field}
                    id="credential"
                    size="md"
                    variant="outline"
                    placeholder="Email/Username"
                  />
                  <FormErrorMessage>{form.errors.credential}</FormErrorMessage>
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
          </label>

          <Button mt={4} variantColor="teal" isLoading={loading} type="submit">
            Sign In
          </Button>
        </Form>
      </Formik>
      <div style={{ textAlign: 'center' }}>
        <p>Forgot password</p>
        <p>
          Not a member?{' '}
          <NavLink
            to={{
              pathname: '/signup',
              state: { errors: null, completed: false }
            }}
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </AuthFormWrapper>
  )
}

const mapActionsToProps = {
  loginUser
}

export default connect(null, mapActionsToProps)(Login)
