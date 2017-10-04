import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from "react-router-dom";

import { login } from '../../actions/index'

import LoginForm from './login-form'

class Login extends Component {
  handleSubmit = (values) => {
    this.props.login(values.username, values.password)

  }

  render() {
      return (
        <Route
          render={(props) => this.props.auth.token !== null
            ? <Redirect to={{pathname: '/apps/management/page1', state: {from: props.location}}} />
            : <LoginForm onSubmit={this.handleSubmit}></LoginForm>} 
        />      
      )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      login
    },
    dispatch
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
