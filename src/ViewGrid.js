import React, { Component } from "react";
import { Grid, Cell } from "styled-css-grid";
import Showcase from "./Showcase";

class ViewGrid extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid columns="repeat(auto-fit,minmax(300px,350px))" gap="30px">
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

export default App;
