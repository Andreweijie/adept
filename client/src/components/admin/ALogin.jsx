import React, { Component } from "react";
import AuthUtils from "../auth/AuthUtils";

class ALogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.auth = new AuthUtils();
  }
  componentDidMount() {
    if (this.auth.loggedIn()) {
      this.props.history.replace("/admin/dashboard");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
      accountType: "admin"
    };
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        this.auth.setToken(data.adeptadmin_token, "adeptadmin_token");
        this.props.history.replace("/");
      });
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="login-page">
        <div id="back-box">
          <p id="welcome">
            Welcome to your <b>Admin Log In</b>
          </p>
          <div id="login-box">
            <h4>
              <b>Login Below</b>
            </h4>
            <form className="form-box" noValidate onSubmit={this.onSubmit}>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
              </div>
              <div />
            </form>
            <button type="submit" onClick={this.onSubmit}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ALogin;