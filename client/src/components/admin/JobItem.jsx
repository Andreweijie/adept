import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { Button, message } from "flwww";

export default class JobItem extends Component {
  state = {
    show: false,
    selectedDay: undefined
  };

  setMessage = () => {
    message("TRESFSFSSF", "success");
  };

  setPickupDate = () => {
    console.log(this.props.custID);
    const pickUpDate = {
      custID: parseInt(this.props.custID),
      jobid: this.props.data.jobid,
      date: this.state.selectedDay
    };

    fetch("/cust/set-pickup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pickUpDate)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setMessage();
        }
      });
  };
  handleDayChange = day => {
    this.setState({ selectedDay: day }, () =>
      console.log(this.state.selectedDay)
    );
  };
  render() {
    return (
      <tr>
        {this.props.active ? (
          <td id="set-time">
            {this.state.show ? (
              <div>
                <DayPickerInput onDayChange={this.handleDayChange} />{" "}
                <button className="confirm-date" onClick={this.setPickupDate}>
                  Confirm
                </button>
              </div>
            ) : (
              <button
                id="set-date"
                onClick={() => this.setState({ show: true })}
              >
                Set Pickup
              </button>
            )}
          </td>
        ) : null}

        {Object.keys(this.props.data).map(fields => {
          return (
            <td>
              <span className="tableData">{this.props.data[fields]}</span>
            </td>
          );
        })}
      </tr>
    );
  }
}
