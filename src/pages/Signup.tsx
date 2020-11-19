/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { NavLink, useHistory } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'
import StringField from '../components/FormikInputs/FormikInput'
import AuthFormWrapper from '../components/Form/AuthFormWrapper'
import { FormikSubmit } from '../components/FormikInputs/FormikSubmit'
import { Box, Text } from '@chakra-ui/core'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { signupUser } from '../store/user/actions'

const validationSchema = object().shape({
  first_name: string().label('First Name').required(),
  last_name: string().label('Last Name').required(),
  username: string().label('Username').required(),
  email: string().label('Email').email().required(),
  password: string()
    .label('Password')
    .required('Please enter a password')
    .min(8, 'At least 8 characters')
    .max(64, 'Too long.'),
  confirmPassword: string()
    .required('Please confirm your password')
    .label('Confirm Password')
    .test('passwords-match', 'Password do not match', function (value) {
      return this.parent.password === value
    })
})
const initialValues = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const dispatch = useThunkDispatch()
  const history = useHistory()
  return (
    <AuthFormWrapper title="Sign up">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true)
          dispatch(
            signupUser({
              first_name: values.first_name,
              last_name: values.last_name,
              username: values.username,
              email: values.email,
              password: values.password
            })
          )
            .then(() => history.push('/dashboard'))
            .catch((e) => console.error('HERE', e))
            .finally(() => actions.setSubmitting(false))
        }}
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
            formik_name="first_name"
            labelText="First Name"
            type="text"
            placeholder="First Name"
            isRequired
          />
          <StringField
            formik_name="last_name"
            labelText="Last Name"
            type="text"
            placeholder="Last Name"
            isRequired
          />
          <StringField
            formik_name="username"
            labelText="Username"
            type="text"
            placeholder="Username"
            isRequired
          />
          <StringField
            formik_name="email"
            labelText="Email"
            type="email"
            placeholder="Email"
            isRequired
          />
          <StringField
            formik_name="password"
            labelText="Password"
            type="password"
            placeholder="Password"
            isRequired
          />
          <StringField
            formik_name="confirmPassword"
            labelText="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            isRequired
          />
          <FormikSubmit mt={4} variantColor="teal">
            Sign Up
          </FormikSubmit>
        </Form>
      </Formik>
      <Box css={{ textAlign: 'center' }}>
        <NavLink
          to={{ pathname: '/forgot_password' }}
          css={css`
            color: #0099ff;
          `}
        >
          Forgot password
        </NavLink>
        <Text>
          Already a member?{' '}
          <NavLink
            to={{
              pathname: '/login',
              state: { errors: null, completed: false }
            }}
          >
            Sign in
          </NavLink>
        </Text>
      </Box>
    </AuthFormWrapper>
  )
}

export default SignUp
