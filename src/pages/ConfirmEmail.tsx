import { Button } from '@chakra-ui/core'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import {
  RouteComponentProps,
  useHistory,
  useRouteMatch
} from 'react-router-dom'
import { confirmEmail } from '../actions/users'

interface IProps extends RouteComponentProps<any> {
  confirmEmail(token: string, history: any): any
}

export const ConfirmEmail = ({ confirmEmail }: IProps) => {
  const history = useHistory()
  const {
    params: { token }
  } = useRouteMatch<{ token: string }>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log(confirmEmail(token, history))
  }, [confirmEmail, history, token])
  return (
    <pre>
      {JSON.stringify(token, null, 2)}
      <Button>BLOOP</Button>
    </pre>
  )
}

export default connect(null, { confirmEmail })(ConfirmEmail)
