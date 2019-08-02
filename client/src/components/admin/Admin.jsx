import React, { Component } from "react";
import { Route } from "react-router-dom";
import ASideBar from "./ASideBar";
import ADashboard from "./ADashboard";
import Jobs from "./Jobs";
import Customers from "./Customers";
import Create from "./Create";

export default class Admin extends Component {
  render() {
    return (
      <div id="admin">
        <ASideBar />
        <Route
          path={`${this.props.match.url}/dashboard`}
          component={ADashboard}
        />
        <Route path="/admin/all-jobs" component={Jobs} />
        <Route path="/admin/create" component={Create} />
        <Route path="/admin/customers" component={Customers} />
      </div>
    );
  }
}
