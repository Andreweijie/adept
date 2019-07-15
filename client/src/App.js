import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import AuthUtils from "./components/auth/AuthUtils";
import Login from "./components/auth/Login";
import Dashboard from "./components/customers/Dashboard";
import ChangePassword from "./components/auth/ChangePassword";
import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";
import Admin from "./components/admin/Admin";
import Cust from "./components/customers/Cust";
import "./scss/style.css";

const auth = new AuthUtils();
class App extends Component {
  constructor() {
    super();

    this.handleStatus = this.handleStatus.bind(this);
  }
  state = {
    loggedIn: auth.loggedIn()
  };

  componentDidMount() {
    localStorage.removeItem("id_token");
  }

  handleStatus = trueOrFalse => {
    console.log("changing");
    this.setState(
      {
        loggedIn: trueOrFalse
      },
      () => {
        console.log("changed");
      }
    );
  };
  render() {
    return (
      <div className="App">
        <Route path="/cust" component={Cust} />
        <Route path="/admin" component={Admin} />
        <Route
          exact
          path="/login"
          render={props => (
            <Login {...props} handleStatus={this.handleStatus} />
          )}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/change-password" component={ChangePassword} />
      </div>
    );
  }
}

export default withRouter(App);
