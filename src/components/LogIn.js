import React, { Component } from "react";
import { Grid, Cell } from "styled-css-grid";
import styled from "styled-components";

const divide = styled.div``;
export default class LogIn extends Component {
  render() {
    return (
      <React.Fragment>
        <label>
          Username <input type="text" />
        </label>
        <label>
          Password <input type="password" />
        </label>
      </React.Fragment>
    );
  }
}
