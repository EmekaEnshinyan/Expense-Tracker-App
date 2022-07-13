import React, { Component } from "react";

class ExpenseInput extends Component() {
  render() {
    const { date, payment } = this.state;
    return (
      <form>
        <label htmlFor="name">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Payment</label>
        <input
          type="text"
          name="payment"
          id="payment"
          value={payment}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

class Form extends Comment {
  initialState = {
    date: "",
    payment: "",
    description: "",
    amount: "",
  };

  state = this.initialState;
}

handleChange = (event) => {
  const { date, value } = event.target;

  this.setState({
    [date]: value,
  });
};

export default ExpenseInput;
