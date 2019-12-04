import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import AuthUtils from "./components/auth/AuthUtils";
import Login from "./components/auth/Login";
import ChangePassword from "./components/auth/ChangePassword";
import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";
import Cust from "./components/customers/Cust";
import decode from "jwt-decode";
import config from "./config";
import "./scss/style.css";
import PrivateRoute from "./components/auth/PrivateRoute";

const auth = new AuthUtils();
class App extends Component {
  state = {
    loggedIn: auth.loggedIn()
  };
  auth = new AuthUtils();
  componentDidMount() {
    //console.log(decode(localStorage.getItem("adeptcust_token")));
    //console.log(config.serverHost);
    if (localStorage.getItem("adeptcust_token")) {
      let user = decode(localStorage.getItem("adeptcust_token")).user;
      if (!user.custID) {
        let email = {
          email: user.email
        };

        fetch(`${config.serverHost}/backend/api/check-id`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(email)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (!data.success) {
              return;
            } else {
              this.auth.setToken(data.adeptcust_token, "adeptcust_token");
            }
          });
      } else {
        console.log("existing customer");
      }
    }
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
        <Route
          exact
          path="/"
          render={() => <Redirect to="/cust/dashboard" />}
        />
        <PrivateRoute path="/cust" component={Cust} />
        <Route
          exact
          path="/customer/login"
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
