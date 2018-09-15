import React, { Component } from "react";
import { Grid, Cell } from "styled-css-grid";
import Showcase from "./Showcase";

export default class ViewGrid extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid
          columns="repeat(auto-fit,minmax(300px,310px))"
          gap="15px"
          justifyContent="space-evenly"
        >
          <Cell center>
            <Showcase />
          </Cell>
          <Cell center>
            <Showcase />
          </Cell>
          <Cell center>
            <Showcase />
          </Cell>
          <Cell center>
            <Showcase />
          </Cell>
          <Cell center>
            <Showcase />
          </Cell>
          <Cell center>
            <Showcase />
          </Cell>
          <Cell center>
            <Showcase />
          </Cell>
          <Cell center>
            <Showcase />
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}
