import React, { Component } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid dashboard">
        <SideBar />
        <Header />
      </div>
    );
  }
}
