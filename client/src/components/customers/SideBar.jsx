import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthUtils from "../auth/AuthUtils";

class SideBar extends Component {
  auth = new AuthUtils();
  logOut = () => {
    this.auth.logout();
    this.props.history.replace("/login");
  };
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
          <Link to={`${this.props.match.url}/dashboard`}>Dashboard</Link>
          <Link to="/admin/all-jobs">Order History</Link>
          <Link to="/admin/customers">Edit Profile</Link>
          <Link to="/admin/customers">Change Password</Link>
          <Link to="/cust/enquiry">Job Enquiry</Link>
        </div>
        <button onClick={this.logOut}>Logout</button>
      </div>
    );
  }
}
export default withRouter(SideBar);
