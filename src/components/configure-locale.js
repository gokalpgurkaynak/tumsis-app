import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import trLocaleData from 'react-intl/locale-data/tr'

export const configureLocale = () =>  {
    console.log('configure locale')
    addLocaleData([...enLocaleData, ...trLocaleData])
}
