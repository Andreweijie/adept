import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { message } from "flwww";

export default class JobItem extends Component {
  state = {
    show: false,
    selectedDay: undefined,
    time: ""
  };

  setMessage = data => {
    if (data.message) {
      message("Success!", "success", 4);
    } else {
      message("Failed!", "error", 4);
    }
  };

  setPickupDate = () => {
    const pickUpDate = {
      custID: parseInt(this.props.custID),
      jobid: this.props.data[5],
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
          this.setMessage(data);
        }
      });
  };
  handleDayChange = day => {
    this.setState({ selectedDay: day });
  };
  handleTimeChange = time => {
    this.setState({ time }, () => {
      console.log(this.state.time);
    });
  };
  render() {
    return (
      <tr>
        {this.props.active ? (
          <td id="set-time">
            {this.state.show ? (
              <div className="date-time-div">
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

        {this.props.data.map((fields, index) => {
          if (index == 7) {
            return (
              <td>
                <span className="tableData">${fields}</span>
              </td>
            );
          } else {
            return (
              <td>
                <span className="tableData">{fields}</span>
              </td>
            );
          }
        })}
      </tr>
    );
  }
}
