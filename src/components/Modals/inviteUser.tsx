import React from 'react'
import {
  Modal,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormControl,
  FormErrorMessage,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
// import { useThunkDispatch } from '../../hooks/useThunkDispatch'

interface inviteUserProps {
  isOpen: boolean
  onClose(): any
}

export interface inviteUserObject {
  email: string
}

const InviteUser = ({ isOpen, onClose }: inviteUserProps) => {
  // const dispatch = useThunkDispatch()
  const validationSchema = yup.object().shape({
    email: yup.string().email().required()
  })

  const initialValues: inviteUserObject = {
    email: ''
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Invite User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              // const payload = { name: values.email, labels: [] }
              // dispatch(addWorkspace(payload))
              // onClose()
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
              <label htmlFor="email">
                {/* Name{' '} */}
                <Field name="email">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        {...field}
                        id="email"
                        size="md"
                        variant="outline"
                        placeholder="Email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </label>

              <Button mt={4} variantColor="teal" type="submit">
                Invite User
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default InviteUser
