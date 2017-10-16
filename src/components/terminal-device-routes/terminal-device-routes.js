import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import {
    Modem,
    SSPA,
    Beacon,
    ACU,
    MTekDownConverter,
    MTekUpConverter
} from '../devices/devices'

class TerminalDeviceRoutes extends Component {
    
  deviceComponentMap = {
    'ACU': ACU,
    'Modem': Modem,
    'SSPA': SSPA,
    'Beacon': Beacon,
    'MTekDownConverter': MTekDownConverter,
    'MTekDownConverter': MTekUpConverter
  }

  deviceRenderer = (componentName) => { 
    const component = this.deviceComponentMap[componentName];
    return <component />
  }

  renderDeviceRoutes = () =>
    <Switch>
        {
            this.props.terminal.devices.map(
                (device, index) => {
                    return (
                    <Route 
                        key={index} 
                        path={`${this.props.match.url}/${device.componentName}`} 
                        component={this.deviceComponentMap[device.componentName]} 
                        //render={() => this.deviceRenderer(device.componentName)}
                    />
                    )
                }
            )
        }
    </Switch>

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


export default withRouter(connect(mapStateToProps, undefined)(TerminalDeviceRoutes));
