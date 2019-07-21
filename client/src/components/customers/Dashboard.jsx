import React, { Component } from "react";
import JobItem from "../admin/JobItem";
import AuthUtils from "../auth/AuthUtils";
import decode from "jwt-decode";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      pendingHeaders: [],
      pendingBody: [],
      activeHeaders: [],
      activeBody: [],
      custID: decode(localStorage.getItem("adeptcust_token")).user.custID
    };
  }

  componentDidMount() {
    fetch("/cust/pending-jobs")
      .then(res => res.json())
      .then(data => {
        if (data.length != 0) {
          console.log(data);
          this.setState({
            pendingHeaders: Object.keys(data[0]),
            pendingBody: data
          });
        }
      });

    fetch("/cust/active-jobs?custID=" + this.state.custID)
      .then(res => res.json())
      .then(data => {
        if (data.length != 0) {
          this.setState({
            activeHeaders: Object.keys(data[0]),
            activeBody: data
          });
        }
      });
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dash-content">
          <div className="pending-jobs">
            <h1>Pending Jobs</h1>
            <div className="all-box">
              <table className="table">
                {this.state.pendingHeaders.map(header => {
                  return <th>{header}</th>;
                })}
                {true
                  ? this.state.pendingBody.map(e => {
                      return <JobItem data={e} />;
                    })
                  : null}
              </table>
            </div>
          </div>
          <div className="active-jobs">
            <h1>Active Jobs</h1>
            <div className="all-box">
              <table className="table">
                <th>Pickup Date</th>
                {this.state.activeHeaders.map(header => {
                  return <th>{header}</th>;
                })}
                {this.state.activeBody
                  ? this.state.activeBody.map(e => {
                      return (
                        <JobItem
                          active={true}
                          data={e}
                          custID={this.state.custID}
                        />
                      );
                    })
                  : null}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
