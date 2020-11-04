import React from 'react'
import { connect } from 'react-redux'
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
} from '@chakra-ui/core'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { createWorkspace } from '../actions/workspaces'
import { StoreState } from '../redux/reducers'
import {
  createWorkspaceObject,
  createWorkspaceModalProps
} from '../interfaces/workSpaceInterfaces'

const CreateWorkspaceModal = ({
  createWorkspace,
  isOpen,
  onClose
}: createWorkspaceModalProps) => {
  const validationSchema = yup.object().shape({
    name: yup.string().label('name').required()
    // labels: yup.array().label('labels').required()
  })

  const initialValues: createWorkspaceObject = {
    name: ''
    // labels: []
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add WorkSpace</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              const payload = { name: values.name, labels: [] }
              createWorkspace(payload)
              onClose()
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
              <label htmlFor="name">
                {/* Name{' '} */}
                <Field name="name">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        {...field}
                        id="name"
                        size="md"
                        variant="outline"
                        placeholder="Name"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </label>

              {/* <label htmlFor="labels">
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
              </label> */}

              <Button mt={4} variantColor="teal" type="submit">
                Create Workspace
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const mapStateToProps = ({ workspaces }: StoreState) => {
  return { workspaces }
}

const mapActionsToProps = {
  createWorkspace
}

export default connect(mapStateToProps, mapActionsToProps)(CreateWorkspaceModal)
