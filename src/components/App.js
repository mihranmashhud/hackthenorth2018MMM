import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import PasswordForget from "./PasswordForget";

import * as routes from "../constants/routes";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />

        <hr />

        <Route exact path={routes.HOME} component={Home} />

        <Route exact path={routes.LOG_IN} component={LogIn} />

        <Route exact path={routes.SIGN_UP} component={SignUp} />

        <Route exact path={routes.PASSWORD_FORGET} component={PasswordForget} />
      </Router>
    );
  }
}

export default App;
