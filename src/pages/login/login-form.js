import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { FormattedMessage } from 'react-intl';

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

import { login } from '../../actions/index'
 
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
  submitLoginForm = (values) => {
    this.props.login(values.username, values.password);
  }


  render() {
    const { pristine, reset, submitting, handleSubmit, invalid } = this.props
    const classes = this.props.classes;
    
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography type="headline" component="h3">
            <FormattedMessage
              id='login.loginText'
            />
          </Typography>
            <form>
              <div>
                <Field
                  name='username'
                  component={renderTextField}
                  label={<FormattedMessage id='login.userName'/>}
                />
              </div>
              <div>
                <Field
                  name='password'
                  component={renderTextField}
                  type='password'
                  label={<FormattedMessage id='login.password'/>}
                />
              </div>
              <Button 
                raised 
                disabled={pristine || submitting || invalid} 
                onClick={ handleSubmit(this.submitLoginForm) } 
                className={classes.button}
              >
                <FormattedMessage id='login.loginText'/>
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    )
  }

  handleRequestCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ notificationOpen: false });
  };
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login-form',
  validate
})(LoginForm)

// map action creators to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  )
}

LoginForm = connect(null, mapDispatchToProps)(LoginForm)

LoginForm = withStyles(styles)(LoginForm);

export default LoginForm

