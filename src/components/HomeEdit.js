import React, { Component } from "react";

export default class HomeEdit extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />

        <button onClick={AddRepository}>Add</button>
      </React.Fragment>
    );
  }
}
