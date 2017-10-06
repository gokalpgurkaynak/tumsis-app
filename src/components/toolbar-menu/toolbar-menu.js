import React from 'react';
import { connect } from 'react-redux'

import AuthorizedMenu from './authorized-menu'

class ToolbarMenu extends React.Component {


  render() {
    return this.props.auth.token ? <AuthorizedMenu /> : false;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, null)(ToolbarMenu)