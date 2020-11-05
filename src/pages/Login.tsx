import React from 'react'
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
import { loginUser } from '../actions/users'
import { StoreState } from '../redux/reducers'
import { loginObject, loginProps } from '../interfaces/signupInterfaces'

const Login = ({ loginUser, user, history }: loginProps) => {
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

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: '50%',
          height: '45vh',
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
          Sign In
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
                      isInvalid={
                        form.errors.credential && form.touched.credential
                      }
                    >
                      <Input
                        {...field}
                        id="credential"
                        size="md"
                        variant="outline"
                        placeholder="Email/Username"
                      />
                      <FormErrorMessage>
                        {form.errors.credential}
                      </FormErrorMessage>
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
                      <FormErrorMessage>
                        {form.errors.password}
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
        </Box>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }: StoreState) => {
  return { user }
}

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(Login)
