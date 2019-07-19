import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import JobItem from "./JobItem";

export default class ADashboard extends Component {
  state = {
    enquiryid: "",
    quote: 0,
    jobid: "",
    status: "",
    test: false,
    headers: [],
    body: []
  };

  componentDidMount() {
    this.getPickups();
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  changeStatus = e => {
    e.preventDefault();
    const status = {
      jobId: this.state.jobid,
      status: this.state.status
    };

    fetch("http://localhost:5000/admin/change-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(status)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  confirmOrder = e => {
    e.preventDefault();
    const confirm = {
      enquiryId: this.state.enquiryid,
      quote: this.state.quote
    };

    fetch("http://localhost:5000/admin/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(confirm)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          test: !this.state.test
        });
      });
  };

  getPickups = () => {
    fetch("/admin/pickups")
      .then(res => res.json())
      .then(data => {
        if (data.length != 0) {
          this.setState({
            headers: Object.keys(data[0]),
            body: data
          });
        }
      });
  };
  render() {
    console.log(this.state.body);
    return (
      <div id="a-dash">
        <h1>Dashboard</h1>
        <div className="dash-content">
          <div className="forms">
            <CSSTransition
              in={this.state.test}
              timeout={2000}
              classNames="test6"
            >
              <div className="test5">
                <h1>Success!</h1>
              </div>
            </CSSTransition>

            <div className="confirm-form">
              <p>Confirm Job</p>
              <form>
                <div className="input-box">
                  <label htmlFor="enquiryid">EnquiryID</label>
                  <input
                    onChange={this.onChange}
                    id="enquiryid"
                    type="text"
                    value={this.state.enquiryid}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="quote">Quote</label>
                  <input onChange={this.onChange} type="text" id="quote" />
                </div>
                <button onClick={this.confirmOrder}>SUBMIT</button>
              </form>
            </div>
            <div className="change-form">
              <p>Change Job Status</p>
              <form>
                <div className="input-box">
                  <label htmlFor="jobid">JobID</label>
                  <input onChange={this.onChange} id="jobid" type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor="status">Job Status</label>
                  <input onChange={this.onChange} type="text" id="status" />
                </div>

                <button onClick={this.changeStatus}>SUBMIT</button>
              </form>
            </div>
          </div>
          <div className="pickup">
            <h1>Pickups</h1>
            <div className="all-box">
              <table className="table">
                {this.state.headers.map(header => {
                  return <th>{header}</th>;
                })}
                {this.state.body
                  ? this.state.body.map(e => {
                      return <JobItem data={e} custID={177} />;
                    })
                  : null}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
