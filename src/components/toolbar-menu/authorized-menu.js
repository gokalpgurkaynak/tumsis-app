import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormattedMessage } from 'react-intl';

import classNames from 'classnames';

import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import LogoutIcon from 'material-ui-icons/ExitToApp';
import LanguageIcon from 'material-ui-icons/Language'

import { withStyles } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';


import { logout, openSnackbar, changeLocale } from '../../actions/index'

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
  },
  iconBlue: {
    fill: blue[500],
  },
  iconHover: {
    fill: red[500],
    '&:hover': {
      fill: green[200],
    },
  },
});

class AuthorizedMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: undefined,
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

  handleRequestSelectLanguage = (locale) => {
    this.props.changeLocale(locale)
  }

  render() {
    const { classes } = this.props;
    
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
        <MenuItem onClick={this.handleRequestLogout}>
          <LogoutIcon className={classNames(classes.icon, classes.iconHover)}/>
          <FormattedMessage
            id="app.logout"
          />
        </MenuItem>
        <MenuItem onClick={() => this.handleRequestSelectLanguage('en')}>
          <LanguageIcon className={classNames(classes.icon, classes.iconHover)}/>
          English
        </MenuItem>
        <MenuItem onClick={() => this.handleRequestSelectLanguage('tr')}>
          <LanguageIcon className={classNames(classes.icon, classes.iconHover)}/>
          Türkçe
        </MenuItem>
      </Menu>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      logout,
      openSnackbar,
      changeLocale
    },
    dispatch
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

AuthorizedMenu = connect(null, mapDispatchToProps)(AuthorizedMenu)

export default withStyles(styles)(AuthorizedMenu);
