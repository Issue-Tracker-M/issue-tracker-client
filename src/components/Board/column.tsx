import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { string, object } from 'yup'
import StringField from '../Form/StringField'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Select
} from '@chakra-ui/core'
import Card from './card'

const data = {
  lists: [
    {
      id: '0',
      title: 'Sleep',
      description: 'Things I want to do',
      due_date: 'some date',
      priority: 'High',
      column: 'To do'
    },
    {
      id: '1',
      title: 'Work',
      description: 'Things I dont want to do',
      due_date: 'some date',
      priority: 'High',
      column: 'In Progress'
    },
    {
      id: '2',
      title: 'Dance',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '3',
      title: 'Party',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '4',
      title: 'Do laundry',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '5',
      title: 'Search for round humans',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '6',
      title: 'Fight dinosaurs',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'In Progress'
    },
    {
      id: '7',
      title: 'Kill villains',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'To do'
    },
    {
      id: '8',
      title: 'Dance some more',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    },
    {
      id: '9',
      title: 'Dance a bit more',
      description: 'Things I might do',
      due_date: 'some date',
      priority: 'High',
      column: 'Completed'
    }
  ]
}

interface ColumnProps {
  text: string
  index: number
  id: string
}

const initialValue = {
  title: '',
  description: '',
  due_date: new Date(),
  workspace: '',
  priority: 1,
  labels: [],
  users: [],
  comments: []
}

const Column = ({ text, index, id }: ColumnProps) => {
  const [open, setOpen] = useState(false)
  return (
    <Box
      padding={3}
      minWidth="32%"
      minHeight={4}
      display={{ md: 'flex' }}
      flexDirection={{ md: 'column' }}
      alignItems={{ md: 'center' }}
    >
      <Text mb={2} fontWeight="bold" fontSize="sm">
        {text}
      </Text>
      {data.lists.map((task, i) =>
        task.column === text ? (
          <Card
            title={task.title}
            priority={task.priority}
            key={task.id}
            due_date={task.due_date}
            description={task.description}
          />
        ) : null
      )}
      {/* <AddNewitem toggleButtonText='+ Add another task' onAdd={() => {}} /> */}
      <Text
        color="grey"
        cursor="pointer"
        onClick={() => setOpen(true)}
        mb={2}
        fontSize="sm"
      >
        + Add Task
      </Text>
      <Drawer
        isOpen={open}
        placement="right"
        onClose={() => setOpen(false)}
        size="md"
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Formik
              initialValues={initialValue}
              // validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                console.log(values)
                // Axios.post(`${baseUrl}/auth/forgot_password`, {
                //   email: values.email
                // })
                //   .then((res) => {
                //     console.log(res)
                //   })
                //   .catch(console.error)
                //   .finally(() => actions.setSubmitting(false))
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <StringField
                    name="title"
                    labelText="Title"
                    helperText="Enter title of task"
                    type="text"
                  />
                  <StringField
                    name="description"
                    labelText="Description"
                    helperText="Enter description of task"
                    type="text"
                  />
                  {/* <StringField
                    name="due_date"
                    labelText="Due date"
                    helperText="Enter due date of task"
                    type="text"
                  /> */}

                  <Field name="due_date">
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={
                          form.errors.due_date && form.touched.due_date
                        }
                      > 
                      <FormLabel {...field} htmlFor="due_date">Due date
                        <DatePicker selected={new Date()} onChange={date => console.log(date)} />
                        <FormHelperText>Select a due date</FormHelperText>
                        <FormErrorMessage>
                          {form.errors.due_date}
                        </FormErrorMessage>
                        </FormLabel>
                      </FormControl>
                    )}
                  </Field>
                  
                  <Field name="priority">
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={
                          form.errors.priority && form.touched.priority
                        }
                      > 
                      <FormLabel {...field} htmlFor="priority">Priority
                        <Select placeholder="Select option">
                          <option value={1}>High</option>
                          <option value={2}>Medium</option>
                          <option value={3}>Low</option>
                        </Select>
                        <FormHelperText>Select prority level</FormHelperText>
                        <FormErrorMessage>
                          {form.errors.priority}
                        </FormErrorMessage>
                        </FormLabel>
                      </FormControl>
                    )}
                  </Field>
                  
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
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Column
