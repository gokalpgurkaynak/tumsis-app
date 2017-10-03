import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";


class PrivateRoute extends Component {
  render() {
    const {component: Component, ...rest} = this.props;
    return (
      <Route
        {...rest}
        render={(props) => this.props.token !== null
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} 
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps, null)(PrivateRoute);