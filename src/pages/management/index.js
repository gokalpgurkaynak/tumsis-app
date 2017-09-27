import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Layout from '../../components/layout/layout'

const Page1 =() => {
  return (
    <h1> Page 1 </h1>
  )
}

const Page2 =() => {
  return (
    <h1> Page 2 </h1>
  )
}

class Index extends Component {
  render() {
    return (
      <Layout>
        <Route path="/apps/managment/page1" component={Page1} />
        <Route path="/apps/managment/page2" component={Page2} />
        <Route path="page1/" component={Page1} />
        <Route path="page2/" component={Page2} />
      </Layout>
    );
  }
}

export default Index;
