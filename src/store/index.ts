import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV === 'test' ? (n: any) => n : composeWithDevTools()
  )
)

export default store

/* 
store shape:{
  user {
    id
    email
    username
    workspaces:[{_id, name}]
    first_name
    last_name
  }
  current_workspace{
    name
    admin
    users:[_id, name]
    labels:[{_id, name, color}]
    todo:[{_id, name, labels:[id]}]
    in_progress:[task]
    completed:[task]
  }
}
*/
