import { createStore, applyMiddleware } from 'redux';
import Thunk from "redux-thunk";
import throttle from 'lodash/throttle'

import { rootReducer } from '../reducers/index'

import {loadState, saveState} from './localstorage'
import signalr from '../middlewares/signalr';

export const configureStore = () => {
  const persistedState = loadState()
  
  const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore)
  
  const store = createStoreWithMiddleware(
    rootReducer, 
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
    // Throttle the save operation at most to 1000ms
  store.subscribe(
    throttle(
      () => saveState(store.getState(),1000)
    )
  )

  signalr(store,"http://localhost:5561/signalr");

  return store;
}
