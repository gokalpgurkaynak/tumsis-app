import { 
  SNACKBAR_OPEN,
  SNACKBAR_CLOSE,
  SNACKBAR_SET_DIRECTION
} from '../../actions/types'


const initialState = {
  open: false,
  direction: 'down',
  message: null
}

function snackbarReducer(state = initialState, action) {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return {
        ...state, 
        open: true,
        message: action.payload.message
      }

    case SNACKBAR_CLOSE:
      return {
        ...state, 
        open: false,
      }

    case SNACKBAR_SET_DIRECTION:
      return {...state, message: action.payload.direction}
      
    default:
      return state
  }
}

export {
  snackbarReducer
}