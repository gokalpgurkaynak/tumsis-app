/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import {openSnackbar, closeSnackbar } from '../../actions/index'

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
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
            'aria-describedby': 'message-id',
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