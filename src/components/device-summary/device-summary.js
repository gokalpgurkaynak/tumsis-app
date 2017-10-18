import React from 'react';
import { Link } from 'react-router-dom'
import Badge from 'material-ui/Badge';
import { ListItem, ListItemText } from 'material-ui/List';

const devices = [
    {
        name: 'Modem',
        alarmCount: 1,
        alarmSeverity: 'critical'
    },
    {
        name: 'SSPA',
        alarmCount: 6,
        alarmSeverity: 'major'
    },
    {
        name: 'Beacon',
        alarmCount: 12,
        alarmSeverity: 'minor'
    },
    {
        name: 'ACU',
        alarmCount: 4,
        alarmSeverity: 'major'
    },
    {
        name: 'MTek Down Converter',
        alarmCount: 6,
        alarmSeverity: 'minor'
    },
    {
        name: 'MTek Up Converter',
        alarmCount: 6,
        alarmSeverity: 'critical'
    }
]

export default class DeviceSummary extends React.Component{
    render(){
      const device = devices.find((device) => device.name === this.props.deviceName);
  
      const { terminalName, classes } = this.props;
  
      const colorMap = {
        'minor':classes.colorPrimaryCriticalAlert,
        'major': classes.colorPrimaryMajorAlert,
        'critical': classes.colorPrimaryMinorAlert
      }
  
      return (
        <ListItem button className={classes.nested}>
          <Link to={`/${terminalName}/${device.name}`} className={classes.deviceSummaryRef} >
            <ListItemText primary={device.name} />
          </Link>
          <Badge classes={{badge: classes.badge, colorPrimary: colorMap[device.alarmSeverity]}} badgeContent={device.alarmCount} color='primary' />
        </ListItem>
      );
    }
  }