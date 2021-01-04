import { Input } from '@chakra-ui/react'
import React, { FC } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { Task } from '../../store/workspace/types'

interface IProps {
  due_date: Task['due_date']
  onChange: ReactDatePickerProps['onChange']
}

const TaskDatePicker: FC<IProps> = ({ due_date, onChange }) => {
  return (
    <DatePicker
      onChange={onChange}
      selected={due_date}
      showTimeSelect
      customInput={<Input />}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  )
}
export default TaskDatePicker
