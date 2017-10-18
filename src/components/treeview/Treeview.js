/* eslint-disable flowtype/require-valid-file-annotation */
import classnames from 'classnames'
import React from 'react';
import {connect} from 'react-redux'
import { Link, withRouter, Router } from 'react-router-dom'
import PropTypes from 'prop-types';
import { red, orange, lime } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import Badge from 'material-ui/Badge';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import SatelliteIcons from 'material-ui-icons/Satellite'
import AlertIcon from 'material-ui-icons/NewReleases'
import DevicesIcon from 'material-ui-icons/List'
import MailIcon from 'material-ui-icons/Mail'

import DeviceSummary from '../device-summary/device-summary'


import { FormattedMessage } from 'react-intl';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 9,
  },
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  colorPrimaryCriticalAlert: {
    backgroundColor: red[500]
  },
  colorPrimaryMajorAlert: {
    backgroundColor: orange[500]
  },
  colorPrimaryMinorAlert: {
    backgroundColor: lime[500]
  },
  listItemRoot: {
    marginRight: 0
  },
  deviceSummaryRef: {
    flex: '1 1 auto'
  }
});

class NestedList extends React.Component {
  state = { open: true, open2: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClick2 = () => {
    this.setState({ open2: !this.state.open2 });
  };

  renderDevices = () => {
    const { terminal, classes } = this.props;

    return terminal.devices.map( device => {
      return (
        <DeviceSummary deviceName={device.name} classes={classes} terminalName={terminal.name}/>
      )
      }
    )
  }

  renderItem = (id) => {
    const { terminal, classes } = this.props
    return (
      <Link to={`/${terminal.name}/alarms`}  className={classes.deviceSummaryRef}>
        <FormattedMessage id={id} />
      </Link>
    )
  }

  renderDevicesText = () => 
    <FormattedMessage id="layout.nav.devicesText" />

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root}>
        <ListItem button>
          <ListItemIcon classes={{root: classes.listItemRoot}}>
            <SatelliteIcons />
          </ListItemIcon>
          <ListItemText inset primary={this.renderItem('layout.nav.alarmsText')} />
        </ListItem>
        <ListItem button>
          <ListItemIcon classes={{root: classes.listItemRoot}}>
            <AlertIcon />
          </ListItemIcon>
          <ListItemText inset primary={this.renderItem('layout.nav.controlPanelText')} />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon classes={{root: classes.listItemRoot}}>
              { this.state.open ? <ExpandLess /> : <ExpandMore /> }
          </ListItemIcon>
          <ListItemText inset primary={this.renderDevicesText()} />
          <Badge classes={{badge: classes.badge, colorPrimary: classes.colorPrimaryCriticalAlert}} badgeContent={'12'} color='primary' />
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          {
            this.renderDevices()
          }       
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

NestedList =  withStyles(styles)(NestedList);

const mapStateToProps = (state) => {
  return {
      terminal: state.terminal
  }
}

export default withRouter(connect(mapStateToProps, undefined)(NestedList))
