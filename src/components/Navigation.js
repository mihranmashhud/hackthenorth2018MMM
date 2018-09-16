import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown
} from "react-bootstrap";

import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #ffffff;
`;

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <StyledLink to="/"> Github Gallery </StyledLink>{" "}
            </Navbar.Brand>{" "}
            <Navbar.Toggle />
          </Navbar.Header>{" "}
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/Account">
                Account{" "}
              </NavItem>{" "}
              <NavItem eventKey={2} href="/SignUp">
                Sign Up{" "}
              </NavItem>{" "}
              <NavItem eventKey={3} href="/LogIn">
                Login{" "}
              </NavItem>{" "}
            </Nav>{" "}
          </Navbar.Collapse>{" "}
        </Navbar>{" "}
      </React.Fragment>
    );
  }
}
