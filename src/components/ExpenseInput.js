import React from "react";

export default function ExpenseInput() {
  return (
    <form>
      <span>Date: </span>
      <input type="date" name="date" className="date" id="date"></input>
      <span>Payment Type: </span>
      <select name="payment-type">
        <option value="card" id="payment">
          Debit
        </option>
        <option value="credit" id="payment">
          Credit
        </option>
        <option value="cash" id="payment">
          Cash
        </option>
        <option value="check" id="payment">
          Check
        </option>
        <option value="other" id="payment">
          Other (crypto, barter, etc.)
        </option>
      </select>
      <span>Amount (USD):</span>{" "}
      <input
        type="text"
        name="Amount"
        id="amount"
        placeholder="Enter Dollar Amount"
      ></input>
    </form>
  );
}
