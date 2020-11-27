import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { confirmEmail } from '../store/user/actions'
import { useThunkDispatch } from '../hooks/useThunkDispatch'

export const ConfirmEmail = () => {
  const history = useHistory()
  const dispatch = useThunkDispatch()
  const {
    params: { token }
  } = useRouteMatch<{ token: string }>()
  const [loading, setLoading] = useState(false)
  console.log(loading)
  useEffect(() => {
    setLoading(true)
    dispatch(confirmEmail(token, history)).finally(() => setLoading(false))
  }, [dispatch, history, token])
  return (
    <pre>
      {JSON.stringify(token, null, 2)}
      <Button>BLOOP</Button>
    </pre>
  )
}

export default ConfirmEmail
