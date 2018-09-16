import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown
} from "react-bootstrap";
import { auth } from "../firebase";

const Background = styled.div`
  background-color: black;
`;

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
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
=======
        <Background>
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
        </Background>
>>>>>>> 37f43d69893a26c49dd6ad53a823297273ceb9ee
      </React.Fragment>
    );
  }
}
