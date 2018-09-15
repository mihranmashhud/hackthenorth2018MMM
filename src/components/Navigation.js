import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation>
          <Navigation.Header>
            <Navigation.Brand>
              <a href="#brand">Github Gallery</a>
            </Navigation.Brand>
          </Navigation.Header>
          <Navigation.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                +
              </NavItem>
              <NavItem eventKey={2} href="#">
                Account
              </NavItem>
              <NavItem eventKey={3} href="#">
                Login
              </NavItem>
            </Nav>
          </Navigation.Collapse>
        </Navigation>
      </React.Fragment>
    );
  }
}
