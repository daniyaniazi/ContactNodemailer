import React, { Component } from "react";
import axios from "axios";
class Form extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    sent: false,
  };
  //hanlde input
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //submit
  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.state;
    axios
      .post("/api/form", data)
      .then((res) => {
        console.log(res);
        // set msg
        this.setState({
          name: "",
          lastname: "",
          email: "",
          message: "",
          sent: true,
        });
        setTimeout(() => {
          //clear msg
          this.setState({
            ...this.state,
            sent: false,
          });
        }, 5000);
      })
      .catch((err) => {
        console.log("Error Occured", err);
      });
  };
  render() {
    return (
      <div className="form__container">
        <form onSubmit={this.handleSubmit}>
          <h1>Contact me</h1>
          {/* Form item */}
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="your name"
              value={this.state.name}
            />
          </div>
          {/* Form item */}
          {/* Form item */}
          <div className="form-item">
            <label htmlFor="lastname">Last name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastname"
              placeholder="your last name"
              value={this.state.lastname}
            />
          </div>
          {/* Form item */}

          {/* Form item */}
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="your email"
              value={this.state.email}
            />
          </div>
          {/* Form item */}
          {/* Form item */}
          <div className="form-item">
            <label htmlFor="message">message</label>
            <textarea
              onChange={this.handleChange}
              name="message"
              id="message"
              cols="23"
              rows="10"
              value={this.state.message}
            >
              {this.state.message}
            </textarea>
          </div>
          {/* Form item */}
          {/* Form item */}
          {this.state.sent && (
            <div className="form-item">
              <div className="success-msg">Messgae has been sent</div>
            </div>
          )}
          <div className="form-item">
            <button type="submit">Submit</button>
          </div>
          {/* Form item */}
        </form>
      </div>
    );
  }
}

export default Form;
