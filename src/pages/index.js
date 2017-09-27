/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import { Route } from "react-router-dom";

import withRoot from '../components/withRoot'

import Management from './management/index'

class Index extends Component {
  render() {
    return (
      <div>
        <Route path="/apps/managment" component={Management} />
        <Route path="/apps/device-a" component={Management} />
      </div>
    );
  }
}

export default withRoot(Index);
