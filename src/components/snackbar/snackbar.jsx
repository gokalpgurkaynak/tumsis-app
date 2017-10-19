/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from 'material-ui'
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from 'material-ui-icons/Close';
import PropTypes from 'prop-types';
import {closeSnackbar, openSnackbar} from '../../actions/index'

const styles = theme => ({
  success: {
    background: green[500]
  },
  fail: {
    background: red[500]
  },
  info: {
    background: blue[500]
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  }
});

class SimpleSnackbar extends React.Component {
  handleRequestClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.props.closeSnackbar();
  };

  render() {
    const { classes } = this.props;
    
    return (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.snackbar.open}
          autoHideDuration={6000}
          onRequestClose={this.handleRequestClose}
          SnackbarContentProps={{
            classes: { root: this.props.classes[this.props.snackbar.type]}
          }}
          message={<span id="message-id">{this.props.snackbar.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleRequestClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
    );
  }
}

SimpleSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

SimpleSnackbar = withStyles(styles)(SimpleSnackbar);

const mapStateToProps = (state) => {
    return {
        snackbar: state.snackbar
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      openSnackbar,
      closeSnackbar
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar)