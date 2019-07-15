import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div id="profile">
          <h1>
            <b>Account</b> Panel
          </h1>

          <span className="role">
            <span>
              Jonathan | <b>Sales</b>
            </span>
          </span>
        </div>
        <div className="nav">
          <Link to="/admin/all-jobs">Order History</Link>
          <Link to="/admin/customers">Edit Profile</Link>
          <Link to="/admin/customers">Change Password</Link>
        </div>
        <button>Logout</button>
      </div>
    );
  }
}
