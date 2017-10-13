import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

class TerminalDeviceRoutes extends Component {
  
  renderDeviceRoutes = () =>
    this.props.terminal.devices.map(
      (device, index) => 
        <Route 
          key={index} 
          path={`${this.props.match.url}/${device.name}`} 
          component={device.component}
        />
    )

    render = () => {
        const routes = this.renderDeviceRoutes()
        return (
            <div>
                {routes}
            </div>
  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        terminal: state.terminal
    }
}


export default connect(mapStateToProps, undefined)(TerminalDeviceRoutes);