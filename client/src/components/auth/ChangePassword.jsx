import React, { Component } from "react";
import decode from "jwt-decode";

class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      otp: "",
      password: "",
      password2: "",
      custOrNot: false
    };
  }
  componentDidMount() {
    if (localStorage.getItem("adeptcust_token")) {
      this.setState({ custOrNot: true });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newPassword = {
      password: this.state.password,
      password2: this.state.password2
    };
    if (this.state.custOrNot) {
      newPassword.custID = decode(
        localStorage.getItem("adeptcust_token").user.custID
      );
    } else {
      newPassword.otp = this.state.otp;
    }
    fetch("http://localhost:5000/api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPassword)
    }).then(response => console.log(response));
  };

  render() {
    return (
      <div className="change-page">
        <div id="change-box">
          <h4>
            <b>Change Password</b>
          </h4>
          <form className="form-box" noValidate onSubmit={this.onSubmit}>
            {!this.state.custOrNot ? (
              <div className="input-field">
                <label htmlFor="otp">One Time Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.otp}
                  id="otp"
                  type="text"
                />
              </div>
            ) : null}
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                id="email"
                type="email"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                id="password"
                type="password"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password2">New Password</label>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                id="password2"
                type="password"
              />
            </div>
            <div />
          </form>
          <button type="submit" onClick={this.onSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
