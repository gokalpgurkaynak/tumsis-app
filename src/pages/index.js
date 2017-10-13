/* eslint-disable flowtype/require-valid-file-annotation */

import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {
  Route,
  Switch
} from "react-router-dom";

import withRoot from '../components/withRoot'
import Snackbar from '../components/snackbar/snackbar'

import Login from './login/login'
import Page404 from './page404/page404'
import Terminal from './terminal/terminal'

import PrivateRoute from '../components/private-route'

class Index extends Component {

  render() {
    const { terminal } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path={`/${terminal.name}`} component={Terminal}/>
          <Route component={Page404} />
        </Switch>
        <Snackbar></Snackbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    terminal: state.terminal
  }
}

Index = connect(mapStateToProps, undefined) (Index)
export default withRoot(Index);
