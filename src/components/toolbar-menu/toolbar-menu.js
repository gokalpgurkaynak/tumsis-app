import React from 'react';
import { connect } from 'react-redux'

import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import { AuthorizedMenu } from './authorized-menu'
import UnauthorizedMenu from './unauthorized-menu'


class ToolbarMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    let menu = <UnauthorizedMenu open={this.state.open} handleRequestClose={this.handleRequestClose.bind(this)}/>;
    if (this.props.auth.token){
      menu = <AuthorizedMenu open={this.state.open} handleRequestClose={this.handleRequestClose.bind(this)}/>
    }

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={this.state.open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        {menu}        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, null)(ToolbarMenu)