import React, { Component } from "react";
import JobItem from "../utils/JobItem";
import DashItem from "../utils/DashItem";
import AuthUtils from "../auth/AuthUtils";
import config from "../../config";
import decode from "jwt-decode";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      pendingHeaders: [
        "Enquiry ID",
        "Manufacturer",
        "Model No",
        "Serial No",
        "Fault Symptoms",
        "Job Class",
        "Item Desc",
        "Date Of Enquiry",
      ],
      pendingBody: [],
      activeHeaders: [
        "Job ID",
        "Manufacturer",
        "Model No",
        "Serial No",
        "Fault Desc",
        "Job Status",
        "Item Desc",
        "Quote Amt",
        "Pickup Date",
      ],
      activeBody: [],
      user: decode(localStorage.getItem("adeptcust_token")).user,
    };
  }

  componentDidMount() {
    fetch(
      `${config.serverHost}/backend/cust/pending-jobs?email=${this.state.user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length != 0) {
          console.log(data);
          this.setState({
            pendingBody: this.formatPending(data),
          });
        } else {
          console.log(data);
        }
      });

    fetch(
      `${config.serverHost}/backend/cust/active-jobs?custID=${this.state.user.custID}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length != 0) {
          this.setState({
            activeBody: data,
          });
        }
      });
  }
  formatPending = (data) => {
    let options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
    };
    let pendingData = data.map((e) => {
      return Object.values(e);
    });
    let pendingFinal = pendingData.map((e) => {
      let ele = e.pop();
      e.unshift(ele);
      e[e.length - 1] = new Date(e[e.length - 1]);
      e[e.length - 1] = e[e.length - 1].toLocaleString("en-SG", options);
      return e;
    });
    console.log(pendingFinal);
    return pendingFinal;
  };
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dash-content">
          {this.state.pendingBody.length != 0 ? (
            <div className="pending-jobs containers">
              <h1>Pending Jobs</h1>
              <DashItem
                headers={this.state.pendingHeaders}
                body={this.state.pendingBody}
              />
            </div>
          ) : null}
          <div className="active-jobs containers">
            <h1>Active Jobs</h1>
            <DashItem
              headers={this.state.activeHeaders}
              body={this.state.activeBody}
              active={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
