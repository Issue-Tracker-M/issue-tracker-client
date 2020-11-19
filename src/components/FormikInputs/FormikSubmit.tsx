import { Button, ButtonProps } from '@chakra-ui/core'
import { FormikErrors, FormikTouched, useFormikContext } from 'formik'
import React from 'react'

interface IProps extends ButtonProps {}

const anyErrors = (errors: FormikErrors<unknown>) => {
  return Object.values(errors).some(Boolean)
}

const allFieldsTouched = (touched: FormikTouched<unknown>) => {
  return !Object.values(touched).every(Boolean)
}

export const FormikSubmit = <FormValues extends unknown>(
  props: Omit<IProps, 'type'>
) => {
  const form = useFormikContext<FormValues>()
  return (
    <Button
      isLoading={form.isSubmitting}
      type="submit"
      isDisabled={allFieldsTouched(form.touched) || anyErrors(form.errors)}
      {...props}
    />
  )
}
