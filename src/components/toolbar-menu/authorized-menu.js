import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import { logout } from '../../actions/index'

class AuthorizedMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      open: false,
    }
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };


  handleRequestLogout = () => {
    this.props.logout();
    this.setState({ open: false});
  }

  render() {
    return (
      <div>
      <IconButton
        color="contrast"
        aria-label="More"
        aria-owns={this.state.open ? 'long-menu' : null}
        aria-haspopup="true"
        onClick={this.handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={this.state.open}
        onRequestClose={this.handleRequestClose}
        anchorEl={this.state.anchorEl}
      >
        <MenuItem onClick={this.handleRequestLogout}>Logout</MenuItem>
        <MenuItem onClick={this.handleRequestSelectLanguage}>Languge</MenuItem>
      </Menu>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      logout
    },
    dispatch
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

export default connect(null, mapDispatchToProps)(AuthorizedMenu)
