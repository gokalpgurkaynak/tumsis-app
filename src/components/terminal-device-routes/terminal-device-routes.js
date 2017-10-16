import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

class TerminalDeviceRoutes extends Component {
    
  renderDeviceRoutes = () =>
    <Switch>
        {
            this.props.terminal.devices.map(
                (device, index) => {
                    return (
                    <Route 
                        key={index} 
                        path={`${this.props.match.url}/${device.name}`} 
                        component={device.component} 
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
