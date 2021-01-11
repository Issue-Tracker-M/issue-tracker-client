import { CloseIcon } from '@chakra-ui/icons'
import {
  Button,
  Checkbox,
  Heading,
  IconButton,
  Input,
  Tooltip
} from '@chakra-ui/react'
import React, { FC } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { useSelector } from 'react-redux'
import { useThunkDispatch } from '../../hooks/useThunkDispatch'
import { taskSelectors } from '../../store/entities/tasks'
import { patchTask } from '../../store/thunks'
import { Task } from '../../store/workspace/types'

interface IProps {
  task_id: Task['_id']
}

const TaskDatePicker: FC<IProps> = ({ task_id }) => {
  const task = useSelector((state) => taskSelectors.selectById(state, task_id))
  const dispatch = useThunkDispatch()

  if (!task?.loaded) return <Heading>Something went wrong!</Heading>

  return task.due_date ? (
    <>
      <DatePicker
        onChange={(date: Date) => {
          dispatch(patchTask({ _id: task._id, due_date: date }))
        }}
        selected={new Date(task.due_date)}
        showTimeSelect
        customInput={<Input />}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <IconButton
        aria-label="Remove due date"
        onClick={(e) => {
          dispatch(
            patchTask({ _id: task._id, due_date: null, complete: false })
          )
        }}
        icon={<CloseIcon color="gray.500" />}
        // borderRadius="50%"
        size="sm"
        variant="ghost"
      />
      <Tooltip label="Mark task completed">
        <Checkbox
          size="lg"
          defaultIsChecked={task.complete}
          onChange={(e) => {
            dispatch(patchTask({ _id: task._id, complete: e.target.checked }))
          }}
        />
      </Tooltip>
    </>
  ) : (
    <Button
      onClick={(e) => {
        dispatch(patchTask({ _id: task._id, due_date: new Date() }))
      }}
    >
      Add due date
    </Button>
  )
}
export default TaskDatePicker
