import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react';
import { Button } from 'material-ui'

import { renderTextField } from '../../components/utils/form-utils'
import { validate } from './login-form-validate'

class LoginForm extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <Field
            name='username'
            component={renderTextField}
            label='Username'
          />
        </div>
        <div>
          <Field
            name='password'
            component={renderTextField}
            type='password'
            label="Password"
          />
        </div>
        <Button raised disabled={pristine || submitting} onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    )
  }
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  validate
})(LoginForm)

export default LoginForm;