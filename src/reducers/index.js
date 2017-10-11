import { combineReducers } from 'redux'
import { managementReducer } from './management/reducer-management'
import { authReducer  } from './auth/reducer-auth'
import { snackbarReducer } from './snackbar/reducer-snackbar'
import { reducer as formReducer } from 'redux-form'
import { intlReducer } from 'react-intl-redux'


export const rootReducer = combineReducers({
  auth: authReducer,
  management: managementReducer,
  snackbar: snackbarReducer,
  form: formReducer,
  intl: intlReducer
})
