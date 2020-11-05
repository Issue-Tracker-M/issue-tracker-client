import React from 'react'
import { Field } from 'formik'
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/core'

interface IProps {
  helperText?: string
  labelText: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  name: string
}

export default function StringField({
  helperText,
  name,
  type,
  placeholder,
  labelText
}: IProps) {
  const helperTextId = `${name}-helper-text`
  return (
    <Field name={name}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{labelText}</FormLabel>
          <Input
            {...field}
            type={type}
            id={name}
            placeholder={placeholder}
            aria-describedby={helperTextId}
          />
          {helperText && (
            <FormHelperText id={helperTextId}>{helperText}</FormHelperText>
          )}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}
