import React from 'react'
import { Formik, Form } from 'formik'
import { string, object } from 'yup'
import { Button } from '@chakra-ui/core'
import StringField from '../components/FormFields/StringField'

const validationSchema = object().shape({
  email: string().label('Email').email().required()
})

export default function ForgotPassword() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <StringField
            name="forgot_password"
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
  )
}
