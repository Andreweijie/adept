import React, { Component } from "react";
import { Modal, Button, message } from "flwww";
import DatePicker from "react-datepicker";
import "react-day-picker/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import config from "../../config";
import decode from "jwt-decode";
export default class DashBodyItem extends Component {
  state = {
    modalIsVisible: false,
    show: false,
    selectedDay: new Date(),
    time: "",
    custID: decode(localStorage.getItem("adeptcust_token")).user.custID
  };

  componentDidMount() {
    if (this.props.active && this.props.data[4] === "Awaiting Pickup") {
      this.checkPickup();
    }
  }

  setMessage = data => {
    if (data.message) {
      message("Success! Pickup Date Set!", "success", 4);
    } else {
      message("Failed!", "error", 4);
    }
  };

  setPickupDate = () => {
    const pickUpDate = {
      custID: parseInt(this.state.custID),
      jobid: this.props.data[5],
      date: this.state.selectedDay,
      itemDesc: this.props.data[6]
    };

    fetch(`${config.serverHost}/backend/cust/set-pickup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pickUpDate)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setMessage(data);
          this.setState(
            {
              show: false
            },
            this.toggleModal()
          );
        }
      });
  };

  checkPickup = () => {
    const jobId = this.props.data[5];
    fetch(`${config.serverHost}/backend/cust/check-pickup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ jobid: jobId })
    })
      .then(response => response.json())
      .then(data => {
        if (!data.pickUpSet) {
          message(`Please click on MORE and set pickup date for JOB ${jobId}`);
        }
      });
  };
  handleDayChange = day => {
    this.setState({ selectedDay: day });
  };
  handleTimeChange = time => {
    this.setState({ time }, () => {
      console.log(this.state.time);
    });
  };
  toggleModal = () => {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible
    });
  };
  render() {
    const { modalIsVisible } = this.state;
    console.log(this.props.data);
    return (
      <div className="dash-body-items">
        <Modal
          title="PICKUP"
          isVisible={modalIsVisible}
          toggleModal={this.toggleModal}
        >
          <div className="modal-item">
            {this.props.data.map((header, index) => {
              return (
                <div className="modal-row">
                  <span className="modal-head">
                    {this.props.headers[index]}
                  </span>
                  <span>{header}</span>
                </div>
              );
            })}
            {this.props.active && this.props.data[4] == "Awaiting Pickup" ? (
              <div className="date-time-div">
                <span style={{ padding: 8 }}>Pickup Date</span>
                <DatePicker
                  selected={this.state.selectedDay}
                  onChange={this.handleDayChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />{" "}
                <button className="confirm-date" onClick={this.setPickupDate}>
                  Confirm
                </button>
              </div>
            ) : null}
          </div>
        </Modal>
        {this.props.data.map((header, index) => {
          if (index == 4 || index == 5) {
            return (
              <span onClick={this.toggleModal} className="dash-header">
                {header}
              </span>
            );
          } else {
            return <span className="dash-header child">{header}</span>;
          }
        })}
        <span className="dash-header child">
          <button className="open" onClick={this.toggleModal}>
            MORE
          </button>
        </span>
      </div>
    );
  }
}
