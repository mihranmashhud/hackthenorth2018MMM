import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import styled from "styled-components";

const Background = styled.div`
  background-color: black;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const Corners = styled.div `

background-color: black;
`

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Corners>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"> Github Gallery </a>{" "}
            </Navbar.Brand>{" "}
            <Navbar.Toggle />
          </Navbar.Header>{" "}
          <Navbar.Collapse>
            <Nav pullRight>
              {this.props.authUser ? (
                <React.Fragment>
                  <NavItem eventKey={1} href="/Account">
                    Account{" "}
                  </NavItem>{" "}
                  <NavItem eventKey={2} onClick={auth.doSignOut()}>
                    Sign Out{" "}
                  </NavItem>{" "}
                  <NavItem eventKey={3} href="/AddRepo">
                    Add Repo{" "}
                  </NavItem>{" "}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavItem eventKey={4} href="/SignUp">
                    Sign Up{" "}
                  </NavItem>{" "}
                  <NavItem eventKey={5} href="/LogIn">
                    Log In{" "}
                  </NavItem>{" "}
                </React.Fragment>
              )}{" "}
              }
            </Nav>{" "}
          </Navbar.Collapse>{" "}
        </Navbar>{" "}
        </Corners>
      </React.Fragment>
    );
  }
}
