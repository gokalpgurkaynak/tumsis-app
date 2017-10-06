import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  Button,
  Snackbar,
  SnackbarContent,
  IconButton,
  Typography
} from 'material-ui';
import CloseIcon from 'material-ui-icons/Close';
import { blue, yellow, red } from 'material-ui/colors';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  error: {
    background: red['500'],
  },
  warning: {
    background: yellow['500'],
  },
  info: {
    background: blue['500'],
  }
});

class LoginFormSnackbar extends React.Component {
  state = {
    open: false,
    message: null,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.props.open}
        autoHideDuration={500000}
        onRequestClose={this.props.handleRequestClose}
      >
        <SnackbarContent
          className={ classes[this.props.type] }
          message={this.props.message}
          action={[
            <IconButton
              className={classes.close}
              onClick={this.props.handleRequestClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}

        />
      </Snackbar>
    );
  }
}

LoginFormSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginFormSnackbar);
