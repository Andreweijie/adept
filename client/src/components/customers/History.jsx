import React, { Component } from "react";
import JobItem from "../admin/JobItem";
import decode from "jwt-decode";

export default class History extends Component {
  state = {
    headers: [],
    body: [],
    custID: decode(localStorage.getItem("adeptcust_token")).user.custID
  };
  componentDidMount() {
    fetch("/cust/history?custID=" + this.state.custID)
      .then(res => res.json())
      .then(data => {
        if (data.length != 0) {
          console.log(data);
          this.setState({
            headers: Object.keys(data[0]),
            body: data
          });
        }
      });
  }

  render() {
    return (
      <div id="ord-history">
        <div id="all-jobs">
          <div class="all-box">
            <h1>Order History</h1>
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
      </div>
    );
  }
}
