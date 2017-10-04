import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react';

import { 
  Button,
  Grid,
  Paper,
  Typography
} from 'material-ui'
import { withStyles } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';


import { Link } from 'react-router-dom'

import { renderTextField } from '../../components/utils/form-utils'
import { validate } from './login-form-validate'
 
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    'align-items': 'center'
  },
  button: {
    margin: theme.spacing.unit * 3
  }
});

class LoginForm extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    const classes = this.props.classes;
    
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography type="headline" component="h3">
            Login
          </Typography>
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
              <Button 
                raised 
                disabled={pristine || submitting} 
                onClick={handleSubmit} 
                className={classes.button}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  validate
})(LoginForm)

export default withStyles(styles)(LoginForm);