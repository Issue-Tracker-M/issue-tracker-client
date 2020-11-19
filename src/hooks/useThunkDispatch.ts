import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import store from '../store'

export function useThunkDispatch() {
  const dispatch: ThunkDispatch<typeof store, any, AnyAction> = useDispatch()
  return dispatch
}
