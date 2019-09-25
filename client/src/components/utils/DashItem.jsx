import React, { Component } from "react";
import DashBodyItem from "./DashBodyItem";

export default class DashItem extends Component {
  render() {
    return (
      <div className="dash-item">
        <div className="dash-headers">
          {this.props.headers.map(header => {
            return <span className="dash-header">{header}</span>;
          })}
        </div>
        <div className="dash-box">
          {this.props.body.map(item => {
            return (
              <DashBodyItem
                active={this.props.active}
                headers={this.props.headers}
                data={Object.values(item)}
              ></DashBodyItem>
            );
          })}
        </div>
      </div>
    );
  }
}
