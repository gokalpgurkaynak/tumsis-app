/* eslint-disable flowtype/require-valid-file-annotation */

import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import withRoot from '../components/withRoot'
import Snackbar from '../components/snackbar/snackbar'

import Login from './login/login'
import Page404 from './page404/page404'
import Terminal from './terminal/terminal'
import Grommet from './grommet/index'

import { loadLocales } from '../actions/index'  

import PrivateRoute from '../components/private-route'

class Index extends Component {

  render() {
    const { terminal } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/grommet" component={Grommet} />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loadLocales
    },
    dispatch
  )
}

Index = withRouter(connect(mapStateToProps, mapDispatchToProps) (Index))
export default withRoot(Index);
