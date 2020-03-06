import React, { Component } from "react";
import { Switch, message } from "flwww";
import config from "../../config";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      jobTitle: "",
      address: "",
      mobileNo: "",
      officeNo: "",
      faxNo: "",
      email: "",
      password: "",
      password2: "",
      newCust: true,
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.password.length < 8) {
      message("Your password has to be at least 8 characters!", "error", 3);
      return;
    }
    const userData = {
      name: this.state.name,
      company: this.state.company,
      jobTitle: this.state.jobTitle,
      address: this.state.address,
      mobileNo: this.state.mobileNo,
      officeNo: this.state.officeNo,
      faxNo: this.state.faxNo,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      newCust: this.state.newCust
    };
    fetch(`${config.serverHost}/backend/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          message(data.error, "error", 4);
        } else if (data.name) {
          message(
            "Success! Please check your email to confirm your account!",
            "success",
            5
          );
          this.props.history.replace("/customer/login");
        } else {
          this.setState({
            errors: data
          });
        }
      });
  };
  changeToExisting = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  changeToNew = () => {
    this.setState({
      newCust: true
    });
  };
  render() {
    return (
      <div className="register-page">
        <div id="back-box">
          <img className="logo" src="https://i.imgur.com/UANNif7.png" />
          <h4>
            <b>Register</b> Below
          </h4>
          <div id="register-box">
            <div id="cust-type">
              <a>{this.state.newCust ? "New" : "Existing"} Customer</a>
              <Switch
                name="newCust"
                checked={this.state.newCust}
                onChange={this.changeToExisting}
              />
            </div>
            <form className="form-box" noValidate onSubmit={this.onSubmit}>
              {this.state.newCust ? (
                <div className="cols">
                  <div className="input-field">
                    <label htmlFor="name">Name*</label>
                    <input
                      required
                      onChange={this.onChange}
                      value={this.state.name}
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="company">Company*</label>
                    <input
                      required
                      onChange={this.onChange}
                      value={this.state.company}
                      id="company"
                      type="text"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="jobTitle">Job Title*</label>
                    <input
                      required
                      onChange={this.onChange}
                      value={this.state.jobTitle}
                      id="jobTitle"
                      type="text"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="address">address*</label>
                    <input
                      required
                      onChange={this.onChange}
                      value={this.state.address}
                      id="address"
                      type="text"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="mobileNo">Mobile Number</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.mobileNo}
                      id="mobileNo"
                      type="text"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="officeNo">Office Number</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.officeNo}
                      id="officeNo"
                      type="text"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="faxNo">Fax Number</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.faxNo}
                      id="faxNo"
                      type="text"
                    />
                  </div>
                </div>
              ) : null}
              <div class="cols">
                <div className="input-field">
                  <label htmlFor="email">
                    Email*{" "}
                    {this.state.errors.email ? (
                      <span>{this.state.errors.email}</span>
                    ) : null}
                  </label>
                  <input
                    required
                    autocomplete="off"
                    onChange={this.onChange}
                    value={this.state.email}
                    id="email"
                    type="email"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="password">
                    Password*{" "}
                    {this.state.errors.password ? (
                      <span>{this.state.errors.password}</span>
                    ) : null}
                  </label>
                  <input
                    required
                    autocomplete="new-password"
                    onChange={this.onChange}
                    value={this.state.password}
                    id="password"
                    type="password"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="password2">
                    Confirm Password*{" "}
                    {this.state.errors.password2 ? (
                      <span>{this.state.errors.password2}</span>
                    ) : null}
                  </label>
                  <input
                    required
                    onChange={this.onChange}
                    value={this.state.password2}
                    id="password2"
                    type="password"
                  />
                </div>
                <button
                  className="submit-btn"
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
