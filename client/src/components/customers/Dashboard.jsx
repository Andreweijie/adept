import React, { Component } from "react";
import JobItem from "../admin/JobItem";

export default class Dashboard extends Component {
  state = {
    pendingHeaders: [],
    pendingBody: [],
    activeHeaders: [],
    activeBody: []
  };

  componentDidMount() {
    fetch("/cust/pending-jobs")
      .then(res => res.json())
      .then(data => {
        this.setState({
          pendingHeaders: Object.keys(data[0]),
          pendingBody: data.splice(1)
        });
      });

    fetch("/cust/active-jobs?custID=177")
      .then(res => res.json())
      .then(data => {
        this.setState({
          activeHeaders: Object.keys(data[0]),
          activeBody: data
        });
      });
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dash-content">
          <div className="pending-jobs">
            <h1>Pending Jobs</h1>
            <div class="all-box">
              <table className="table">
                {this.state.pendingHeaders.map(header => {
                  return <th>{header}</th>;
                })}
                {this.state.pendingBody
                  ? this.state.pendingBody.map(e => {
                      return <JobItem data={e} />;
                    })
                  : null}
              </table>
            </div>
          </div>
          <div className="active-jobs">
            <h1>Active Jobs</h1>
            <div class="all-box">
              <table className="table">
                <th>Pickup Date</th>
                {this.state.activeHeaders.map(header => {
                  return <th>{header}</th>;
                })}
                {this.state.activeBody
                  ? this.state.activeBody.map(e => {
                      return <JobItem active={true} data={e} />;
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
