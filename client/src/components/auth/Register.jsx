import React, { Component } from "react";

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
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
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
      password2: this.state.password2
    };
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log("loggedin");
        console.log(data);
      });
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="register-page">
        <div id="back-box">
          <div id="register-box">
            <h4>
              <b>Register Below</b>
            </h4>
            <form className="form-box" noValidate onSubmit={this.onSubmit}>
              <div class="cols">
                <div className="input-field">
                  <label htmlFor="name">name</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.name}
                    id="name"
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="company">company</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.company}
                    id="company"
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.jobTitle}
                    id="jobTitle"
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="address">address</label>
                  <input
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
              <div class="cols">
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
                  <label htmlFor="password2">Confirm Password</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    id="password2"
                    type="password"
                  />
                </div>
                <button type="submit" onClick={this.onSubmit}>
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
