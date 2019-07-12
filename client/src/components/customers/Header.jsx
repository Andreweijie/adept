import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span id="header-title">Account Dashboard</span>
        <button id="enquiry-btn">+ New Enquiry</button>
      </div>
    );
  }
}
