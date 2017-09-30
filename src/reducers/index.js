import { combineReducers } from 'redux'
import { managementReducer } from './management/reducer-management'
import { authReducer  } from './auth/reducer-auth'

const rootReducer = combineReducers({
  auth: authReducer,
  management: managementReducer,
})

export default rootReducer
