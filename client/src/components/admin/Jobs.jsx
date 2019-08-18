import React, { Component } from "react";
import JobItem from "../utils/JobItem";

export default class Jobs extends Component {
  state = {
    headers: [],
    body: [],
    loading: true
  };
  componentDidMount() {
    fetch("https://andreweijie.tech/backend/admin/all-jobs")
      .then(res => res.json())
      .then(data => {
        this.setState({
          headers: Object.keys(data[0]),
          body: data.splice(1)
        });
      });
  }

  render() {
    return (
      <div className="all-jobs containers">
        <div className="head-title">
          <h1>All Jobs</h1>
          {this.state.body.length == 0 ? <div className="loader" /> : null}
        </div>
        <hr className="admin-hr" />
        <div className="all-box">
          <table className="table">
            <thead>
              {this.state.headers.map(header => {
                return <th>{header}</th>;
              })}
            </thead>

            {this.state.body
              ? this.state.body.map(e => {
                  return <JobItem data={Object.values(e)} />;
                })
              : null}
          </table>
        </div>
      </div>
    );
  }
}
