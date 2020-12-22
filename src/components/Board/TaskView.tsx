import { AddIcon, ChevronDownIcon, WarningTwoIcon } from '@chakra-ui/icons'
import DateTimePicker from 'react-datetime-picker'
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
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Skeleton,
  Text,
  Textarea
} from '@chakra-ui/react'
import React, { FC, useEffect } from 'react'
import { useThunkDispatch } from '../../hooks/useThunkDispatch'
import { fetchTask, patchTask } from '../../store/thunks'
import { Priority, Stage, Task, TaskStub } from '../../store/workspace/types'
import MemberSelect from '../MemberSelect'
import MemberPreview from './MemberPreview'
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
          <WarningTwoIcon color="red.500" fontSize="md" />
          <Editable
            paddingLeft="1rem"
            defaultValue={task.title}
            onSubmit={(value) => {
              if (value !== task.title)
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
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" pl="2em">
                  <MemberPreview members={task.users} />
                  <MemberSelect
                    taskId={task._id}
                    as={IconButton}
                    icon={<AddIcon />}
                    borderRadius="50%"
                    size="sm"
                  />
                </Box>
                <MemberSelect
                  taskId={task._id}
                  as={Button}
                  colorScheme="teal"
                  size="sm"
                  variant="outline"
                />
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                paddingTop="1rem"
              >
                <WarningTwoIcon color="red.500" />
                <Heading size="sm" paddingLeft="1rem">
                  Description
                </Heading>
              </Box>
              <Editable
                paddingLeft="2rem"
                defaultValue={task.description || ''}
                placeholder="Add a more detailed description..."
                onKeyPress={(e) => (e.persist(), console.log(e))}
                onSubmit={(value) => {
                  if (value != task.description)
                    dispatch(patchTask({ _id: task._id, description: value }))
                }}
              >
                <EditablePreview
                  as={Text}
                  backgroundColor="gray.100"
                  margin=".5rem 0"
                  padding=".5rem"
                  minH="100px"
                  width="100%"
                />
                <EditableInput
                  as={Textarea}
                  margin=".5rem 0"
                  padding=".5rem"
                  minH="100px"
                  width="100%"
                />
              </Editable>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                paddingTop="1rem"
              >
                <WarningTwoIcon color="red.500" />
                <Heading size="sm" paddingLeft="1rem">
                  <Menu>
                    Priority:
                    <MenuButton
                      textTransform="capitalize"
                      as={Button}
                      variant="outline"
                      size="sm"
                      rightIcon={<ChevronDownIcon />}
                    >
                      {task.priority !== undefined
                        ? Object.keys(Priority)[+task.priority]
                        : 'Not set'}
                    </MenuButton>
                    <MenuList>
                      <MenuOptionGroup
                        title="Priority"
                        type="radio"
                        defaultValue={['1']}
                      >
                        {Object.entries(Priority).map((p) => (
                          <MenuItemOption
                            value={p[1]}
                            textTransform="capitalize"
                            key={p[1] + task._id}
                          >
                            {p[0]}
                          </MenuItemOption>
                        ))}
                      </MenuOptionGroup>
                    </MenuList>
                  </Menu>
                </Heading>
              </Box>
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
