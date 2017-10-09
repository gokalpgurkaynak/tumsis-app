import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Redirect } from "react-router-dom";

import LoginForm from './login-form'

class Login extends Component {

  render() {
      return (
        <Route
          render={(props) => this.props.auth.token !== undefined
            ? <Redirect to={{pathname: '/apps/management/page1', state: {from: props.location}}} />
            : <LoginForm></LoginForm>} 
        />      
      )
    }
}

// map state data as props
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, undefined)(Login)