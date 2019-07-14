import React, { Component } from "react";

export default class JobItem extends Component {
  render() {
    return (
      <tr>
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
