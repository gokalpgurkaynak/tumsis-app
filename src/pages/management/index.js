import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Layout from '../../components/layout/layout'
import { PageA } from './pages/page-a/page-a'
import menuConfig from './config/menu-config'
import PrivateRoute from '../../components/private-route'

const Page =({match}) => {
  return (
    <div>
      <h1> Page  </h1>
      <h3>{match.params.id}</h3>
    </div>
  )
}

class Index extends Component {
  
  render() {
    return (
      <Layout menuConfig={menuConfig}>
          <Route path={`${this.props.match.path}/:id/page1`} component={Page}/>
          <Route path={`${this.props.match.path}/:id/page2`} component={PageA}/>
      </Layout>
    );
  }
}

export default Index;
