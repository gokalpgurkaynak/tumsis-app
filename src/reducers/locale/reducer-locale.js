import { LOAD_LOCALES } from '../../actions/types'

const initialState = {
  management: undefined,
}

function managementReducer(state = initialState, action) {
  switch (action.type) {
    case MANAGEMENT_ACTION_FOO:
      return {...state, management: action.payload.data}
    default:
      return state
  }
}

export {
  managementReducer
}