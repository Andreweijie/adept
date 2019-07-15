import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div id="profile">
          <h1>
            <b>Admin</b> Panel
          </h1>
          <div className="avatar" />
          <span className="role">
            <span>
              Jonathan | <b>Sales</b>
            </span>
          </span>
        </div>
        <div className="nav">
          <Link to="/admin/all-jobs">All Jobs</Link>
          <Link to="/admin/customers">Customers</Link>
        </div>
        <button>Logout</button>
      </div>
    );
  }
}
