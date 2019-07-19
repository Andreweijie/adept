import React, { Component } from "react";
import { Button } from "@material-ui/core";

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
      files: null
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onUrgentCheck = () => {
    this.setState(
      { urgent: !this.state.urgent },
      console.log(this.state.urgent)
    );
  };
  onSubmit = e => {
    e.preventDefault();
    let dataToSubmit = new FormData(this.formRef.current);
    fetch("/cust/enquiry?custID=177", {
      method: "POST",
      body: dataToSubmit
    })
      .then(res => res.json())
      .then(data => console.log(data));
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
              <label htmlFor="itemDesc">Item Description</label>
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
                <label htmlFor="brand">Brand</label>
              </div>
              <div>
                <input
                  onChange={this.onChange}
                  value={this.state.model}
                  id="model"
                  type="text"
                  name="model"
                />
                <label htmlFor="model">Model</label>
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
              <label htmlFor="subject">Serial No</label>
            </div>
            <div className="fault-desc">
              <textarea
                onChange={this.onChange}
                value={this.state.faultDesc}
                id="faultDesc"
                name="faultDesc"
              />
              <label htmlFor="faultDesc">Symptoms</label>
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
              <label htmlFor="raised-button-file">
                <Button variant="raised" component="span">
                  Upload Images
                </Button>
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
