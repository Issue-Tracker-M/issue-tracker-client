import { WarningTwoIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  Skeleton,
  Text,
  Textarea
} from '@chakra-ui/react'
import React, { FC, useEffect } from 'react'
import { useThunkDispatch } from '../../hooks/useThunkDispatch'
import { fetchTask, patchTask } from '../../store/thunks'
import { Stage, Task, TaskStub } from '../../store/workspace/types'
import EditableComp from '../editable'
// Load with the initial data
// Fetch the rest of the task data if it hasn't been loaded yet
// Show something to the user while it's happening
// Show full task view once it's loaded.

interface IProps {
  task: TaskStub | Task
  stage: Stage
  isOpen: boolean
  onClose: (...args: any) => any
}

const TaskView: FC<IProps> = ({ task, isOpen, onClose, stage }) => {
  const dispatch = useThunkDispatch()

  useEffect(() => {
    let mounted = true
    // If we are trying to render this and the task is not loaded => load it

    if (!task.loaded) dispatch(fetchTask(task._id))
    return () => {
      mounted = false
    }
  }, [dispatch, stage, task._id, task.loaded])
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="lg"
      onEsc={onClose}
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <WarningTwoIcon color="red.500" />
          <Editable
            paddingLeft="1em"
            defaultValue={task.title}
            submitOnBlur={false}
            onSubmit={(value) => {
              console.log(task, value)
              dispatch(patchTask({ _id: task._id, title: value }))
            }}
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </DrawerHeader>

        <DrawerBody>
          {task.loaded ? (
            <Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <WarningTwoIcon color="red.500" />
                <Heading size="sm" paddingLeft="20px">
                  Description
                </Heading>
              </Box>
              <Editable
                paddingLeft="2em"
                defaultValue={task.description || ''}
                placeholder="Add a more detailed description..."
                onSubmit={(value) => {
                  console.log(task, value)
                  dispatch(patchTask({ _id: task._id, description: value }))
                }}
              >
                <EditablePreview as={Text} />
                <EditableInput as={Textarea} />
              </Editable>
            </Box>
          ) : (
            <Skeleton />
          )}
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme="teal">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default TaskView
