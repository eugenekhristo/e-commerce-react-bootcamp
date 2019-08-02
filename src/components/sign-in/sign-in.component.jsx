import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
            label={'email'}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            onChange={this.handleChange}
            label={'password'}
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
