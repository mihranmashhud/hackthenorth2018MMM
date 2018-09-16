import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { auth } from "../firebase";
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
  error: null
};

const LogIn = ({ history }) => <LogInForm history={history} />;

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => console.error);
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
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Log In
          </Button>
        </Form>
      </Wrapper>
    );
  }
}

export default withRouter(LogIn);

export { LogInForm };
