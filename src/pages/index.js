/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import withRoot from '../components/withRoot'

import Management from './management/index'

class Index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/apps/managment" component={Management} />
        <Route path="/apps/device-a" component={Management} />
      </Switch>
    );
  }
}

export default withRoot(Index);
