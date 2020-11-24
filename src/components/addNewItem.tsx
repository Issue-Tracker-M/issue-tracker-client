import React, { useState } from 'react'
import {
  Button
} from '@chakra-ui/core'
import { NewItemForm } from './Form/NewItemForm'

interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

export const AddNewitem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toggleButtonText, dark } = props

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <Button onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </Button>
  )
}