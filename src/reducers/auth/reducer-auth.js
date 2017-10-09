import { organizationReducer } from './reducer-auth-organization'
import { userReducer } from './reducer-auth-user'

import { 
  AUTH_ACTION_SET_TOKEN,
  AUTH_ACTION_SET_USER,
  AUTH_ACTION_SET_ORGANIZATION
} from '../../actions/types'


const initialState = {
  user: undefined,
  organisation: undefined,
  token: undefined,
  cypher: undefined,
  someKey: undefined,
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION_SET_ORGANIZATION:
      return {...state, organisation: organizationReducer(state.organisation, action)}

    case AUTH_ACTION_SET_USER:
      return {...state, user: userReducer(state.user, action)}

    case AUTH_ACTION_SET_TOKEN:
      return {...state, token: action.payload.token}

    default:
      return state
  }
}

export {
  authReducer
}