export const validate = values => {
  console.log('values', values)
  const errors = {}
  const requiredFields = [
    'username',
    'password',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  console.log('errors', errors)
  return errors
}