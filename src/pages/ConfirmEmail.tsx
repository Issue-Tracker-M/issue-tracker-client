import { Button } from '@chakra-ui/core'
import React, { useEffect, useState } from 'react'
import store from '../store'
import {
  useHistory,
  useRouteMatch
} from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import { confirmEmail } from '../store/user/actions'
import { AnyAction } from 'redux'
import { useDispatch } from 'react-redux'

export const ConfirmEmail = () => {
  const history = useHistory()
  const dispatch: ThunkDispatch<typeof store, any, AnyAction> = useDispatch()
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
