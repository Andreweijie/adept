import React, { Component } from "react";
import JobItem from "../utils/JobItem";
import decode from "jwt-decode";
import config from "../../config";

export default class History extends Component {
  state = {
    headers: [
      "Customer ID",
      "Job ID",
      "Manufacturer",
      "Model No",
      "Serial No",
      "Item Description",
      "Job Status",
      "Quote Amount",
    ],
    body: [],
    custID: decode(localStorage.getItem("adeptcust_token")).user.custID,
  };
  componentDidMount() {
    fetch(
      `${config.serverHost}/backend/cust/history?custID=${this.state.custID}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length != 0) {
          console.log(data);
          data = data.map((completedOrder) => {
            completedOrder.closedDate = new Date(
              completedOrder.closedDate
            ).toLocaleString("en-SG", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
            });
            return completedOrder;
          });
          this.setState({
            body: data,
          });
        }
      });
  }

  render() {
    return (
      <div className="ord-hist containers">
        <h1>Order History</h1>
        <hr />
        <div className="all-box">
          <table className="table">
            {this.state.headers.map((header) => {
              return <th>{header}</th>;
            })}
            {this.state.body
              ? this.state.body.map((e) => {
                  return <JobItem data={Object.values(e)} />;
                })
              : null}
          </table>
        </div>
      </div>
    );
  }
}
