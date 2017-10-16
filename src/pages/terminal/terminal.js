import React, { Component } from 'react';

import Layout from '../../components/layout/layout'
import TerminalDeviceRoutes from '../../components/terminal-device-routes/terminal-device-routes'

class Terminal extends Component {
  
  render = () => 
      <Layout>
        <TerminalDeviceRoutes {...this.props}/>
      </Layout>
}

export default Terminal;
