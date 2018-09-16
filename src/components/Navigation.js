import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown
} from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Github Gallery</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/Account">
                Account
              </NavItem>
              <NavItem eventKey={2} href="/SignUp">
                Sign Up
              </NavItem>
              <NavItem eventKey={3} href="/LogIn">
                Login
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
