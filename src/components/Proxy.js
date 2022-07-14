//NOTE: App.js contains the data for some component and the component passes the data through whatever placeholder coded in the comp. ex: props

import React from "react";
//object destructuring version

export default function Proxy({ date, payment, description, amount }) {
  return (
    <div className="proxy-container">
      <table>
        <td>Date</td>
        <div>{date}</div>
        <td>Payment</td>
        <span>{payment}</span>
        <td>Description</td>
        <span>{description}</span>
        <td>Amount</td>
        <span>{amount}</span>
      </table>
    </div>
  );
}
