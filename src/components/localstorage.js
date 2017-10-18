import messages from '../locales/messages'
import { flattenMessages } from '../locales/locale-utils'

const defaultLocale = 'tr'
const flatMessages = flattenMessages(messages[defaultLocale])

export const loadState = () => {
  const defaultState = {
    intl: {
      defaultLocale,
      locale: defaultLocale,
      messages: flatMessages,
    }
  }

  let state = { ...defaultState}
  
  try {
    const serializedState = localStorage.getItem('tumsis-state');
    if (serializedState !== null) {
      state = {
        ...JSON.parse(serializedState),
        ...defaultState
      } 
    }
    return state;    
  }
  catch(err){
    return state;
  }
}

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('tumsis-state', serializedState)
    }
    catch(err){
      console.log('Error saving state to local storage', JSON.stringify(err))
    }
}