/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import withRoot from '../components/withRoot'

import Management from './management/index'
import DeviceA from './device-a/index'
import Login from './login/login'

import PrivateRoute  from '../components/private-route'

class Index extends Component {

  loggedIn() { return false}
  requireAuth(nextState, replace) {
    if (!this.loggedIn()) {
      replace({
        pathname: '/login'
      })
    }
  }
  
  render() {
    return (
      <Switch>
        <PrivateRoute path="/apps/management" component={Management}/>
        <PrivateRoute path="/apps/device-a" component={DeviceA} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default withRoot(Index);
