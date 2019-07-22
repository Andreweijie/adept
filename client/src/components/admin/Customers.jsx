import React, { Component } from "react";
import JobItem from "../admin/JobItem";
import decode from "jwt-decode";

export default class Customers extends Component {
  state = {
    headers: [],
    body: []
  };
  componentDidMount() {
    fetch("/admin/customers")
      .then(res => res.json())
      .then(data => {
        if (data.length != 0) {
          console.log(data);
          this.setState({
            headers: Object.keys(data[0]),
            body: data.splice(1)
          });
        }
      });
  }

  render() {
    return (
      <div id="all-jobs">
        <div class="all-box">
          <h1>Customers</h1>
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
