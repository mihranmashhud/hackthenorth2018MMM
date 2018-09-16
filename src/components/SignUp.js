import React, { Component } from "react";
import styled from "styled-components";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { auth } from "../firebase";

const Wrapper = styled.div`
  padding: 60px 0;
`;
const Form = styled.form`
  margin: 0 auto;
  max-width: 320px;
`;

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.passwordConfirmation
    );
  }

  signUp() {
    auth.doCreateUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="passwordConfirmation" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.signUp()}
            type="submit">
            Sign Up
          </Button>
        </Form>
      </Wrapper>
    );
  }
}
