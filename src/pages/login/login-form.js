import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { submit } from 'redux-form'


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
import LoginFormSnackbar from './login-form-snackbar'
import { login } from './login-form-action'

import { setCredentials } from '../../actions/index'
 
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

  constructor(props){
    super(props)

    this.state = {
      notificationOpen: false,
      notificationMessage : ''
    }
  }

  submitLoginForm = (values) => {
    console.log(JSON.stringify(values, null, 2))
    login(values.username, values.password)
      .then(({token, userName, role, displayName}) => {
          this.setState(
            {
              notificationOpen: true,
              notificationMessage: `${userName} logged in successfully!`,
              type: 'info'
            }
          )
         this.props.setCredentials(
            {
              token,
              userName,
              role,
              displayName
            }
          )
      })
      .catch(err => {
        console.log(err)
        this.setState(
          {
            notificationOpen: true,
            notificationMessage: err,
            type: 'error'
          }
        )
      })
  }


  render() {
    const { pristine, reset, submitting, handleSubmit, invalid } = this.props
    const classes = this.props.classes;
    
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography type="headline" component="h3">
            Login
          </Typography>
            <form>
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
                disabled={pristine || submitting || invalid} 
                onClick={ handleSubmit(this.submitLoginForm) } 
                className={classes.button}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
        <LoginFormSnackbar 
          open={this.state.notificationOpen} 
          message={this.state.notificationMessage}
          handleRequestClose={this.handleRequestCloseSnackbar}
          type={this.state.type}
          />
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
      setCredentials
    },
    dispatch
  )
}

LoginForm = connect(null, mapDispatchToProps)(LoginForm)

LoginForm = withStyles(styles)(LoginForm);

export default LoginForm

