import { 
  SNACKBAR_OPEN,
  SNACKBAR_CLOSE
} from '../../actions/types'


const initialState = {
  open: false,
  direction: 'down',
  message: undefined
}

function snackbarReducer(state = initialState, action) {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return {
        ...state, 
        open: true,
        message: action.payload.message,
        type: action.payload.type
      }

    case SNACKBAR_CLOSE:
      return {
        ...state, 
        open: false,
      }

    default:
      return state
  }
}

export {
  snackbarReducer
}