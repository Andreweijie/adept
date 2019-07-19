import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthUtils from "../auth/AuthUtils";

class ASideBar extends Component {
  auth = new AuthUtils();
  logOut = () => {
    this.auth.logout();
    this.props.history.replace("/login");
  };
  render() {
    return (
      <div id="admin-side">
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
          <Link to={`${this.props.match.url}/dashboard`}>Dashboard</Link>
          <Link to="/admin/all-jobs">All Jobs</Link>
          <Link to="/admin/customers">Customers</Link>
        </div>
        <button onClick={this.auth.logout}>Logout</button>
      </div>
    );
  }
}
export default withRouter(ASideBar);
