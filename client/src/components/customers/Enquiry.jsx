import React, { Component } from "react";
import { message } from "flwww";
import config from "../../config";
import decode from "jwt-decode";

class Register extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.state = {
      itemDesc: "",
      brand: "",
      model: "",
      serialNo: "",
      urgent: false,
      faultDesc: "",
      files: null,
      custID: decode(localStorage.getItem("adeptcust_token")).user.custID,
      email: decode(localStorage.getItem("adeptcust_token")).user.email
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onUrgentCheck = () => {
    this.setState({ urgent: !this.state.urgent });
  };
  onSubmit = e => {
    e.preventDefault();
    let dataToSubmit = new FormData(this.formRef.current);
    fetch(
      config.serverHost + "/backend/cust/enquiry?email=" + this.state.email,
      {
        method: "POST",
        body: dataToSubmit
      }
    )
      .then(res => res.json())
      .then(data => {
        if (!data) {
          message("Sorry, Please try again later", "error");
        }
        message("Enquiry has been submitted!", "success");
        this.setState({
          itemDesc: "",
          brand: "",
          model: "",
          serialNo: "",
          urgent: false,
          faultDesc: "",
          files: null
        });
      });
  };

  render() {
    return (
      <div className="enquiry">
        <div className="enquiry-box">
          <h4>
            <b>Job</b> Enquiry
          </h4>
          <form ref={this.formRef} noValidate onSubmit={this.onSubmit}>
            <div className="item-desc">
              <input
                onChange={this.onChange}
                value={this.state.itemDesc}
                id="itemDesc"
                type="text"
                name="itemDesc"
              />
              <label
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
                htmlFor="itemDesc"
              >
                Item Description
                <span style={{ color: "red", fontSize: 20 }}>*</span>
              </label>
            </div>
            <div className="brand-model">
              <div>
                <input
                  onChange={this.onChange}
                  value={this.state.brand}
                  id="brand"
                  type="text"
                  name="brand"
                />
                <label
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                  htmlFor="brand"
                >
                  Brand<span style={{ color: "red", fontSize: 20 }}>*</span>
                </label>
              </div>
              <div>
                <input
                  onChange={this.onChange}
                  value={this.state.model}
                  id="model"
                  type="text"
                  name="model"
                />
                <label
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                  htmlFor="model"
                >
                  Model<span style={{ color: "red", fontSize: 20 }}>*</span>
                </label>
              </div>
            </div>
            <div className="item-desc">
              <input
                onChange={this.onChange}
                value={this.state.serialNo}
                id="serialNo"
                type="text"
                name="serialNo"
              />
              <label
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
                htmlFor="subject"
              >
                Serial No<span style={{ color: "red", fontSize: 20 }}>*</span>
              </label>
            </div>
            <div className="fault-desc">
              <textarea
                onChange={this.onChange}
                value={this.state.faultDesc}
                id="faultDesc"
                name="faultDesc"
              />
              <label
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
                htmlFor="faultDesc"
              >
                Symptoms<span style={{ color: "red", fontSize: 20 }}>*</span>
              </label>
            </div>
            <div className="last-row">
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
                name="productImage"
              />
              <label id="upload-text" htmlFor="raised-button-file">
                UPLOAD
              </label>
              <div className="urgency">
                <input
                  onChange={this.onUrgentCheck}
                  id="urgent"
                  type="checkbox"
                  name="urgent"
                />
                <label htmlFor="subject">Urgent?</label>
              </div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
