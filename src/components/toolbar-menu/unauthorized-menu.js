import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Menu, { MenuItem } from 'material-ui/Menu';

import { login } from '../../actions/index'

class UnauthorizedMenu extends Component {

  componentDidMount() {
    this.props.login();
  }
  
  handleRequestLogin = () => {
    this.props.login();
  }

  render() {
    return (
      <Menu
        open={this.props.open}
        onRequestClose={this.props.handleRequestClose}
      >
        <MenuItem onClick={this.handleRequestLogin}>Login</MenuItem>
      </Menu>
    );
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

export default connect(null, mapDispatchToProps)(UnauthorizedMenu)
