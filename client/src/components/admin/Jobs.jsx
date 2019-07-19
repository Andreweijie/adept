import React, { Component } from "react";
import JobItem from "./JobItem";

export default class Jobs extends Component {
  state = {
    headers: [],
    body: [],
    loading: true
  };
  componentDidMount() {
    fetch("/admin/all-jobs")
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
      <div id="all-jobs">
        <div class="all-box">
          <h1>All Jobs</h1>
          <table className="table">
            {this.state.headers.map(header => {
              return <th>{header}</th>;
            })}
            {this.state.body
              ? this.state.body.map(e => {
                  return <JobItem data={e} />;
                })
              : null}
          </table>
        </div>
      </div>
    );
  }
}
