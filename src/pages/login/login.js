import React, { Component } from 'react';
import LoginForm from './login-form'

export default class Login extends Component {
  handleSubmit = (values) => console.log(values)
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }

  render() {
    return (
      <LoginForm onSubmit={this.submit}></LoginForm>
    );
  }
}
