import React, { Component } from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Github Gallery</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                +
              </NavItem>
              <NavItem eventKey={2} href="#">
                Sign In
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        ;
      </React.Fragment>
    );
  }
}
