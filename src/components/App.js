import React, { Component } from "react";
import { BrowseRouter as Router } from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Home />
      </Router>
    );
  }
}

export default App;
