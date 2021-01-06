import { Heading, Input } from '@chakra-ui/react'
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

  return task?.loaded ? (
    <DatePicker
      onChange={(date: Date) => {
        dispatch(patchTask({ _id: task._id, due_date: date }))
      }}
      selected={new Date((task.due_date as unknown) as string)}
      showTimeSelect
      customInput={<Input />}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  ) : (
    <Heading>Something went wrong!</Heading>
  )
}
export default TaskDatePicker
