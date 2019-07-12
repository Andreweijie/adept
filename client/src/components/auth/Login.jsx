import React, { Component } from "react";
import AuthUtils from "./AuthUtils";
import { Link } from "react-router-dom";

class Login extends Component {
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
      console.log("loggedin");
      this.props.history.replace("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
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
        console.log("loggedin");
        this.auth.setToken(data.token);
        this.props.handleStatus(true);
        this.props.history.replace("/");
      });
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="login-page">
        <div id="back-box">
          <p id="welcome">
            Welcome to your <b>Adept Account</b>
          </p>
          <p id="reg-text">
            Don't have an account? <b>Register Here!</b>
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
export default Login;
