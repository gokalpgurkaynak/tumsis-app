import { messages } from '../locales/tr-TR.js'

const initialState = {
  intl: {
    defaultLocale: 'tr',
    locale: 'tr',
    messages,
  }
}


export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tumsis-state')
    if (serializedState === null){
      return initialState
    }
    return JSON.parse(serializedState)
  }
  catch(err){
    return initialState
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