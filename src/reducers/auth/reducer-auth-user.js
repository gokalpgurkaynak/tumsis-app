import { AUTH_ACTION_SET_USER } from '../../actions/types'

const initialState = {
  username:undefined,
  displayName:undefined,
  role:undefined
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION_SET_USER:
      return {
        ...state, 
        username: action.payload.username, 
        displayName: action.payload.displayName,
        role: action.payload.role
      }

    default:
      return state
  }
}
