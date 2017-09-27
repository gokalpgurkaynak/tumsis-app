import { combineReducers } from 'redux'
import { reducerManagementForActionType } from '../pages/management/reducers/index'

const rootReducer = combineReducers({
  management: reducerManagementForActionType
})

export default rootReducer
