export const validate = values => {
  const errors = {}
  const requiredFields = [
    'username',
    'password',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field} is required`
    }
  })

  return errors
}