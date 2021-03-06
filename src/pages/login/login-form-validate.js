import React from 'react'
import { FormattedMessage } from 'react-intl';

export const validate = values => {
  const errors = {}
  const requiredFields = [
    {id: 'username', label: 'login.userName'},
    {id: 'password', label: 'login.password'},
  ]
  requiredFields.forEach(field => {
    if (!values[field.id]) {
      errors[field.id] = <FormattedMessage id='form.required' values={{value: <FormattedMessage id={field.label}/>}} />
    }
  })

  return errors
}