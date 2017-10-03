import { createStore, applyMiddleware } from 'redux';

import Thunk from "redux-thunk";
import throttle from 'lodash/throttle'

import rootReducer from '../reducers/index'
import {loadState, saveState} from './localstorage'

export const configureStore = () => {
  const persistedState = loadState()
  
  const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
  
  const store = createStoreWithMiddleware(
    rootReducer, 
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
    // Throttle the save operation at most to 1000ms
  store.subscribe(
    throttle(
      () => saveState({
        auth: store.getState().auth
        },
        1000
      )
    )
  )

  return store;
}
