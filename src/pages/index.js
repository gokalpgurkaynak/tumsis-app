/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";

import withRoot from '../components/withRoot'
import Snackbar from '../components/snackbar/snackbar'

import Management from './management/index'
import DeviceA from './device-a/index'
import Login from './login/login'
import Page404 from './page404/page404'

import PrivateRoute  from '../components/private-route'

class Index extends Component {

  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path="/apps/management" component={Management}/>
          <Route path="/apps/management-test" component={Management}/>
          <PrivateRoute path="/apps/device-a" component={DeviceA} />
          <Route path="/login" component={Login} />
          <Route component={Page404} />
        </Switch>
        <Snackbar></Snackbar>
      </div>
    );
  }
}

export default withRoot(Index);
