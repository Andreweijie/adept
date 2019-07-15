import React, { Component } from "react";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";

export default class Cust extends Component {
  render() {
    return (
      <div id="cust">
        <SideBar />
        <Dashboard />
      </div>
    );
  }
}
