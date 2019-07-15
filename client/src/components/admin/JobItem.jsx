import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

export default class JobItem extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <tr>
        {this.props.active ? (
          <td id="set-time">
            {this.state.show ? (
              <DayPickerInput />
            ) : (
              <button
                id="set-date"
                onClick={() => this.setState({ show: true })}
              >
                Set Pickup Date
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
