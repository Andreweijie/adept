import React, { Component } from "react";
import JobItem from "./JobItem";

export default class Jobs extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("/admin/all-jobs")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div id="all-jobs">
        <h1>All Jobs</h1>
        <div class="all-box">
          <table className="table">
            {this.state.data
              ? this.state.data.map(e => {
                  return <JobItem data={e} />;
                })
              : null}
          </table>
        </div>
      </div>
    );
  }
}
