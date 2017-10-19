import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Layout from '../../components/layout/layout'
import TerminalDeviceRoutes from '../../components/terminal-device-routes/terminal-device-routes'

class Terminal extends Component {
  render = () => 
      <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Terminal</title>
        </Helmet>
        <TerminalDeviceRoutes {...this.props}/>
      </Layout>
}

export default Terminal;
