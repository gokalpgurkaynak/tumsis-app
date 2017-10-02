import { combineReducers } from 'redux'
import { managementReducer } from './management/reducer-management'
import { authReducer  } from './auth/reducer-auth'
import { snackbarReducer } from './snackbar/reducer-snackbar'

const rootReducer = combineReducers({
  auth: authReducer,
  management: managementReducer,
  snackbar: snackbarReducer
})

export default rootReducer
