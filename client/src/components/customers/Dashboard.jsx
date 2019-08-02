import React, { Component } from "react";
import JobItem from "../utils/JobItem";
import AuthUtils from "../auth/AuthUtils";
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
        "Item Description",
        "Job Class",
        "Date Of Enquiry"
      ],
      pendingBody: [],
      activeHeaders: [
        "Manufacturer",
        "Model No",
        "Serial No",
        "Fault Description",
        "Job Status",
        "Job ID",
        "Item Description",
        "Quote Amt"
      ],
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
            pendingBody: data
          });
        }
      });

    fetch("/cust/active-jobs?custID=" + this.state.custID)
      .then(res => res.json())
      .then(data => {
        if (data.length != 0) {
          this.setState({
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
          <div className="pending-jobs containers">
            <h1>Pending Jobs</h1>
            <hr />
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
          <div className="active-jobs containers">
            <h1>Active Jobs</h1>
            <hr />
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
                          data={Object.values(e)}
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
