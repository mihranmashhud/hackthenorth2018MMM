import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { auth } from "../firebase/index.js";
import * as routes from "../constants/routes";

const Wrapper = styled.div`
  padding: 60px 0;
`;
const Form = styled.form`
  margin: 0 auto;
  max-width: 320px;
`;

const INITIAL_STATE = {
  email: "",
  password: "",
  passwordConfirmation: "",
  error: null
};

const SignUp = ({ history }) => <SignUpForm history={history} />;

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.passwordConfirmation
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    const { username, email, password } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => error);

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
            type="submit">
            Sign Up
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

export default withRouter(SignUp);

export { SignUpForm };
