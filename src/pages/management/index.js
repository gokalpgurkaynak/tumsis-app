import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Layout from '../../components/layout/layout'

class Page1 extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div>
        <h1>Page 1</h1>
      </div>
    );
  }
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
          <Route path="/apps/managment/:id/page1" component={Page1} />
          <Route path="/apps/managment/page2" component={Page2} />
          <Route path="/apps/managment/page3" render={(params) => { console.log(params); return (<h1>ASDF</h1>)}} />
      </Layout>
    );
  }
}

export default Index;
