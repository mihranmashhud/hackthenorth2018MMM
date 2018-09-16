import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import PasswordForget from "./PasswordForget";
import AddRepo from "./AddRepo";
import * as routes from "../constants/routes";
import { firebase } from "../firebase";

const outAuthUser = authUser => {
  console.log(authUser);
  return authUser;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (!!authUser) {
        this.setState(outAuthUser(authUser));
      } else {
        this.setState({
          authUser: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation authUser={this.state.authUser} />

          <hr />

          <Route exact path={routes.HOME} component={Home} />

          <Route exact path={routes.LOG_IN} component={LogIn} />

          <Route exact path={routes.SIGN_UP} component={SignUp} />

          {/* <Route exact path={routes.ADD_REPO} component={AddRepo} /> */}

          {/*<Route
            exact
            path={routes.PASSWORD_FORGET}
            component={PasswordForget}
          />*/}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
