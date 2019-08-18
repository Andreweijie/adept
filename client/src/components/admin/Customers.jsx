import React, { Component } from "react";
import JobItem from "../utils/JobItem";

export default class Customers extends Component {
  state = {
    headers: [],
    body: []
  };
  componentDidMount() {
    fetch("https://andreweijie.tech/backend/admin/customers")
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
      <div className="all-jobs containers">
        <div className="head-title">
          <h1>Customers</h1>
          {this.state.body.length == 0 ? <div className="loader" /> : null}
        </div>
        <hr className="admin-hr" />
        <div className="all-box">
          <table className="table">
            <thead>
              <tr>
                {this.state.headers.map(header => {
                  return <th>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.body
                ? this.state.body.map(e => {
                    return <JobItem data={Object.values(e)} />;
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
