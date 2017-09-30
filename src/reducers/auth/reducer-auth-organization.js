import { ORGANISATION_ACTION_SET } from '../../actions/types'

const initialState = {
  rank: null,
  unit: null,
}

export function organizationReducer(state = initialState, action) {
  switch (action.type) {
    case ORGANISATION_ACTION_SET:
      return {...state, rank: action.payload.rank, unit: action.payload.unit}
    default:
      return state
  }
}

