import React from 'react'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import { NavLink, useHistory } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import { object, string } from 'yup'
import { loginUser } from '../store/user/actions'
import { loginObject } from '../interfaces/signupInterfaces'
import AuthFormWrapper from '../components/Form/AuthFormWrapper'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import FormikInput from '../components/FormikInputs/FormikInput'
import { FormikSubmit } from '../components/FormikInputs/FormikSubmit'

const validationSchema = object().shape({
  credential: string().label('credential').required(),
  password: string()
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
            justifyContent: 'flex-start',
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
            type="password"
            isRequired
          />
          <FormikSubmit mt={4} colorScheme="teal">
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
