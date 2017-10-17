import { SIGNALR_NOTIFICATION } from '../../actions/types'

const initialState = {
    list: []
}

export const signalrReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNALR_NOTIFICATION:
      return { list: [ ...state.list, ...action.payload.list]}
    default:
      return state
  }
}

