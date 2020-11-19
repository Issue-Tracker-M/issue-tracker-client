import React from 'react'
import { Formik, Form } from 'formik'
import { string, object } from 'yup'
import { Button } from '@chakra-ui/core'
import StringField from '../components/FormikInputs/FormikInput'
import AuthFormWrapper from '../components/Form/AuthFormWrapper'
import Axios from 'axios'
import { baseUrl } from '../config'

const validationSchema = object().shape({
  email: string().label('Email').email().required()
})

export default function ForgotPassword() {
  return (
    <AuthFormWrapper title="Forgot password?">
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          Axios.post(`${baseUrl}/auth/forgot_password`, {
            email: values.email
          })
            .then((res) => {
              console.log(res)
            })
            .catch(console.error)
            .finally(() => actions.setSubmitting(false))
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <StringField
              formik_name="email"
              labelText="Email"
              helperText="Password reset link will be sent to this email."
              type="email"
            />
            <Button
              mt={4}
              variantColor="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </AuthFormWrapper>
  )
}
