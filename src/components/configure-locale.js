import en from 'react-intl/locale-data/en'
import tr from 'react-intl/locale-data/tr'
import { addLocaleData } from 'react-intl'

export const configureLocale = () =>  addLocaleData([...en, ...tr])

